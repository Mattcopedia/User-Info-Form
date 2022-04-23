const functions = require("firebase-functions");
const nodemailer = require('nodemailer');

// // environment variables

// const gmailEmail = functions.config().gmail.email;
// const gmailPassword = functions.config().gmail.password;

// //Create node mailer Transport

// const mailTransport = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: gmailEmail,
//         pass: gmailPassword,
//     },
// }); 

// // // Create and Deploy Your First Cloud Functions
// // // https://firebase.google.com/docs/functions/write-firebase-functions
// //
// // exports.helloWorld = functions.https.onRequest((request, response) => {
// //   functions.logger.info("Hello logs!", {structuredData: true});
// //   response.send("Hello from Firebase!");
// // });

// async function sendWelcomeEmail(email) {
//     const mailOptions = {
//         from: 'User info Dashboard <mathiasolumese@gmail.com>',
//         to: email,
//         subject: 'Welcome to User Info Dashboard',
//         text: `hey ${email}! Welcome to User Info Dashboard, Where you can submit,Edit and Update your User Info` 
//     };
//     await mailTransport.sendMail(mailOptions);
//     console.log(`New Welcome email sent to:`, email);

//     return null
// }
// // here we listen to authentification trigger on sign up to send a welcome email to that  new user was added 

// exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
//     const email = user.email;
//     return sendWelcomeEmail(email);
// }); 