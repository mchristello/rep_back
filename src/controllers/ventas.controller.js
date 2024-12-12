import config from '../config/config.js';
import { VentasService } from '../repository/index.js';
import { sendMail } from '../utils/nodemailer.js';

export const get = async (req, res) => {
    try {
        const user = req.session.user;
        const ventas = await VentasService.get(user);

        const result = ventas.length > 0 ? ventas : []

        return res.status(200).send({ 
            status: 'success',
            message: `Ventas de ${user.first_name}`,
            payload: result
        })
    } catch (error) {
        console.log(`Error in expenses.controller: ${error}`);
        return res.status(500).send({ status: 'error', message: error.message })
    }
}

export const getById = async (req, res) => {
    try {
        const vid = req.params?.vid || req.body.vid;

        if(!vid) {
            return res.status(400).send({ status: 'error', message: `Se debe proveer un ID`})
        }

        const result = await VentasService.getById(vid);

        return res.status(200).send({ 
            status: 'success',
            message: `Resultado de busqueda`,
            payload: result
        }); 
    } catch (error) {
        console.log(`Error in ventas.controller: ${error}`);
        return res.status(500).send({ status: 'error', message: error.message })
    }
}

export const create = async (req, res) => {
    try {
        const user = req.session.user

        const data = req.body
        data.user = user._id

        const html = 
                `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
                    <html dir="ltr" lang="es">
                        <head>
                            <link rel="preload" as="image" href="https://react-email-demo-hich02t6q-resend.vercel.app/static/plaid-logo.png" />
                            <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
                            <meta name="x-apple-disable-message-reformatting" />
                            <!--$-->
                        </head>
                        <body style="background-color:#ffffff;font-family:HelveticaNeue,Helvetica,Arial,sans-serif" >
                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:500px;background-color:#ffffff;border:1px solid #eee;border-radius:5px;box-shadow:0 5px 10px rgba(20,50,70,.2);margin-top:20px;margin:0 auto;padding:68px 0 130px" >
                                <tbody>
                                    <tr style="width:100%">
                                        <td>
                                            <img alt="Logo" height="275" 
                                            src='https://repback-production.up.railway.app/img/IMG_1151.JPEG' 
                                            style="display:block;outline:none;border:none;text-decoration:none;margin:0 auto" width="350" />

                                            <p style="font-size:18px;line-height:16px;margin:2rem auto;color:#0a85ea;font-weight:700;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;height:20px;letter-spacing:0;text-transform:uppercase;text-align:center" >Se ingresó una nueva venta</p>
                                            <h1 style="color:#000;font-family:HelveticaNeue-Medium,Helvetica,Arial,sans-serif;font-size:20px;font-weight:500;line-height:24px;margin-bottom:0;margin:0 auto;text-align:center" > Número de Siniestro ${data.numeroSiniestro}</h1>
                                            <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:rgba(0,0,0,.05);border-radius:4px;margin:16px auto 14px;vertical-align:middle;width:450px;font-family:HelveticaNeue,Helvetica,Arial,sans-serif">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <p style="font-size:32px;line-height:40px;margin:0 auto;color:#000;display:inline-block;font-weight:700;letter-spacing:6px;padding-bottom:8px;padding-top:8px;width:100%;text-align:center">Vehículo: <br>${data.vehiculo}<hr></p>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                            <p style="font-size:32px;line-height:40px;margin:0 auto;color:#000;display:inline-block;font-weight:700;letter-spacing:6px;padding-bottom:8px;padding-top:8px;width:100%;text-align:center">Patente: <br>${data.patente}</p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <p style="font-size:18px;line-height:23px;margin:0;color:#444;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;letter-spacing:0;padding:0 40px;text-align:center"><b><u>Fecha de pago:</u></b> ${data.fechaPago}</p>
                                            <p style="font-size:18px;line-height:23px;margin:0;color:#444;font-family:HelveticaNeue,Helvetica,Arial,sans-serif;letter-spacing:0;padding:0 40px;text-align:center"><b><u>Importe Factura:</u></b> ${data.facturaTotal}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <!--/$-->
                        </body>
                    </html>`

        const mailOptions = {
            user: user.email,
            subject: 'Se cargó una nueva venta.',
            html: html
        };

        await sendMail.send(mailOptions);

        const venta = await VentasService.create(data)

        return res.status(200).send({ 
            status: 'success', 
            message: `Nuevo registro de venta creado`, 
            payload: venta 
        });

    } catch (error) {
        console.log(`Error in ventas.controller: ${error}`);
        return res.status(500).send({ status: 'error', message: error })
    }
}

export const update = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(`Error in ventas.controller: ${error}`);
        return res.status(500).send({ status: 'error', message: error.message })
    }
}

export const deleteSale = async (req, res) => {
    try {
        
    } catch (error) {
        console.log(`Error in ventas.controller: ${error}`);
        return res.status(500).send({ status: 'error', message: error.message })
    }
}