import nodemailer from 'nodemailer';
import config from '../config/config.js';


export default class Mail {

    constructor() {
        this.transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config.TRANSPORT_USER,
                pass: config.GOOGLE_TRANSPORT_PASS
            },
            tls: {
                rejectUnauthorized: false
            },
            port: 587
        })
    };

    send = async (mailOptions) => {
        const result = await this.transport.sendMail({
            from: config.TRANSPORT_USER,
            to: mailOptions.user,
            subject: mailOptions.subject,
            html: mailOptions.html
        });

        return result;
    }
}

export const sendMail = new Mail();