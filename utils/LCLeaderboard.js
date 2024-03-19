const User = require('../models/User')
const mongoose = require('mongoose');

module.exports = async () => {
    let users = []
    await User.find({
    })
        .then((doc) => {
            //   console.log(doc);
            users.push(doc);
        })
        .catch((err) => {
            console.error(err);
        });
    
    for (user in users) {

    }
};


