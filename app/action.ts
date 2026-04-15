"use server"

import { Resend } from "resend"

type ContactFormData = {
  name: string
  email: string
  message: string
}

type MailtoData = {
  to: string
  subject: string
  body: string
}

const CONTACT_EMAIL = "addypearl09@gmail.com"
const FALLBACK_FROM_EMAIL = "Portfolio <onboarding@resend.dev>"

function sanitizeText(value: string) {
  return value.trim().replace(/\r\n/g, "\n")
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function buildMailtoData(data: ContactFormData): MailtoData {
  return {
    to: CONTACT_EMAIL,
    subject: `Portfolio inquiry from ${data.name}`,
    body: `Name: ${data.name}\nEmail: ${data.email}\n\nProject details:\n${data.message}`,
  }
}

export async function sendContactEmail(data: ContactFormData) {
  const payload = {
    name: sanitizeText(data.name),
    email: sanitizeText(data.email),
    message: sanitizeText(data.message),
  }

  if (!payload.name || !payload.email || !payload.message) {
    return {
      success: false,
      message: "Please fill in your name, email, and project details.",
    }
  }

  if (!isValidEmail(payload.email)) {
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  const mailtoData = buildMailtoData(payload)
  const resendApiKey = process.env.RESEND_API_KEY

  if (!resendApiKey) {
    return {
      success: true,
      fallback: true,
      mailtoData,
      message: "Direct email is not configured yet. Your email app will open instead.",
    }
  }

  try {
    const resend = new Resend(resendApiKey)
    const { error } = await resend.emails.send({
      from: process.env.PORTFOLIO_FROM_EMAIL || FALLBACK_FROM_EMAIL,
      to: [CONTACT_EMAIL],
      subject: `Portfolio inquiry from ${payload.name}`,
      reply_to: payload.email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 680px; margin: 0 auto; padding: 24px; color: #1c1917;">
          <div style="padding: 24px; border-radius: 18px; background: linear-gradient(135deg, #c6633f, #295f86); color: #fafaf9;">
            <p style="margin: 0 0 8px; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase;">New portfolio inquiry</p>
            <h1 style="margin: 0; font-size: 28px;">${escapeHtml(payload.name)}</h1>
          </div>

          <div style="margin-top: 20px; padding: 24px; border-radius: 18px; background: #f6efe6; border: 1px solid #e7dccf;">
            <p style="margin: 0 0 10px;"><strong>Email:</strong> ${escapeHtml(payload.email)}</p>
            <p style="margin: 0; white-space: pre-wrap; line-height: 1.7;">${escapeHtml(payload.message)}</p>
          </div>

          <p style="margin-top: 18px; color: #57534e; font-size: 13px;">
            Reply directly to this email to continue the conversation with ${escapeHtml(payload.name)}.
          </p>
        </div>
      `,
      text: `New portfolio inquiry\n\nName: ${payload.name}\nEmail: ${payload.email}\n\nProject details:\n${payload.message}`,
    })

    if (error) {
      console.error("Resend error", error)

      return {
        success: true,
        fallback: true,
        mailtoData,
        message: "I could not send this directly, so your email app will open instead.",
      }
    }

    return {
      success: true,
      message: "Thanks. Your message has been sent successfully.",
    }
  } catch (error) {
    console.error("Unexpected email error", error)

    return {
      success: true,
      fallback: true,
      mailtoData,
      message: "I could not send this directly, so your email app will open instead.",
    }
  }
}
