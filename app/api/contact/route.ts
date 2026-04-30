import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "mithr.mitresource@gmail.com",
    pass: "orbbdnlrhboccoua",
  },
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: "vkmachavarapu@mitresource.com",
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table border="1" cellpadding="10" style="border-collapse: collapse; font-family: Arial, sans-serif;">
          <tr>
            <td><strong>Name</strong></td>
            <td>${name}</td>
          </tr>
          <tr>
            <td><strong>Email</strong></td>
            <td>${email}</td>
          </tr>
          <tr>
            <td><strong>Phone</strong></td>
            <td>${phone || "N/A"}</td>
          </tr>
          <tr>
            <td><strong>Company</strong></td>
            <td>${company || "N/A"}</td>
          </tr>
          <tr>
            <td><strong>Message</strong></td>
            <td>${message.replace(/\n/g, "<br>")}</td>
          </tr>
        </table>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}
Company: ${company || "N/A"}

Message:
${message}
      `.trim(),
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    )
  }
}
