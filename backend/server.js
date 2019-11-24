const express = require('express')
const app = express()
const mongoose = require("mongoose");
const cors = require('cors')
const methodOverride = require('method-override') 
require('dotenv/config')

const PORT = 5000 || process.env.PORT




app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.use('/trips' , require('./routes/trip'))
app.use('/corses' , require('./routes/corses'))
app.use('/Profile' , require('./routes/Profile'))
//dev test

mongoose.connect(
   process.env.DB_CONNECTION,
   { useNewUrlParser: true, useUnifiedTopology: true },
   () => {
     console.log(`connect tho mongoDB`);
   }
 );
 

 app.listen(PORT, () => {
     console.log(`running on ${PORT}`);
     
 });