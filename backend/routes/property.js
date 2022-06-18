const { validateDetails, Property } = require("../models/property");
// const mongoose = require("mongoose");
const router = require("express").Router();

//add new property
router.post("/post", async (req, res) => {
    const { error } = validateDetails(req.body)
    if (error) {
        console.log(error)
        return res.status(400).json({ error: error.details[0].message })
    }
    const { 
         price,
         propertyDescription,
         length,
         breadth,
         totalArea,
         electricity,
         mobile,
         email,
         address,
         latitude,
         landmark,
         longitude
         } = req.body
    try {
        const newProperty = new Property({
            price,
            propertyDescription,
            length,
            breadth,
            totalArea,
            electricity,
            mobile,
            email,
            address,
            latitude,
            landmark,
            longitude,
            
        })
        const result = await newProperty.save();
        return res.status(200).json({ ...result._doc });

    } catch (error) {
        console.log(error)

    }
})
//getting existing user
router.get("/get", async (req, res) => {
    try {
        const myProperty = await Property.find( req.body._id )


        return res.status(200).json({ properties: myProperty.reverse() });
    } catch (err) {
        console.log(err);
    }
});
module.exports = router