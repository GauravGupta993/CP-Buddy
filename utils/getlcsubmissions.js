const LEETCODE_API_ENDPOINT = 'https://leetcode.com/graphql';
// const username="Lelouch_Britannia";

module.exports = async (username) => {
  const rawResponse = await fetch(LEETCODE_API_ENDPOINT, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({"query":"query recentAcSubmissions($username: String!, $limit: Int!) {\n  recentAcSubmissionList(username: $username, limit: $limit) {\n    id\n    title\n    titleSlug\n    timestamp\n  }\n}", "variables": "{\"username\": \""+username+"\", \"limit\": 30}"})
  });
  const content = await rawResponse.json();

  return (content.data.recentAcSubmissionList);
};


const fetchDailySubmissions = async () => {

  };
 fetchDailySubmissions();