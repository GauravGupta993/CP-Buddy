const { SlashCommandBuilder } = require('discord.js');
const User = require('../../models/User')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('lcadd')
		.setDescription('Add Leetcode username.')
        .addStringOption(option =>
			option
				.setName('addusername')
				.setDescription('Leetcode username')
                .setRequired(true)),
	async execute(interaction) {
        const target = interaction.options.getString('addusername');
        await User.create({ Leetcode: target });
		await interaction.reply(`User successfully added <:okitaheart:1222046554408489000>`);
	},
};