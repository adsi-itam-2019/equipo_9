const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp();

var transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4b46d956c4c6a9",
    pass: "eeec5f2a89ff25"
  }
});

exports.email = functions.firestore
  .document('mensajes/{id}')
  .onCreate((snap, context) => {

    const added = snap.data();

    const mailOptions = {
      from: '"Rentizapán" <no-reply@rentizapan.com>',
      to: 'jalisa2808@gmail.com',
      subject: `added ${added.mail}`,
      text: 'Hey there, it’s our first message sent with Nodemailer ;) ', 
      html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer'
    };

    return transport.sendMail(mailOptions, (erro, info) => {
      if(erro){
        return console.log(erro);
      }
      return console.log('Message sent: %s', info.messageId)
    })
  })