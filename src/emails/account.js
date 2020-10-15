const sgMail = require("@sendgrid/mail") 

sgMail.setApiKey(process.env.SENDGRID_API_KEY) 

//Create a welcome email when a user sign up account
const sendWelcomeEmail = (email, name) => {  
  sgMail.send({
      to: email, 
      from: 'mgbedorochinedu@gmail.com', 
      subject: 'Welcome to the App', 
      text: `Welcome to the app ${name}. Let me know how you get along with the app` 
    })
}

//Create a goodbye email when a user delete accounbt
const sendCancellationEmail = (email, name) => { 
    sgMail.send({
        to: email,
        from: 'mgbedorochinedu@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name}. I hope to see you back sometime soon`
    })
}

 module.exports = { 
      sendWelcomeEmail,
      sendCancellationEmail 
 }






