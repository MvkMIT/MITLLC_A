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

    const phoneLine = phone ? `<tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #dee2e6;">
                                  <span style="color: #6c757d; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Phone</span>
                                  <p style="margin: 5px 0 0 0; color: #212529; font-size: 16px; font-weight: 500;">
                                    <a href="tel:${phone}" style="color: #2d5a87; text-decoration: none;">${phone}</a>
                                  </p>
                                </td>
                              </tr>` : ''
    const companyLine = company ? `<tr>
                                <td style="padding: 12px 0; border-bottom: 1px solid #dee2e6;">
                                  <span style="color: #6c757d; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Company</span>
                                  <p style="margin: 5px 0 0 0; color: #212529; font-size: 16px; font-weight: 500;">${company}</p>
                                </td>
                              </tr>` : ''

    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: "hr@mitresource.com",
      replyTo: email,
      subject: `New Inquiry from ${name} | Maganti Group, LLC`,
      html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Inquiry | Maganti Group, LLC</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
          <tr>
            <td style="background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); padding: 35px 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 0.5px;">Maganti Group, LLC</h1>
              <p style="color: #a8c5e8; margin: 8px 0 0 0; font-size: 14px;">Technology Consulting & Talent Solutions</p>
            </td>
          </tr>
          <tr>
            <td style="padding: 40px;">
              <h2 style="color: #1e3a5f; margin: 0 0 25px 0; font-size: 20px; font-weight: 600; border-bottom: 2px solid #e9ecef; padding-bottom: 15px;">New Contact Inquiry</h2>
              <p style="color: #495057; font-size: 15px; line-height: 1.6; margin: 0 0 30px 0;">You have received a new inquiry from your website contact form. Please review the details below and respond at your earliest convenience.</p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f8f9fa; border-radius: 8px; margin-bottom: 30px;">
                <tr>
                  <td style="padding: 25px;">
                    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #dee2e6;">
                          <span style="color: #6c757d; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Name</span>
                          <p style="margin: 5px 0 0 0; color: #212529; font-size: 16px; font-weight: 500;">${name}</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding: 12px 0; border-bottom: 1px solid #dee2e6;">
                          <span style="color: #6c757d; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Email</span>
                          <p style="margin: 5px 0 0 0; color: #212529; font-size: 16px; font-weight: 500;">
                            <a href="mailto:${email}" style="color: #2d5a87; text-decoration: none;">${email}</a>
                          </p>
                        </td>
                      </tr>
                      ${phoneLine}
                      ${companyLine}
                      <tr>
                        <td style="padding: 12px 0 0 0;">
                          <span style="color: #6c757d; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; font-weight: 600;">Message</span>
                          <p style="margin: 10px 0 0 0; color: #212529; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td align="center" style="padding: 10px 0 30px 0;">
                    <a href="mailto:${email}" style="display: inline-block; background: linear-gradient(135deg, #1e3a5f 0%, #2d5a87 100%); color: #ffffff; text-decoration: none; padding: 14px 35px; border-radius: 6px; font-size: 15px; font-weight: 600; letter-spacing: 0.3px;">Reply to ${name}</a>
                  </td>
                </tr>
              </table>
              <p style="color: #6c757d; font-size: 13px; line-height: 1.6; margin: 0; text-align: center;">This inquiry was submitted on ${new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })} via the Maganti Group website contact form.</p>
            </td>
          </tr>
          <tr>
            <td style="background-color: #f8f9fa; padding: 25px 40px; text-align: center; border-top: 1px solid #e9ecef;">
              <p style="color: #6c757d; margin: 0 0 8px 0; font-size: 13px; font-weight: 500;">Maganti Group, LLC</p>
              <p style="color: #adb5bd; margin: 0; font-size: 12px;">21 State Street, Waterbury, CT 06702</p>
              <p style="color: #adb5bd; margin: 5px 0 0 0; font-size: 12px;">
                <a href="tel:+12034900100" style="color: #2d5a87; text-decoration: none;">+1 (203) 490-0100</a> | 
                <a href="mailto:hr@magantigroupllc.com" style="color: #2d5a87; text-decoration: none;">hr@magantigroupllc.com</a>
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
      text: (() => {
        const phoneTxt = phone ? `Phone:    ${phone}\n` : ''
        const companyTxt = company ? `Company:  ${company}\n` : ''
        return `MAGANTI GROUP, LLC - NEW CONTACT INQUIRY

================================================

You have received a new inquiry from ${name} via the Maganti Group website contact form.

CONTACT INFORMATION
------------------------------------------------
Name:     ${name}
Email:    ${email}
${phoneTxt}${companyTxt}
MESSAGE
------------------------------------------------
${message}

------------------------------------------------

Received: ${new Date().toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}

Reply directly to this email to respond to ${name}.

---
Maganti Group, LLC
21 State Street, Waterbury, CT 06702
Phone: +1 (203) 490-0100
Email: hr@magantigroupllc.com
https://magantigroupllc.com
`
      })(),
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
