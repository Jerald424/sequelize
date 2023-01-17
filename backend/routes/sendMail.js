const router = require('express').Router();
const nodeMailer = require('nodemailer')

router.post('/send-mail', async (req, res) => {
    try {
        const { to_mail, subject, text, from_mail, password } = req.body;
        console.log('to_mail, subject, text, from_mail, password: ', to_mail, subject, text, from_mail, password);
        const transporter = await nodeMailer.createTransport({
            service: 'gmail',
            auth: {
                user: from_mail,
                pass: password
            }
        })

        const mailOptions = {
            from: from_mail,
            to: to_mail,
            subject: subject,
            text: text
        }
        await transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                res.status(500).send(error)
                console.log(error);
            } else {
                res.json(info.response + "Mail send")
                console.log('Email sent: ' + info.response);
            }
        });
    } catch (error) {
        res.status(500).send(error.message)
    }
})

module.exports = router;

/* 
var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};
*/