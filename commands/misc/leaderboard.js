const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const User = require('../../models/User')

module.exports = {
  data: new SlashCommandBuilder()
    .setName('test-lb')
    .setDescription('Displays Leaderboard'),
  async execute(interaction) {
    let userNames = "";
    let scores = "";
    let dailyscore = "";
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

    await interaction.reply({ embeds: [exampleEmbed] });
  },
};