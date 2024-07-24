module.exports = async (handle) => {
  let data;
  await fetch(`https://codeforces.com/api/user.rating?handle=${handle}`)
    .then((response) => response.json())
    .then((json) => {
      data = json;
    });

  const ratingData = data.result;

  if (ratingData.length === 0) {
    return "No contests found for this user.";
  }

  const lastContest = ratingData[ratingData.length - 1];

  return {
    contestId: lastContest.contestId,
    contestName: lastContest.contestName,
    rank: lastContest.rank
  };
};
