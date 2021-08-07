const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: 'cridejecato@gmail.com',
        pass: 'kmzynbwnuartryfl'
    }
});

transporter.verify().then(() => {
    console.log('Ready for send emails');
}).catch(err => {
    console.log(`[ERROR NODEMAILER]: ${err}`);
});

module.exports = transporter;