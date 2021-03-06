"use strict";

const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    usertype: {
        type: String,
        enum: ['professional', 'casual'],
        required: true
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    creditCardInfo: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false,
    },
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }],
    offers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Offer'
    }],
    profileImage: {
        type: String,
        required: false,
    },
    pendingRequests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Request'
    }],
    createdRequests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Request'
    }],
    availability: [{
        startTime: {
            type: Date,
            required: false,
        },
        endTime: {
            type: Date,
            required: false,
        },
        day: {
            type: String,
            required: false,
        },
        away: {
            type: Boolean,
            required: false
        }
    }],
    upcomingGames: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Request'
    }],
    server: {
        type: String,
        enum: ['', 'Europe', 'USA', 'Asia', 'Russia', 'Australia', 'South Africa', 'South America'],
    },

});

User.set('versionKey', false);

module.exports = mongoose.model('User', User);
