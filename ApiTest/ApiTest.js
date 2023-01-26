const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '494d7041f3msh39e5c433dacff8dp1181c2jsnb087a426e03d',
		'X-RapidAPI-Host': 'footapi7.p.rapidapi.com'
	}
};

fetch('https://footapi7.p.rapidapi.com/api/team/1644/players', options)
	.then(response => response.json())
	.then(response => {
        
        document.getElementById("team").textContent = response.players[0].player.team.name

        let text = document.getElementById("test").textContent;
        response.players.forEach((player)=>{

            document.getElementById("test").textContent = document.getElementById("test").textContent + " " +  player.player.name

        })
   console.log(response)
    
    
    
    })
	.catch(err => console.error(err));


