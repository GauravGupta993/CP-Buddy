const Contests = require('../models/Contests')
module.exports = async () => {
    let contests = [];
    let platforms = ["codeforces.com", "codechef.com", "leetcode.com", "atcoder.jp"]
    var d = new Date();
    console.log(d);
    d1 = d.getDate();
    console.log(d1);
    d2 = d.getMonth() + 1;
    console.log(d2);
    d3 = d.getFullYear();
    console.log(d3);
    Date.prototype.addHours = function (h) {
        this.setTime(this.getTime() + (h * 60 * 60 * 1000));
        return this;
    }
    d = d.addHours(7 * 24);
    d11 = d.getDate();
    console.log(d11);
    d22 = d.getMonth() + 1;
    console.log(d22);
    d33 = d.getFullYear();
    console.log(d33);

    for (platform in platforms) {
        console.log(platform);
        console.log(platforms[platform])
        await fetch(`https://clist.by:443/api/v4/contest/?username=Overlord993&api_key=0b828ff4f1f560d49cfe3d153ac977d51e2d6e1f&upcoming=true&host=${platforms[platform]}&start__gte=${d3}-${d2}-${d1}T00%3A00%3A00&start__lte=${d33}-${d22}-${d11}T00%3A00%3A00`)
            .then((response) => response.json())
            .then((json) => {
                contests.push(json);

                // console.log(json);
            });
        console.log(contests[0].objects);
        for (contest in contests[0].objects) {
            await Contests.updateOne(
                {
                    Name: contests[0].objects[contest].event
                },
                {
                    $setOnInsert: { Name: contests[0].objects[contest].event, Platform: contests[0].objects[contest].resource, Date: contests[0].objects[contest].start }
                },
                { upsert: true }
            )
        }
        contests = []
    }
    Contests.find({
    })
        .then((doc) => {
            console.log(doc);
        })
        .catch((err) => {
            console.error(err);
        });
    return contests;
};