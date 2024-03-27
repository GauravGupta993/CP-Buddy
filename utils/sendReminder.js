module.exports = async (client,hours,latest) => {
    var guild = await client.guilds.fetch('1213878417121083492');
    var minutes=Math.floor((hours*60)%60)
    guild.channels.cache.get('1222052970007629904').send(`<@&1222257851096109167> ${latest.Name} contest on ${latest.Platform} in ${Math.floor(hours)} hours and ${minutes} minutes.`);
};