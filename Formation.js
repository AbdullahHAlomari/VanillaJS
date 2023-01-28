//link to the api that I'm using https://rapidapi.com/fluis.lacasse/api/footapi7

//this gets the team info using the team ID and then stores it in the local storage
function getTeamInfo(teamid){


        formation(5);    

                const options = {
                method: "GET",
                headers: {
                "X-RapidAPI-Key": "494d7041f3msh39e5c433dacff8dp1181c2jsnb087a426e03d",
                "X-RapidAPI-Host": "footapi7.p.rapidapi.com",
                },
                };
        
                fetch("https://footapi7.p.rapidapi.com/api/team/" +teamid+ "/players", options)
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
                localStorage.setItem("teaminfo", JSON.stringify(players));
                var data = JSON.parse(localStorage.getItem("teaminfo"))

             
                console.log(players);

                 //this loop creates a popover instance for each player when you select a team       
                let playerelement = document.getElementsByClassName("player");
                for (var i = 0; i < playerelement.length; i++) {
                        console.log(playerelement[i].id); 
                        new bootstrap.Popover(document.getElementById(playerelement[i].id), {
                                html: true,
                                title: "<h3>"+data[i].name+"</h3>",
                                content: '<p class = "color"> Position: '+ data[i].position+ '</p> ' + '<p class = "color"> Height: '+ data[i].height+ '</p>' +'<p class = "color"> Country: '+ data[i].country+ '</p>',
                                trigger: 'hover focus'
                        }); 
                            
                    }
              
            
                
                
        
        })}
        

        
        
        
        
     
   
 //this function gets the team ID if you want to search for a team by name 
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
//The value of i corresponds to the specific tactic and inside each if statement the css coordinates change accordingly
function formation(i){


    if(i===2){



            document.getElementById("lb").style.top='35%'
            document.getElementById("lb").style.left='14%'


            document.getElementById("gk").style.top='48%'
            document.getElementById("gk").style.left='2%'
            
        

            document.getElementById("rb").style.top='70%'
            document.getElementById("rb").style.left='14%'

            document.getElementById("lwb").style.top='23%'
            document.getElementById("lwb").style.left='14%'

            document.getElementById("dm").style.top='13%'
            document.getElementById("dm").style.left='25%'

            document.getElementById("rwb").style.top='87%'
            document.getElementById("rwb").style.left='25%'

            document.getElementById("lm").style.top='28%'
            document.getElementById("lm").style.left='38%'

            document.getElementById("rm").style.top='60%'
            document.getElementById("rm").style.left='39%'

            document.getElementById("cm").style.top='45%'
            document.getElementById("cm").style.left='30%'

            document.getElementById("amr").style.top='45%'
            document.getElementById("amr").style.left='60%'

            document.getElementById("cb").style.top='50%'
            document.getElementById("cb").style.left='14%'






    }

    if(i===1){

            document.getElementById("lb").style.top='48%'
            document.getElementById("lb").style.left='2%'


            document.getElementById("gk").style.top='80%'
            document.getElementById("gk").style.left='30%'

            document.getElementById("rb").style.top='20%'
            document.getElementById("rb").style.left='30%'

            document.getElementById("lwb").style.top='60%'
            document.getElementById("lwb").style.left='20%'

            document.getElementById("dm").style.top='35%'
            document.getElementById("dm").style.left='20%'
            
            document.getElementById("rwb").style.top='80%'
            document.getElementById("rwb").style.left='60%'

            document.getElementById("lm").style.top='20%'
            document.getElementById("lm").style.left='60%'

            document.getElementById("rm").style.top='30%'
            document.getElementById("rm").style.left='50%'

            document.getElementById("cm").style.top='60%'
            document.getElementById("cm").style.left='50%'

            document.getElementById("amr").style.top='60%'
            document.getElementById("amr").style.left='83%'

            document.getElementById("cb").style.top='35%'
            document.getElementById("cb").style.left='83%'






    }



    if(i===0){

        document.getElementById("lb").style.top='48%'
        document.getElementById("lb").style.left='2%'


        document.getElementById("gk").style.top='70%'
        document.getElementById("gk").style.left='30%'

        document.getElementById("rb").style.top='20%'
        document.getElementById("rb").style.left='30%'

        document.getElementById("lwb").style.top='46%'
        document.getElementById("lwb").style.left='30%'

        document.getElementById("dm").style.top='46%'
        document.getElementById("dm").style.left='60%'
        
        document.getElementById("rwb").style.top='80%'
        document.getElementById("rwb").style.left='70%'

        document.getElementById("lm").style.top='20%'
        document.getElementById("lm").style.left='70%'

        document.getElementById("rm").style.top='30%'
        document.getElementById("rm").style.left='50%'

        document.getElementById("cm").style.top='60%'
        document.getElementById("cm").style.left='50%'

        document.getElementById("amr").style.top='60%'
        document.getElementById("amr").style.left='83%'

        document.getElementById("cb").style.top='35%'
        document.getElementById("cb").style.left='83%'






}

//reset the layout
if(i===5){

    document.getElementById("lb").style.top='0%'
    document.getElementById("lb").style.left='0%'

    document.getElementById("gk").style.top='0%'
    document.getElementById("gk").style.left='0%'

    document.getElementById("rb").style.top='0%'
    document.getElementById("rb").style.left='0%'

    document.getElementById("lwb").style.top='0%'
    document.getElementById("lwb").style.left='0%'

    document.getElementById("dm").style.top='0%'
    document.getElementById("dm").style.left='0%'
    
    document.getElementById("rwb").style.top='0%'
    document.getElementById("rwb").style.left='0%'

    document.getElementById("lm").style.top='0%'
    document.getElementById("lm").style.left='0%'

    document.getElementById("rm").style.top='0%'
    document.getElementById("rm").style.left='0%'
    document.getElementById("cm").style.top='0%'
    document.getElementById("cm").style.left='0%'

    document.getElementById("amr").style.top='0%'
    document.getElementById("amr").style.left='0%'

    document.getElementById("cb").style.top='0%'
    document.getElementById("cb").style.left='0%'






}

}



