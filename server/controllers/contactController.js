import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

export const sendContactMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "Name, email and message are required",
            });
        }

        await transporter.sendMail({
            from: `"SeoRanker Contact" <${process.env.SMTP_USER}>`,
            to: process.env.CONTACT_TO_EMAIL,
            replyTo: email,
            subject: `New Contact Message from ${name}`,

            text: `
Name: ${name}
Email: ${email}

Message:
${message}
            `,
        });

        res.status(200).json({
            success: true,
            message: "Message sent successfully",
        });

    } catch (error) {
        console.error("Email error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to send message",
        });
    }
};