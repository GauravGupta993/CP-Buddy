const { Events } = require('discord.js');
const Solvecheck = require('../utils/Solvecheck');
const resetDaily = require('../utils/resetDaily');
const daily = require('../utils/daily');
module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		// setInterval(async function() {
		// 	await daily(client);
		// }, 60 * 1000); 
		setInterval(async function () {
			console.log("Testing");
		}, 1000);
		setInterval(async function () {
			const h = new Date().getHours();
			if (h == 0) {
				await resetDaily();
			}
		}, 60 * 60 * 1000);
		setInterval(async function () {
			await Solvecheck();
		}, 60 * 60 * 4 * 1000);
		setInterval(async function () {
			await daily(client);
		}, 60 * 60 * 4 * 1000);
		console.log("Finish");

	},
};