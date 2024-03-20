const getlcdaily = require('./getlcdaily');
const getlcsubmissions = require('./getlcsubmissions');
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
        for (user in users[0]) {
        console.log(users[0][user].Leetcode);
        await User.findOneAndUpdate(
            {
                Leetcode: users[0][user].Leetcode // search query
            },
            {
                DailyScore: 0
                // Leetcode: "users[user][0].Leetcode"+"a" // field:values to update
            },
            {
                new: true, // return updated doc
                runValidators: true // validate before update
            }
        )
            .then((doc) => {
                console.log(doc);
            })
    }
};


