import { NextResponse } from "next/server";
import { BrevoClient } from "@getbrevo/brevo";

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { firstName, lastName, email, mobile, message } = data;

    if (!firstName || !lastName || !email || !mobile || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 },
      );
    }

    await brevo.transactionalEmails.sendTransacEmail({
      sender: {
        name: "Skyline",
        email: "veer@integramagna.com",
      },
      to: [
        {
          name: "Mansi",
          email: "mansiv824@gmail.com",
        },
      ],
      replyTo: {
        name: `${firstName} ${lastName}`,
        email,
      },
      subject: "New Website Enquiry - Skyline",
      htmlContent: `
        <h2>New Website Enquiry</h2>

        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error("Brevo error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email",
      },
      { status: 500 },
    );
  }
}
