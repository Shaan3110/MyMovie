const mongoose= require('mongoose')
const { Schema } = mongoose;

const accountmodel = new Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
});

module.exports=mongoose.model('user',accountmodel);