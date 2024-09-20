/*const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://ipl-api1.p.rapidapi.com/match?team=Mumbai%20Indians');
xhr.setRequestHeader('x-rapidapi-key', '03bf06295dmsh1c6ff7ed0276818p1853a7jsnf715d5533b13');
xhr.setRequestHeader('x-rapidapi-host', 'ipl-api1.p.rapidapi.com');

xhr.send(data);*/

/*const url = 'https://ipl-api1.p.rapidapi.com/match?team=Mumbai%20Indians';
const options = {
    headers: {
        'x-rapidapi-key': '03bf06295dmsh1c6ff7ed0276818p1853a7jsnf715d5533b13',
        'x-rapidapi-host': 'ipl-api1.p.rapidapi.com',
    },
    credentials: 'include' // Equivalent to xhr.withCredentials = true
};

fetch(url, options)
    .then(response => {return response.json()})
    .then(result => {
		console.log(result);
		const team = document.querySelector("#team-details");
		const newelem = document.createElement("h2");
		newelem.textContent = "Scores";
		team.appendChild(newelem);
		for(let i=result.length-1; i>result.length - 6; --i)
		{
			const addelem = document.createElement("p");
			addelem.textContent = result[i]["team1"] + " vs " + result[i]["team2"] + " - " + result[i]["winner"] + " won by " + result[i]["result_margin"];
			addelem.className = "team_official_info";
			team.appendChild(addelem);
		}
	})
    .catch(error => {
		alert("Error!");
	})*/


async function fetchTeamResults() {
	const url = 'https://flashlive-sports.p.rapidapi.com/v1/teams/results?sport_id=13&locale=en_IN&team_id=2eZPzJH2';
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '03bf06295dmsh1c6ff7ed0276818p1853a7jsnf715d5533b13',
			'x-rapidapi-host': 'flashlive-sports.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		const team = document.querySelector("#team-details");
		const newelem = document.createElement("h2");
		newelem.textContent = "Scores";
		team.appendChild(newelem);
		let l = result["DATA"].length-1;
		console.log(result);
		for(let i=result["DATA"][l]["EVENTS"].length-1; i>result["DATA"][l]["EVENTS"].length - 6; --i)
		{
			const addelem = document.createElement("p");
			addelem.textContent = result["DATA"][l]["EVENTS"][i]["AWAY_PARTICIPANT_NAME_ONE"] + " (" + result["DATA"][l]["EVENTS"][i]["AWAY_SCORE_CURRENT"] + "-" + result["DATA"][l]["EVENTS"][i]["AWAY_SCORE_PART_2_OVERS_OUTS_WICKETS"] + ") VS " + result["DATA"][l]["EVENTS"][i]["HOME_PARTICIPANT_NAME_ONE"]  + " (" + result["DATA"][l]["EVENTS"][i]["HOME_SCORE_CURRENT"] + "-" + result["DATA"][l]["EVENTS"][i]["HOME_SCORE_PART_2_OVERS_OUTS_WICKETS"] + ")";
			addelem.className = "team_official_info";
			team.appendChild(addelem);
		}
	} catch (error) {
		alert("Error!");
	}
}

// Call the function
fetchTeamResults();
