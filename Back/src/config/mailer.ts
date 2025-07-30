import nodemailer from "nodemailer";

const mailSender = process.env.MAIL_SENDER;
const pass = process.env.PASSWORD;

const transporter = nodemailer.createTransport({
	host: 'sandbox.smtp.mailtrap.io',
	port: 2525,
	auth: {
		user: mailSender,
		pass: pass
	},
});

export class Mailer {
	static createMessageObject(
		emailToBeSendedTo: string,
		subject: string,
		messageText: string
	) {
		return {
			from: mailSender,
			to: emailToBeSendedTo,
			subject,
			text: messageText,
		};
	}

	public static async sendEmail(
		emailToBeSendedTo: string,
		subject: string,
		messageText: string
	) {
		const messageObject = Mailer.createMessageObject(
			emailToBeSendedTo,
			subject,
			messageText
		);

		try {
			const info = await transporter.sendMail(messageObject);
			console.log("✅ Email enviado com sucesso!");
			console.log("📩 Detalhes:", info.response);
		} catch (error) {
			console.error("❌ Erro ao enviar email:", error);
			throw error;
		}
	}
}
