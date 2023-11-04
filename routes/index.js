const {
  Router
} = require('express');

const nodemailer = require('nodemailer');

const router = Router();

router.get('/', (req, res) => {
  res.send(index);
})

router.post('/send-mail', async (req, res) => {
  const {
    nombre,
    email,
    url,
    asunto,
    mensaje
  } = req.body;
  console.log(req.body)
  if (!url && nombre && email && asunto && mensaje) {
    contentHtml = `
    <h4>Mensaje del formulario:</h4>
    <p>Nombre: ${nombre}</p>
    <p>Correo: ${email}</p>
    <p>Asunto: ${asunto}</p>
    <p>Mensaje: ${mensaje}</p>
    `
    console.log(contentHtml)

    const transporter = nodemailer.createTransport({
      host: 'mail.bostoncelop.com.ar',
      port: 465,
      secure: true,
      auth: {
        user: 'contactform@bostoncelop.com.ar',
        pass: 'Y;~5qKi(z)8!UkNAnEdI});S'
      }
    });

    const info = await transporter.sendMail({
      from: 'contactform@bostoncelop.com.ar',
      to: 'boston@bostoncelop.com.ar',
      subject: 'Formulario Web',
      html: contentHtml
    });

    console.log('Mensaje enviado', info);
    res.json({
      success: true
    });
  } else {
    res.json({
      success: false
    });
  }
})

module.exports = router;