require('dotenv').config();
const eventHandler = require('./eventHandler.js');
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const User = require('./models/User')
const { CronJob } = require('cron');
const Solvecheck = require('./utils/Solvecheck.js')
const resetDaily = require('./utils/resetDaily.js')
const daily = require('./utils/daily.js')
const cf = require('./utils/cfContestProblem.js')
const mongoose = require('mongoose');
(async () => {
	try {
		mongoose.set('strictQuery', false);
		await mongoose.connect(process.env.MONGODB_URI);
		console.log('Connected to DB.');
		const data = await mongoose.connection.db.collection("user");
		// await reset();
		// await Check();
		// await daily(client);
		// Check();
		// cf();
		//   User.create({ Leetcode: 'Lelouch_Britannia' });
		// await User.deleteMany({Leetcode:"Silence"});
		// User.findOneAndUpdate(
		// 	{
		// 		Leetcode: "Lelouch_Britanni" // search query
		// 	},
		// 	{
		// 		Leetcode: "Lelouch_Britannia" // field:values to update
		// 	},
		// 	{
		// 	  new: true, // return updated doc
		// 	  runValidators: true // validate before update
		// 	}
		// 	)
		// 	.then((doc) => {
		// 		console.log(doc);
		// 	  })
		// User.find({
		//   })
		// 	.then((doc) => {
		// 	  console.log(doc);
		// 	})
		// 	.catch((err) => {
		// 	  console.error(err);
		// 	});
		eventHandler(client);
		const h = new Date().getHours();
		const test = new CronJob(
			'0 * * * * *', // cronTime
			async function () {
				console.log("Test");
			}, // onTick
			null, // onComplete
			true, // start
			'Asia/Kolkata' // timeZone
		);
		const job = new CronJob(
			'0 0 */4 * * *', // cronTime
			async function () {
				await Solvecheck();
			}, // onTick
			null, // onComplete
			true, // start
			'Asia/Kolkata' // timeZone
		);
		const job3 = new CronJob(
			'0 30 5 * * *', // cronTime
			async function () {
				await resetDaily();
			}, // onTick
			null, // onComplete
			true, // start
			'Asia/Kolkata' // timeZone
		);
		const job2 = new CronJob(
			'0 0 */4 * * *', // cronTime
			async function () {
				await daily(client);
			}, // onTick
			null, // onComplete
			true, // start
			'Asia/Kolkata' // timeZone
		);

		client.login(process.env.TOKEN);
	} catch (error) {
		console.log(`Error: ${error}`);
	}
})();

client.login(token);
