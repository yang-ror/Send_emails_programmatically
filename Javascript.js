const nodemailer = require("nodemailer");

let sender_email = "";
let sender_password = "";
let recipient_email = "";
let subject = "";
let content = "";

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: sender_email,
    pass: sender_password
  }
});

let mailOptions = {
  from: sender_email,
  to: recipient_email,
  subject: subject,
  text: content
};

transporter.sendMail(mailOptions, function(error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent successfully!");
  }
});