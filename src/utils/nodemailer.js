import nodemailer from 'nodemailer';
import { google } from 'googleapis';
import config from '../config/config.js';


const oAuth2Client = new google.auth.OAuth2(config.CLIENT_ID, config.CLIENT_SECRET, config.REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: config.REFRESH_TOKEN });

// const accessToken = await oAuth2Client.getAccessToken();


// export default class Mail {

//     constructor() {

//         this.transport = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 type: 'OAuth2',
//                 user: config.TRANSPORT_USER,
//                 clientId: config.CLIENT_ID,
//                 clientSecret: config.CLIENT_SECRET,
//                 refreshToken: config.REFRESH_TOKEN,
//                 accessToken: accessToken.token,
//             },
//         })
//     };

//     send = async (mailOptions) => {
//         try {
//             const result = await this.transport.sendMail({
//                 from: config.TRANSPORT_USER,
//                 to: mailOptions.user,
//                 subject: mailOptions.subject,
//                 html: mailOptions.html
//             });
    
//             return result;
//         } catch (error) {
//             console.error('Error sending email:', error);
//             throw error;
//         }
//     }
// }

// export const sendMail = new Mail();


export const sendMail = async (mailOptions) => {
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: config.TRANSPORT_USER,
                clientId: config.CLIENT_ID,
                clientSecret: config.CLIENT_SECRET,
                refreshToken: config.REFRESH_TOKEN,
                accessToken: accessToken.token,
            },
        });
    
        const result = await transport.sendMail(mailOptions);
        return result;
    } catch (error) {
        console.error('Error sending email:', error);
        throw error;
    }
}