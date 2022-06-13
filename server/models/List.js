const mongoose= require('mongoose')
const { Schema } = mongoose;

const listmodel = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    list:{
        type: Array,
        required: true
    },
});

module.exports=mongoose.model('beds',accountmodel);