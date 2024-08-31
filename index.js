const nodemailer = require("nodemailer");
const fs = require("fs/promises"); // Using promises for cleaner asynchronous handling

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Set to true for TLS, false for STARTTLS (refer to Gmail's documentation)
  auth: {
    user: "johndoe.com",
    pass: "mwfu lkjf rhkq odlk", //
  },
});

const templatePath = "template_reset_password.html";

async function sendEmail() {
  try {
    // Read the HTML template asynchronously
    const htmlContent = await fs.readFile(templatePath, "utf8");

    // email options
    const mailOptions = {
      from: "johndoe@gmail.com",
      to: "bhupendrajogi@us.com",
      subject: "Test email",
      html: htmlContent,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

sendEmail();
