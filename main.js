// here it checks if the team info already exists in the local storage so we don't have to fetch everytime. It uses the teamid key to check.
let teamid = "1644";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "494d7041f3msh39e5c433dacff8dp1181c2jsnb087a426e03d",
    "X-RapidAPI-Host": "footapi7.p.rapidapi.com",
  },
};

fetch(
  "https://footapi7.p.rapidapi.com/api/team/" + teamid + "/players",
  options
)
  .then((response) => response.json())
  .then((response) => {
    let players = [];

    //this creates an array of each player on the team and their properties
    response.players.forEach((i) => {
      let player = {
        name: i.player.name,
        position: i.player.position,
        jerseyNumber: i.player.jerseyNumber,
        team: i.player.team.nameCode,
        height: i.player.height,
        country: i.player.country.name,
      };
      const div = document.createElement("div");
      div.className = "containerState";

      let heading = document.createElement("h2");
      let p = document.createElement("p");
      let pNum = document.createElement("p");
      let h4 = document.createElement("h4");
      let pHeight = document.createElement("p");
      let pCountry = document.createElement('p')

// append elements to tags
      heading.append(player.name);
      p.append(player.position);
      pNum.append(player.jerseyNumber);
      h4.append(player.team);
      pHeight.append(player.height)
      pCountry.append(player.country)


    //   append tags to div
      div.append(heading);
      div.append(p);
      div.append(pNum);
      div.append(h4);
      div.append(pHeight);
      div.append(pCountry)
      console.log(div);

      document.getElementById("state").append(div);
      //   div.appendChild
      players.push(player);
    });

    //store the array in local storage
    localStorage.setItem(teamid, JSON.stringify(players));
    console.log(players);
  });
