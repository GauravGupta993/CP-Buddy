const LEETCODE_API_ENDPOINT = 'https://leetcode.com/graphql'
const DAILY_CODING_CHALLENGE_QUERY = `
query questionOfToday {
	activeDailyCodingChallengeQuestion {
		date
		userStatus
		link
		question {
			acRate
			difficulty
			freqBar
			frontendQuestionId: questionFrontendId
			isFavor
			paidOnly: isPaidOnly
			status
			title
			titleSlug
			hasVideoSolution
			hasSolution
			topicTags {
				name
				id
				slug
			}
		}
	}
}`

module.exports = async () => {
    const rawResponse = await fetch(LEETCODE_API_ENDPOINT, {
		method: 'POST',
		headers: {
		  'Accept': 'application/json',
		  'Content-Type': 'application/json'
		},
		body: JSON.stringify({query:DAILY_CODING_CHALLENGE_QUERY})
	  });
	  const content = await rawResponse.json();
	
	  console.log(content.data.activeDailyCodingChallengeQuestion.question.title);
    return content.data.activeDailyCodingChallengeQuestion.question.title;
};

