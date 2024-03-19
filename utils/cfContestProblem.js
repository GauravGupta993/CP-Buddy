const getContests = require("./getContests");

module.exports = async () => {
    let all_problems=[];
    await fetch("https://codeforces.com/api/contest.standings?contestId=1935&from=1&count=5&showUnofficial=true",{
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    })
        .then((response) => response.json())
        .then((json) => {
            for(problem in json.result.problems){
                all_problems.push(json.result.problems[problem]);
            }
        })
    console.log(all_problems);
    return all_problems;
};