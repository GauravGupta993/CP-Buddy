const getlcdaily = require('./getlcdaily');
const getlcsubmissions = require('./getlcsubmissions');
const User = require('../models/User')
const mongoose = require('mongoose');

module.exports = async () => {
    const daily = (await getlcdaily());
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
    console.log(users[0][0].Leetcode);
    for (user in users) {
        const submissions = (await getlcsubmissions(users[user][0].Leetcode));
        let x = 0;
        for (submission in submissions) {
            // console.log(submissions[submission].title);
            if (submissions[submission].title === daily) {
                x = 1;
            }
        }
        if (x === 0 && users[user][0].DailyScore === 0) {
            console.log(users[user][0].Leetcode)
            await User.findOneAndUpdate(
                {
                    Leetcode: users[user][0].Leetcode // search query
                },
                {
                    Score: users[user][0].Score + 1,
                    DailyScore:1
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
        console.log(x);
    }

};


