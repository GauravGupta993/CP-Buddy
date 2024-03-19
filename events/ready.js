const { Events } = require('discord.js');
const { CronJob } = require('cron');

const daily= require('../utils/daily');
module.exports = {
	name: Events.ClientReady,
	once: true,
	async execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		const job = new CronJob(
			'5 */3 * * * *', // cronTime
			async function () {
				await daily(client);
			}, // onTick
			null, // onComplete
			true, // start
			'Asia/Kolkata' // timeZone
		);
		// job.stop();
		console.log("Finish");

	},
};