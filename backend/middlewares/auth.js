const jwt = require("jsonwebtoken");

const User = require("../models/user");

module.exports = (req, res, next) => {


    const authHeader = req.headers.authorization;
    console.log(authHeader)

    if (authHeader) {
        const token = authHeader.split(" ")[1];
        console.log(token)

        jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
            try {
                if (err) {
                    return res.status(401).json({ error: "Unauthorized!" });
                }

                const user = await User.findOne({ _id: payload._id }).select(
                    "-password"
                );
                req.user = user;
                next();
            } catch (err) {
                console.log(err);
            }
        });
    } else {
        return res.status(403).json({ error: "Forbidden 🛑🛑" });
    }
};