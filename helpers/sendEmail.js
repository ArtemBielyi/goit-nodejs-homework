const nodemailer = require("nodemailer");

require("dotenv").config();

const { UKR_NET_EMAIL, UKR_NET_PASSWORD } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: { user: UKR_NET_EMAIL, pass: UKR_NET_PASSWORD },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: UKR_NET_EMAIL };
  return transport.sendMail(email);
};

const email = {
  from: UKR_NET_EMAIL,
  to: "wagimof397@dusyum.com",
  subject: "test email",
  html: "<strong>My test email content</strong>",
};

transport
  .sendMail(email)
  .then(() => console.log("email send success"))
  .catch((error) => console.log(error.message));

module.exports = sendEmail;
