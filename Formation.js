//link to the api that I'm using https://rapidapi.com/fluis.lacasse/api/footapi7

//this gets the team info using the team ID and then stores it in the local storage
function getTeamInfo(teamid){

        // here it checks if the team info already exists in the local storage so we don't have to fetch everytime. It uses the teamid key to check. 
        if (localStorage.getItem(teamid) === null){
        
                const options = {
                method: "GET",
                headers: {
                "X-RapidAPI-Key": "494d7041f3msh39e5c433dacff8dp1181c2jsnb087a426e03d",
                "X-RapidAPI-Host": "footapi7.p.rapidapi.com",
                },
                };
        
                fetch("https://footapi7.p.rapidapi.com/api/team/"+teamid+ "/players", options)
                .then((response) => response.json())
                .then((response) => {
        
                        let players = []; 
                        
                        //this creates an array of each player on the team and their properties
                        response.players.forEach((i)=>{
                                let player = {
                                        
                                       "name": i.player.name,
                                       "position": i.player.position,
                                       "jerseyNumber": i.player.jerseyNumber,
                                       "team": i.player.team.nameCode,
                                       "height": i.player.height,
                                       "country": i.player.country.name,
        
        
                                }
                                players.push(player)
        
                        })
        
                //store the array in local storage
                localStorage.setItem(teamid, JSON.stringify(players));
                console.log(players);
        
        })}}
        
        
        
        
        
        
        
        
        
        
 //this function gets the team ID if you want to search for a team by name - idk if we need this or if we're gonna implement this
function getTeamID(teamName){

        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "494d7041f3msh39e5c433dacff8dp1181c2jsnb087a426e03d",
            "X-RapidAPI-Host": "footapi7.p.rapidapi.com",
          },
        };

        
         fetch("https://footapi7.p.rapidapi.com/api/search/"+teamName, options)
        .then((response) => response.json())
        .then((response) => {
                
          console.log(response.results[0].entity.id);
          return response.results[0].entity.id;
          
        
 })}


//this formation function changes the orientation of the pitch depending on which tactic you clicked on
//The value of i corresponds to the specific tactic and inside each statement the css coordinates change accordingly
function formation(i){


    if(i===2){

            document.getElementsByClassName("lb")[0].style.top='35%'
            document.getElementsByClassName("lb")[0].style.left='14%'


            document.getElementsByClassName("gk")[0].style.top='48%'
            document.getElementsByClassName("gk")[0].style.left='2%'

            document.getElementsByClassName("rb")[0].style.top='70%'
            document.getElementsByClassName("rb")[0].style.left='14%'

            document.getElementsByClassName("lwb")[0].style.top='23%'
            document.getElementsByClassName("lwb")[0].style.left='14%'

            document.getElementsByClassName("dm")[0].style.top='13%'
            document.getElementsByClassName("dm")[0].style.left='25%'

            document.getElementsByClassName("rwb")[0].style.top='87%'
            document.getElementsByClassName("rwb")[0].style.left='25%'

            document.getElementsByClassName("lm")[0].style.top='28%'
            document.getElementsByClassName("lm")[0].style.left='38%'

            document.getElementsByClassName("rm")[0].style.top='60%'
            document.getElementsByClassName("rm")[0].style.left='39%'

            document.getElementsByClassName("cm")[0].style.top='45%'
            document.getElementsByClassName("cm")[0].style.left='30%'

            document.getElementsByClassName("amr")[0].style.top='45%'
            document.getElementsByClassName("amr")[0].style.left='60%'

            document.getElementsByClassName("cb")[0].style.top='50%'
            document.getElementsByClassName("cb")[0].style.left='14%'






    }

    if(i===1){

            document.getElementsByClassName("lb")[0].style.top='48%'
            document.getElementsByClassName("lb")[0].style.left='2%'


            document.getElementsByClassName("gk")[0].style.top='80%'
            document.getElementsByClassName("gk")[0].style.left='30%'

            document.getElementsByClassName("rb")[0].style.top='20%'
            document.getElementsByClassName("rb")[0].style.left='30%'

            document.getElementsByClassName("lwb")[0].style.top='60%'
            document.getElementsByClassName("lwb")[0].style.left='20%'

            document.getElementsByClassName("dm")[0].style.top='35%'
            document.getElementsByClassName("dm")[0].style.left='20%'
            
            document.getElementsByClassName("rwb")[0].style.top='80%'
            document.getElementsByClassName("rwb")[0].style.left='60%'

            document.getElementsByClassName("lm")[0].style.top='20%'
            document.getElementsByClassName("lm")[0].style.left='60%'

            document.getElementsByClassName("rm")[0].style.top='30%'
            document.getElementsByClassName("rm")[0].style.left='50%'

            document.getElementsByClassName("cm")[0].style.top='60%'
            document.getElementsByClassName("cm")[0].style.left='50%'

            document.getElementsByClassName("amr")[0].style.top='60%'
            document.getElementsByClassName("amr")[0].style.left='83%'

            document.getElementsByClassName("cb")[0].style.top='35%'
            document.getElementsByClassName("cb")[0].style.left='83%'






    }



    if(i===0){

        document.getElementsByClassName("lb")[0].style.top='48%'
        document.getElementsByClassName("lb")[0].style.left='2%'


        document.getElementsByClassName("gk")[0].style.top='70%'
        document.getElementsByClassName("gk")[0].style.left='30%'

        document.getElementsByClassName("rb")[0].style.top='20%'
        document.getElementsByClassName("rb")[0].style.left='30%'

        document.getElementsByClassName("lwb")[0].style.top='46%'
        document.getElementsByClassName("lwb")[0].style.left='30%'

        document.getElementsByClassName("dm")[0].style.top='46%'
        document.getElementsByClassName("dm")[0].style.left='60%'
        
        document.getElementsByClassName("rwb")[0].style.top='80%'
        document.getElementsByClassName("rwb")[0].style.left='70%'

        document.getElementsByClassName("lm")[0].style.top='20%'
        document.getElementsByClassName("lm")[0].style.left='70%'

        document.getElementsByClassName("rm")[0].style.top='30%'
        document.getElementsByClassName("rm")[0].style.left='50%'

        document.getElementsByClassName("cm")[0].style.top='60%'
        document.getElementsByClassName("cm")[0].style.left='50%'

        document.getElementsByClassName("amr")[0].style.top='60%'
        document.getElementsByClassName("amr")[0].style.left='83%'

        document.getElementsByClassName("cb")[0].style.top='35%'
        document.getElementsByClassName("cb")[0].style.left='83%'






}

if(i===5){

    document.getElementsByClassName("lb")[0].style.top='0%'
    document.getElementsByClassName("lb")[0].style.left='0%'

    document.getElementsByClassName("gk")[0].style.top='0%'
    document.getElementsByClassName("gk")[0].style.left='0%'

    document.getElementsByClassName("rb")[0].style.top='0%'
    document.getElementsByClassName("rb")[0].style.left='0%'

    document.getElementsByClassName("lwb")[0].style.top='0%'
    document.getElementsByClassName("lwb")[0].style.left='0%'

    document.getElementsByClassName("dm")[0].style.top='0%'
    document.getElementsByClassName("dm")[0].style.left='0%'
    
    document.getElementsByClassName("rwb")[0].style.top='0%'
    document.getElementsByClassName("rwb")[0].style.left='0%'

    document.getElementsByClassName("lm")[0].style.top='0%'
    document.getElementsByClassName("lm")[0].style.left='0%'

    document.getElementsByClassName("rm")[0].style.top='0%'
    document.getElementsByClassName("rm")[0].style.left='0%'
    document.getElementsByClassName("cm")[0].style.top='0%'
    document.getElementsByClassName("cm")[0].style.left='0%'

    document.getElementsByClassName("amr")[0].style.top='0%'
    document.getElementsByClassName("amr")[0].style.left='0%'

    document.getElementsByClassName("cb")[0].style.top='0%'
    document.getElementsByClassName("cb")[0].style.left='0%'






}

}



