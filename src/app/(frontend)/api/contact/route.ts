import { NextResponse } from 'next/server'
import { getPayload } from 'payload'

import config from '@/payload.config'

export async function POST(request: Request) {
  try {
    const data = await request.json()

    const { firstName, lastName, email, mobile, message, source } = data

    if (!firstName || !mobile) {
      return NextResponse.json(
        {
          success: false,
          message: 'First name and mobile number are required',
        },
        { status: 400 },
      )
    }

    const payload = await getPayload({ config })

    await payload.create({
      collection: 'form-submissions',
      data: {
        firstName,
        lastName,
        email,
        mobile,
        message,
        source: source === 'popup' ? 'popup' : 'contact-page',
      },
    })

    return NextResponse.json({
      success: true,
    })
  } catch (error) {
    console.error('Form submission error:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Failed to submit your message',
      },
      { status: 500 },
    )
  }
}
