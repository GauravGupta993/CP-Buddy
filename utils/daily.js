
module.exports = async (client) => {
    var guild = await client.guilds.fetch('1213878417121083492');
    console.log(guild);
    guild.channels.cache.get('1213878417586524231').send("Good Morning");
};