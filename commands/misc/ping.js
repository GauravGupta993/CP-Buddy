const { SlashCommandBuilder } = require('discord.js');
const ContestProblem = require('../../utils/cfContestProblem');
const { EmbedBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!'),
  async execute(interaction) {
    let problems = await ContestProblem();
    console.log(problems);
    // let arr = [];
    // for (problem in problems) {
    //   arr.push({ name: problems[problem].index, value: problems[problem].name })
    // }
    // console.log(arr);
    // let arr=[];
    // for (problem in problems){
    //   arr.push({name:`${problem.index}`, value:`${problem.name}`});
    // }
    // inside a command, event listener, etc.
    const exampleEmbed = new EmbedBuilder()
      .setColor(0x51267)
      .addFields({ name: 'Top 10', value: ["usernames","hello"], inline: true },
        { name: 'Level', value: "levels", inline: true },
        { name: 'XP', value: "xp", inline: true });
    exampleEmbed.addFields({name: 'Top 10',value: "xp" });
    // .setColor(0x0099FF)
    // .setTitle('Some title')
    // // .setURL('https://discord.js.org/')
    // // .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
    // // .setDescription('Some description here')
    // // .setThumbnail('https://i.imgur.com/AfFp7pu.png')
    // .addFields(
    //   arr
    // )
    // .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
    // .setImage('https://i.imgur.com/AfFp7pu.png')
    // .setTimestamp()

    await interaction.reply({ embeds: [exampleEmbed] });
  },
};