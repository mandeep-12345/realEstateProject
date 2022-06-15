const mongoose = require("mongoose");
const joi = require("joi")

const PropertySchema = mongoose.Schema({

  price: { type: Number, required: true },
  propertyDescription: { type: String, required: true },

  length: { type: Number, required: true },
  breadth: { type: Number, required: true },
  totalArea: { type: Number, required: true },
  electricity: { type: String, required: true },


  mobile: { type: Number, required: true },
  addPhoto: { type: String },


  email: { type: String, required: true },
  address: { type: String, required: true },
  latitude: { type: Number, required: true },
  landmark: { type: String, required: true },
  longitude: { type: Number, required: true }

});

const validateDetails = (data) => {
  const schema = joi.object({
    price:joi.number().min(7).max(10000000000).required(),
    propertyDescription:joi.string().min(4).max(50).required(),
    length:joi.number().min(7).max(10000000000).required(),
    breadth:joi.number().min(7).max(10000000000).required(),
    electricity:joi.string().min(4).max(50).required(),
    email:joi.string().min(4).max(50).required(),
    address:joi.string().min(4).max(50).required(),
    latitude:joi.number().min(7).max(10000000000).required(),
    landmark:joi.string().min(4).max(50).required(),
    longitude:joi.number().min(7).max(10000000000).required(),
    mobile: joi.number().min(7).max(10000000000).required(),
    totalArea:joi.number().min(8).max(10000000000).required(),

  })
  return schema.validate(data)
}

const Property = mongoose.model("Property", PropertySchema);

module.exports = { Property ,validateDetails};