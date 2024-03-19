const getContests = require("./getContests");

module.exports = async () => {
    let solved=[];
    await fetch(`https://codeforces.com/api/contest.status?handle=Overlord993&contestId=1935&count=1000`)
        .then((response) => response.json())
        .then((json) => {
            for(problem in json.result){
                if(json.result[problem].verdict=="OK"){
                    sol.push(json.result[problem]);
                }
            }
        })
    return solved;

};