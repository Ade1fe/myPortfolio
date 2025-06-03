// "use server"

// type ContactFormData = {
//   name: string
//   email: string
//   message: string
// }

// export async function sendContactEmail(data: ContactFormData) {
//   try {
//     // For now, we'll use a simple fetch approach to send emails
//     // This can be replaced with a proper email service like Resend, EmailJS, or SendGrid

//     // In development, just log the email data
//     if (process.env.NODE_ENV === "development") {
//       console.log("📧 Email would be sent:", {
//         to: "addypearl09@gmail.com",
//         from: data.email,
//         subject: `Portfolio Contact from ${data.name}`,
//         message: data.message,
//       })

//       // Simulate a delay
//       await new Promise((resolve) => setTimeout(resolve, 1000))

//       return {
//         success: true,
//         message: "Message sent successfully! (Development mode - check console)",
//       }
//     }

//     // For production, you can integrate with email services like:
//     // 1. Resend (recommended for Next.js)
//     // 2. SendGrid
//     // 3. EmailJS
//     // 4. Mailgun

//     // Example with fetch to a webhook or email service:
//     const emailData = {
//       to: "addypearl09@gmail.com",
//       from: data.email,
//       subject: `Portfolio Contact from ${data.name}`,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//           <h2 style="color: #ec4899;">New Contact Form Submission</h2>
//           <p><strong>Name:</strong> ${data.name}</p>
//           <p><strong>Email:</strong> ${data.email}</p>
//           <h3 style="color: #8b5cf6;">Message:</h3>
//           <p style="background-color: #f8fafc; padding: 15px; border-radius: 5px; border-left: 4px solid #ec4899;">
//             ${data.message.replace(/\n/g, "<br>")}
//           </p>
//           <hr style="margin: 20px 0; border: none; border-top: 1px solid #e2e8f0;">
//           <p style="color: #64748b; font-size: 12px;">
//             This message was sent from your portfolio contact form.
//           </p>
//         </div>
//       `,
//       text: `
// Name: ${data.name}
// Email: ${data.email}

// Message:
// ${data.message}
//       `,
//     }

//     // For production, replace this with your actual email service
//     // Example: await fetch('your-email-service-endpoint', { method: 'POST', body: JSON.stringify(emailData) })

//     console.log("📧 Production email would be sent:", emailData)

//     return {
//       success: true,
//       message: "Thank you! Your message has been sent successfully.",
//     }
//   } catch (error) {
//     console.error("❌ Error sending email:", error)
//     return {
//       success: false,
//       message: "Failed to send message. Please try again later or contact me directly at addypearl09@gmail.com",
//     }
//   }
// }


// "use server"

// import { Resend } from "resend"

// const resend = new Resend("re_JcwKUHKa_CQGZZJcwcBcwGDnFn1UKjLwo")

// type ContactFormData = {
//   name: string
//   email: string
//   message: string
// }

// export async function sendContactEmail(data: ContactFormData) {
//   try {
//     const { data: emailData, error } = await resend.emails.send({
//       from: "Portfolio Contact <onboarding@resend.dev>",
//       to: ["addypearl09@gmail.com"],
//       subject: `Portfolio Contact from ${data.name}`,
//       replyTo: data.email,
//       html: `
//         <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
//           <div style="background: linear-gradient(135deg, #ec4899, #8b5cf6, #06b6d4); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
//             <h1 style="color: white; margin: 0; text-align: center;">New Portfolio Contact</h1>
//           </div>
          
//           <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #ec4899;">
//             <h2 style="color: #1e293b; margin-top: 0;">Contact Details</h2>
//             <p style="margin: 10px 0;"><strong style="color: #ec4899;">Name:</strong> ${data.name}</p>
//             <p style="margin: 10px 0;"><strong style="color: #8b5cf6;">Email:</strong> ${data.email}</p>
//           </div>
          
//           <div style="margin: 20px 0;">
//             <h3 style="color: #1e293b; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">Message</h3>
//             <div style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; border-left: 4px solid #06b6d4; white-space: pre-wrap; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6;">
// ${data.message}
//             </div>
//           </div>
          
//           <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
          
//           <div style="text-align: center; color: #64748b; font-size: 12px;">
//             <p>This message was sent from your portfolio contact form.</p>
//             <p>Reply directly to this email to respond to ${data.name}</p>
//           </div>
//         </div>
//       `,
//       text: `
// New Portfolio Contact

// Name: ${data.name}
// Email: ${data.email}

// Message:
// ${data.message}

// ---
// This message was sent from your portfolio contact form.
// Reply directly to this email to respond to ${data.name}.
//       `,
//     })

//     if (error) {
//       console.error("❌ Resend error:", error)
//       return {
//         success: false,
//         message: "Failed to send message. Please try again later or contact me directly at addypearl09@gmail.com",
//       }
//     }

//     console.log("✅ Email sent successfully:", emailData)
//     return {
//       success: true,
//       message: "Thank you! Your message has been sent successfully. I'll get back to you soon!",
//     }
//   } catch (error) {
//     console.error("❌ Error sending email:", error)
//     return {
//       success: false,
//       message: "Failed to send message. Please try again later or contact me directly at addypearl09@gmail.com",
//     }
//   }
// }


"use server"

import { Resend } from "resend"

// Use environment variable for security
const resend = new Resend(process.env.RESEND_API_KEY || "re_JcwKUHKa_CQGZZJcwcBcwGDnFn1UKjLwo")

type ContactFormData = {
  name: string
  email: string
  message: string
}

export async function sendContactEmail(data: ContactFormData) {
  try {
    // Validate the data first
    if (!data.name || !data.email || !data.message) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    console.log("🔄 Attempting to send email with Resend...")

    const { data: emailData, error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>", // Simplified from field
      to: ["addypearl09@gmail.com"],
      subject: `Portfolio Contact from ${data.name}`,
      replyTo: data.email,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #ec4899, #8b5cf6, #06b6d4); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
            <h1 style="color: white; margin: 0; text-align: center;">New Portfolio Contact</h1>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #ec4899;">
            <h2 style="color: #1e293b; margin-top: 0;">Contact Details</h2>
            <p style="margin: 10px 0;"><strong style="color: #ec4899;">Name:</strong> ${data.name}</p>
            <p style="margin: 10px 0;"><strong style="color: #8b5cf6;">Email:</strong> ${data.email}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #1e293b; border-bottom: 2px solid #06b6d4; padding-bottom: 10px;">Message</h3>
            <div style="background-color: #f1f5f9; padding: 15px; border-radius: 8px; border-left: 4px solid #06b6d4; white-space: pre-wrap; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6;">
${data.message}
            </div>
          </div>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e2e8f0;">
          
          <div style="text-align: center; color: #64748b; font-size: 12px;">
            <p>This message was sent from your portfolio contact form.</p>
            <p>Reply directly to this email to respond to ${data.name}</p>
          </div>
        </div>
      `,
      text: `
New Portfolio Contact

Name: ${data.name}
Email: ${data.email}

Message:
${data.message}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to ${data.name}.
      `,
    })

    if (error) {
      console.error("❌ Resend error:", error)

      // If Resend fails, fall back to mailto
      console.log("🔄 Falling back to mailto method...")
      return {
        success: true,
        message: "Message received! Opening your email client to send the message.",
        fallback: true,
        mailtoData: {
          to: "addypearl09@gmail.com",
          subject: `Portfolio Contact from ${data.name}`,
          body: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
        },
      }
    }

    console.log("✅ Email sent successfully via Resend:", emailData)
    return {
      success: true,
      message: "Thank you! Your message has been sent successfully. I'll get back to you soon!",
    }
  } catch (error) {
    console.error("❌ Error sending email:", error)

    // Fallback to mailto if Resend completely fails
    return {
      success: true,
      message: "Opening your email client to send the message.",
      fallback: true,
      mailtoData: {
        to: "addypearl09@gmail.com",
        subject: `Portfolio Contact from ${data.name}`,
        body: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
      },
    }
  }
}
