import mongoose from 'mongoose';

const eventSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    image1: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    schedule: {
        type: String,
        required: true
        },
    Address: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    adtprice: {
        type: Number,

    },
    kidprice: {
        type: Number,
     
    },
    name: {
        type: String,
        required: true
    },

    tickets: {
        type: Number,
        required: true,
        default: 0
    },
    followers: {
        type: String,
        required: true
    }
             
}, {
    timestamps: true
});

const Events = mongoose.model('Events', eventSchema)
export default Events