const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const PetSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, '{PATH} is required.'],
            unique: [true, '{PATH} already exists, must be unique'],
            minLength: [3, '{PATH} must be at least {MINLENGTH} characters.'],
        },
        type: {
            type: String,
            required: [true, '{PATH} is required.'],
            minLength: [3, '{PATH} must be at least {MINLENGTH} characters.'],
        },
        description: {
            type: String,
            required: [true, '{PATH} is required.'],
            minLength: [3, '{PATH} must be at least {MINLENGTH} characters.'],
        },
        
        skill1:{
            type: String,
            minLength: [3, '{PATH} must be at least {MINLENGTH} characters.'],
            },
        skill2: {
                type: String,
            minLength: [3, '{PATH} must be at least {MINLENGTH} characters.'],
            },
        skill3: {
            type: String,
            minLength: [3, '{PATH} must be at least {MINLENGTH} characters.'],
            
            
        },
        likes: {
            type: Number, 
        },


    }, { timestamps: true }

)
PetSchema.plugin(uniqueValidator);
const Pet = mongoose.model('Pet', PetSchema);

module.exports = {Pet : Pet};
