const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const User = require('../models/User')

module.exports = async (client) => {
    let scores = "";
    let userNames = "";
    let dailyscore = "";
    data: new SlashCommandBuilder()
        .setName('leaderboard')
        .setDescription('Displays Leaderboard'),
    await User.find({
    })
        .then((doc) => {
            doc.sort(function (a, b) { return b.Score - a.Score });
            console.log(doc);
            for (i in doc) {
                userNames = userNames + doc[i].Leetcode + '\n';
                scores = scores + doc[i].Score + '\n';
                dailyscore = dailyscore + doc[i].DailyScore + '\n';
            }
            console.log(userNames);
            console.log(scores);
            console.log(dailyscore);
        })
        .catch((err) => {
            console.error(err);
        });

    const exampleEmbed = new EmbedBuilder()
        .setColor(0x51267)
        .addFields({ name: 'Username', value: userNames, inline: true },
            { name: 'Score', value: scores, inline: true },
            { name: 'Daily Score', value: dailyscore, inline: true });
    var guild = await client.guilds.fetch('1213878417121083492');
    console.log("6 minutes scheduler message printed.");
    guild.channels.cache.get('1213878417586524231').send({ embeds: [exampleEmbed] });
};