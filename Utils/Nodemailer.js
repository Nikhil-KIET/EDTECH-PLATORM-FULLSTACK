const mailer = require("nodemailer")

require("dotenv").config()







async function sendMail(title, email, desc) {
    try{
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.email",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
            user: process.env.USER_MAIL,

            pass:process.env.USER_PASS,
        },
    });

    const res = await transporter.sendMail({
        from: "rajathuraiofficial@gmail.com", // sender address
        to: email,
        subject: title,
        html: desc,

    })
}catch(err){
    console.log("error occured while sending email",err);
}


}

module.exports = { sendMail }
