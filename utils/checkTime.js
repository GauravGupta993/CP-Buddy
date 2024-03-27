const Contests = require('../models/Contests')
const sendReminder = require('./sendReminder')
module.exports = async (client) => {
    const latest = (await Contests.find({}).sort({ "Date": 1 }).limit(5));
    // console.log(hours);
    for (i in latest) {
        // console.log(latest[0]);
        const latestdate = (latest[i].Date);
        // console.log(latestdate);
        var d = new Date(latestdate);
        Date.prototype.addHours = function (h) {
            this.setTime(this.getTime() + (h * 60 * 60 * 1000));
            return this;
        }
        d = d.addHours(5.5);
        // console.log(d);
        const d1 = new Date();
        // console.log(d1);
        var hours = ((d - d1) / (1000 * 60 * 60));
        if (hours < 0) {
            await Contests.deleteOne({ Name: latest[i].Name });
        }
        else if (hours < 8 && hours > 7) {
            sendReminder(client, hours, latest[i]);
        }
        else if (hours < 1.5) {
            sendReminder(client, hours, latest[i]);
        }
    }
    // sendReminder(client, hours, latest[0]);
};