const instance = require("../Config/razorpayconfig")
const User = require("../Models/User")
const Course = require("../Models/Course")

const crypto = require('crypto')




async function createPay(req, res) {
    try {
        const { courseId } = req.body
        const { userId } = req.user
        if (!courseId || !userId) {
            res.status(401).json({
                suceess: false,
                message: "all fileds are required"

            })
        }

        const newUser = await User.findById({ _id: userId });
        if (newUser.courses.includes(courseId)) {
            res.status(401).json({
                suceess: false,
                message: "allrdy bought course"

            })

        }
        const newCourse = await Course.findById(courseId)



        var options = {
            amount: newCourse.price * 100,  // amount in the smallest currency unit
            currency: "INR",
            receipt: "order_rcptid_11",
            notes: {
                userId,
                courseId
            }
        };


        instance.orders.create(options, function (err, order) {
            console.log(err, order);
        });

        res.status(200).json({
            success: true,
            message: "COUSRSE PYAMNET CREATED"

        })






    } catch (error) {

        res.status(400).json({
            success: false,
            message: "COUSRSE PYAMNET CREATION FAILEDA"

        })

    }
}


async function verifySign(req, res) {
    try {

        const webhookSecreat = "123456";

        const signature = req.headers["x-razorpay-signature "];



        let generated_signature = crypto.createHmac("sha256", webhookSecreat);
        generated_signature.update(JSON.stringify(req.body))

        const digest = generated_signature.digest("hex");

        if (digest !== signature) {
            res.status(400).json({
                success: false,
                message: "payment is unsuccessful"
            })
        }
        const { userId, courseId } = req.body.payload.payment.entity.notes;
        if (!userId || !courseId) {
            res.status(400).json({
                success: false,
                message: "payment is unsuccessful"
            })

        }
        await Course.findByIdAndUpdate({_id:courseId},{$push:{studentsEnrolled:userId}});
        await User.findByIdAndUpdate({_id:userId},{$push:{courses:courseId}});


        //send confirmation mail

        res.status(200).json({
            success: true,
            message: "payment is successful"
        })



    } catch (error) {

        res.status(400).json({
            success: false,
            message: "PAYMENT FAILED"
        })

    }
}

module.exports={createPay,verifySign}