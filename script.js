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
	const url = 'https://cricbuzz-cricket.p.rapidapi.com/teams/v1/62/results';
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '03bf06295dmsh1c6ff7ed0276818p1853a7jsnf715d5533b13',
			'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const result = await response.json();
		console.log(result);
		const team = document.querySelector("#team-details");
		const newelem = document.createElement("h2");
		newelem.textContent = "Scores";
		team.appendChild(newelem);
		for(let i=0; i<5 && i<result["teamMatchesData"][0]["matchDetailsMap"]["match"].length; ++i)
		{
			const addelem = document.createElement("p");
			addelem.textContent = result["teamMatchesData"][0]["matchDetailsMap"]["match"][i]["matchInfo"]["team1"]["teamName"] + " (" + result["teamMatchesData"][0]["matchDetailsMap"]["match"][i]["matchScore"]["team1Score"]["inngs1"]["runs"] + "-" + result["teamMatchesData"][0]["matchDetailsMap"]["match"][i]["matchScore"]["team1Score"]["inngs1"]["wickets"] + ") VS " + result["teamMatchesData"][0]["matchDetailsMap"]["match"][i]["matchInfo"]["team2"]["teamName"]  + " (" + result["teamMatchesData"][0]["matchDetailsMap"]["match"][i]["matchScore"]["team2Score"]["inngs1"]["runs"] + "-" + result["teamMatchesData"][0]["matchDetailsMap"]["match"][i]["matchScore"]["team2Score"]["inngs1"]["wickets"] + ")";
			addelem.className = "team_official_info";
			team.appendChild(addelem);
		}
	} catch (error) {
		alert("Error!");
	}
}

// Call the function
fetchTeamResults();

async function getNews() {
	const url = 'https://flashlive-sports.p.rapidapi.com/v1/teams/news?locale=en_INT&team_id=2eZPzJH2';
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
		console.log(result);
		const news = document.querySelector(".news");
		const newelem = document.createElement("h2");
		newelem.textContent = "Latest News";
		news.appendChild(newelem);
		for(let i=0; i<result["DATA"].length-1 && i<3; ++i)
		{
			const newdiv = document.createElement("div");
			newdiv.className = "news-sub";
			const addelem = document.createElement("p");
			addelem.textContent = result["DATA"][i]["TITLE"];
			addelem.className = "team_official_info";
			const addalink = document.createElement("a");
			addalink.href = result["DATA"][i]["LINK"];
			addalink.textContent = "Open Link";
			addalink.className = "team-official-info";
			newdiv.appendChild(addelem);
			newdiv.appendChild(addalink);
			news.appendChild(newdiv);
		}
	} catch (error) {
		alert("Error!");
	}
}

getNews();

/*async function playerstats() {
	const url = 'https://cricbuzz-cricket.p.rapidapi.com/teams/v1/62/players';
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '03bf06295dmsh1c6ff7ed0276818p1853a7jsnf715d5533b13',
			'x-rapidapi-host': 'cricbuzz-cricket.p.rapidapi.com'
		}
	};
	try {
		const response = await fetch(url, options);
		const result = await response.text();
		return result;
	} catch (error) {
		alert("Error!");
	}
}

const button = document.querySelectorAll(".my_button");

function handleButtonClick(event) {
	const button_i = event.target;
	const result = playerstats();
	const parent = button_i.parentNode;
	console.log(result);
	const player = parent.children[1].textContent;
	console.log(typeof(result));
	console.log(typeof(result[0]));
	console.log(typeof(result[1]));
	console.log(typeof(result[2]));
}

button.forEach(button_i => {
	button_i.addEventListener('click', handleButtonClick);
});*/