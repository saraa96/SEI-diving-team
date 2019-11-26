const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema  = new Schema({
    first_name: String,
    last_name:String,
    email : {
        required : true , 
        type: String
    },
    password:{
        required: true , 
        type: String
    },
    isAdmin:Boolean,


// This New code used for refrences in User Schema 
    Courses: [{ type: Schema.Types.ObjectId, ref: 'Courses'}],
    Trips: [{ type: Schema.Types.ObjectId, ref: 'Trips'}]


}, 
{timestamps: true}
);



const User = mongoose.model('User',userSchema)
module.exports = User