const { Events } = require('discord.js');
const { CronJob } = require('cron');
const Solvecheck = require('../utils/Solvecheck');
const resetDaily = require('../utils/resetDaily');
const schedule = require('node-schedule');
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
		// const test = schedule.scheduleJob('0 * * * * *', async function () {
		// 	await daily(client);
		// });
		// const job = schedule.scheduleJob('0 0 */6 * * *', async function () {
		// 	await Solvecheck();
		// });
		// const job2 = schedule.scheduleJob('0 0 0 * * *', async function () {
		// 	await resetDaily();
		// });
		// const job3 = schedule.scheduleJob('0 0 */12 * * *', async function () {
		// 	await daily(client);
		// });
		// const job = new CronJob(
		// 	'0 0 */6 * * *', // cronTime
		// 	async function () {
		// 		await Solvecheck();
		// 	}, // onTick
		// 	null, // onComplete
		// 	true, // start
		// 	'Asia/Kolkata' // timeZone
		// );
		// const job3 = new CronJob(
		// 	'0 0 0 * * *', // cronTime
		// 	async function () {
		// 		await resetDaily();
		// 	}, // onTick
		// 	null, // onComplete
		// 	true, // start
		// 	'Asia/Kolkata' // timeZone
		// );
		// const job2 = new CronJob(
		// 	'0 0 */12 * * *', // cronTime
		// 	async function () {
		// 		await daily(client);
		// 	}, // onTick
		// 	null, // onComplete
		// 	true, // start
		// 	'Asia/Kolkata' // timeZone
		// );
		console.log("Finish");

	},
};