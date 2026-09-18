import { NextResponse } from "next/server";
import { BrevoClient } from "@getbrevo/brevo";

const brevo = new BrevoClient({
  apiKey: process.env.BREVO_API_KEY!,
});

export async function POST(request: Request) {
  try {
    const data = await request.json();
    if (
      !data.firstName ||
      !data.lastName ||
      !data.email ||
      !data.mobile ||
      !data.message
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required",
        },
        { status: 400 },
      );
    }

    const { firstName, lastName, email, mobile, message } = data;

    await brevo.transactionalEmails.sendTransacEmail({
      sender: {
        name: "Skyline",
        email: "email",
      },
      to: [
        {
          name: "Skyline",
          email: "OWNER_EMAIL",
        },
      ],
      replyTo: {
        name: `${firstName} ${lastName}`,
        email,
      },
      subject: "New Contact Form Submission",
      htmlContent: `
        <h2>New Contact Form Submission</h2>

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
