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
})

// transporter.sendMail(data[, callback]);

let message = {
  from: "official.giftez@gmail.com",
  to: "",
  subject: "Welcome to GiftEZ!",
  text: "Thank you for signing up for GiftEZ!",
  hmtl: "<p>Thank you for singing up for GiftEZ!"
};