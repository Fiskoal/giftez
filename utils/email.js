const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "official.giftez",
    pass: "hYZYHd5rPgq9"
  }
});

transporter.verify(function(err, succ) {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is ready to take our messages");
  }
});

function sendIt(data) {
  let message = {
    from: "official.giftez@gmail.com",
    to: data,
    subject: "Welcome to GiftEZ!",
    text: "Thank you for signing up for GiftEZ!",
    hmtl: "<p>Thank you for singing up for GiftEZ!"
  };
  
  transporter.sendMail(message); 
};

module.exports = sendIt;