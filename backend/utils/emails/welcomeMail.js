// Import the necessary modules here
import nodemailer from "nodemailer";

export const sendWelcomeEmail = async (user) => {
  // Write your code here

  // const output = `
  // <h1>Welcome to Store Fleet</h1>
  // <p>Hello, ${user.name},</p>
  // <br/>
  // <p>Thank you for registering with Store Fleet.</p>
  // <a href="${"https://www.postman.com/prayrit/workspace/storefleet/request/26789165-081835d7-d53c-48ef-acfa-4f009a16643f"}/login"><btn>Get Started</btn></a>
  // `;

  //   const transporter = nodemailer.createTransport({
  //     service: gmail,
  //     auth: {
  //       user: "storefleet2k23@gmail.com",
  //       pass: "ubdfspvwnqkayrxr",
  //     },

  // });

  // const mailOptions = {
  //   from: "storefleet2k23@gmail.com",
  //   to: user.email,
  //   subject: "Welcome to Store Fleet",
  //   html: output,
  // };

  // // transporter.sendMail(mailOptions, (error, info) => {
  // //   if (error) {
  // //     console.log(error);
  // //     throw error;
  // //   } else {
  // //     console.log("Email sent: " + info.response);
  // //   }
  // // });

  // await transporter.sendMail(mailOptions);
  
};
