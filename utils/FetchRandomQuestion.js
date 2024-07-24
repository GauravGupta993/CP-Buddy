module.exports = async () => {
    let data;
    await fetch(
        "https://codeforces.com/api/problemset.problems"
      )
        .then((response) => response.json())
        .then((json) => {
          data=json;

        });

  const problems = data.result.problems;

  const randomProblem = problems[Math.floor(Math.random() * problems.length)];

  const problemName = randomProblem.name;
  const problemContestId = randomProblem.contestId;
  const problemIndex = randomProblem.index;

  const problemUrl = `https://codeforces.com/contest/${problemContestId}/problem/${problemIndex}`;

  return {
    name: problemName,
    url: problemUrl,
  };

  for (platform in platforms) {
    console.log(platform);
    console.log(platforms[platform]);
    await fetch(
      `https://clist.by:443/api/v4/contest/?username=Overlord993&api_key=0b828ff4f1f560d49cfe3d153ac977d51e2d6e1f&upcoming=true&host=${platforms[platform]}&start__gte=${d3}-${d2}-${d1}T00%3A00%3A00&start__lte=${d33}-${d22}-${d11}T00%3A00%3A00`
    )
      .then((response) => response.json())
      .then((json) => {
        contests.push(json);

        // console.log(json);
      });
    console.log(contests[0].objects);
    for (contest in contests[0].objects) {
      await Contests.updateOne(
        {
          Name: contests[0].objects[contest].event,
        },
        {
          $setOnInsert: {
            Name: contests[0].objects[contest].event,
            Platform: contests[0].objects[contest].resource,
            Date: contests[0].objects[contest].start,
          },
        },
        { upsert: true }
      );
    }
    contests = [];
  }
  Contests.find({})
    .then((doc) => {
      console.log(doc);
    })
    .catch((err) => {
      console.error(err);
    });
  return contests;
};
