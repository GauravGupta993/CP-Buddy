module.exports = async () => {
    let contests = [];
    let platforms = ["codeforces.com"]

    for (platform of platforms) {
        await fetch(`https://clist.by:443/api/v4/contest/?username=Overlord993&api_key=0b828ff4f1f560d49cfe3d153ac977d51e2d6e1f&upcoming=true&host=${platform}&start__gte=2024-03-09T00%3A00%3A00`)
            .then((response) => response.json())
            .then((json) => {
                contests.push(json);
                // console.log(json);
            });
        // console.log(`${platform}`)
    }

    console.log(contests[0]);
    return contests;
};