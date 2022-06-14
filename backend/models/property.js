const mongoose = require("mongoose");

const PropertySchema = mongoose.Schema({
 
    price:{type: Number, required: true},
    propertyDescription:{type: String, required: true},
    

  
  
    length:{type: Number, required: true},
    breadth:{type: Number, required: true},
    totalArea:{type: Number, required: true},
    electricity:{type: String, required: true},
    

  
  
    mobile:{type: Number, required: true},
    addPhoto:{type:String},
    

  
  locationInfo:{
    email:{type: String, required: true},
    address:{type: String, required: true},
    latitude:{type: Number, required: true},
    landmark:{type: String, required: true},
    longitude:{type: Number, required: true}
    

  }

  
});

const Property = mongoose.model("Property",PropertySchema );

module.exports = Property;