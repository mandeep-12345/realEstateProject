const router = require("express").Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/user")
const auth=require("../middlewares/auth")
//register
router.post("/register", async (req, res) => {
    const { email, password, confirmPassword } = req.body
    //check all missing fields
    if (!email || !password || !confirmPassword) {
        return res.status(400).json({ error: "please enter all the required fields" })

    }
    //email validation
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "please enter a valid email or password" })
    }
    //password validation
    if (password.length < 6) {
        return res.status(400).json({ error: "please enter a valid email or password" })
    }
    //confirmPassword
    if (confirmPassword !== password) {
        return res.status(400).json({ error: "please enter a valid email or password" })
    }
    try {
        const doesUserAlreadyExist = await User.findOne({ email })
        if (doesUserAlreadyExist) {
            return res.status(400).json({ error: `user with [${email}] already exists,please try another one` })
        }
        const hashedPassword = await bcrypt.hash(password, 12)
        const newUser = new User({ email, password: hashedPassword, confirmPassword: hashedPassword })
        //save user
        const result = await newUser.save()
        // result._doc.password = undefined
        return res.status(200).json({ ...result._doc })

    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: err.message })

    }

})

//login
router.post("/login", async (req, res) => {
    const { email, password } = req.body;
    //check all missing fields
    if (!email || !password) {
        return res.status(400).json({ error: "please enter all the required fields" })

    }
    //email validation
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "please enter a valid email or password" })
    }
    try {
        const doesUserAlreadyExist = await User.findOne({ email })
        if (!doesUserAlreadyExist) {
            return res.status(400).json({ error: "invalid email or password" })
        }
        // if password matches or not
        const doesPasswordMatch = await bcrypt.compare(
            password,
            doesUserAlreadyExist.password);
        if (!doesPasswordMatch) {
            return res.status(400).json({ error: "invalid email or password" })
        }
        const payload = { _id: doesUserAlreadyExist._id };
        const token = jwt.sign(payload,process.env.JWT_SECRET , {
            expiresIn: "1h",
        });
        const user = { ...doesUserAlreadyExist._doc};
        return res.status(200).json({ token });



    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: err.message });

    }


})
router.get("/me", auth, async (req, res) => {
    return res.status(200).json({ ...req.user._doc,confirmPassword:undefined });
  });
  
module.exports = router;