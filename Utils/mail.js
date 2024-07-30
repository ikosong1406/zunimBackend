const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "mail.bitvelar.com",
  port: 465, //465 is true & other port are false
  secure: true,
  auth: {
    user: "support@bitvelar.com",
    pass: "Bitvelar@14",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// var transporter = nodemailer.createTransport({
//   host: "sandbox.smtp.mailtrap.io",
//   port: 2525,
//   auth: {
//     user: "b8a2ba1a05b14a",
//     pass: "48b61489156df6",
//   },
// });

async function sendMail(to, subject, text, html) {
  const mailOptions = {
    from: "support@zunim.com.ng",
    to,
    subject,
    text,
    html,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { sendMail };
