const { SlashCommandBuilder } = require('discord.js');
const User = require('../../models/User')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lcdel')
		.setDescription('Add Leetcode username.')
        .addStringOption(option =>
			option
				.setName('delusername')
				.setDescription('Leetcode username')
                .setRequired(true)),
	async execute(interaction) {
        const target = interaction.options.getString('delusername');
        await User.deleteOne({ Leetcode: target });
		await interaction.reply(`User deleted successfully.`);
	},
};