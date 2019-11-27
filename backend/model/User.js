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
<<<<<<< HEAD
    isAdmin:Boolean,
    // This New code used for refrences in User Schema 
    
    Courses: [{ type: Schema.Types.ObjectId, ref: 'Courses'}],
    Trips: [{ type: Schema.Types.ObjectId, ref: 'Trips'}]

}, {timestamps: true}
=======
    isAdmin:{
        default: false
    }
// This New code used for refrences in User Schema 
    Courses: [{ type: Schema.Types.ObjectId, ref: 'Courses'}],
    Trips: [{ type: Schema.Types.ObjectId, ref: 'Trips'}]
}, 
{timestamps: true}
>>>>>>> 3a4d74ec506f1b9eff45263ba63ee28e45e43bb6
);
const User = mongoose.model('User',userSchema)
module.exports = User