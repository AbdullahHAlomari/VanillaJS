function playerinfo(i){

  var someData= JSON.parse(localStorage.getItem("response"))

  document.getElementById("name").textContent = someData.players[i].player.name
  document.getElementById("position").textContent = someData.players[i].player.position
  getimage(someData.players[i].player.name).then((response) => console.log(response))
  



}


const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "494d7041f3msh39e5c433dacff8dp1181c2jsnb087a426e03d",
    "X-RapidAPI-Host": "footapi7.p.rapidapi.com",
  },
};

 fetch("https://footapi7.p.rapidapi.com/api/team/1644/players", options)
.then((response) => response.json())
.then((response) => {
    localStorage.setItem("response", JSON.stringify(response));
  console.log(response);

})




async function getimage(name){
  await fetch("http://api.scraperapi.com/?api_key=cde13e1d2d32e956e933f840306a667c&url=https://keywordimage.com/image.php?q="+name+"/ip&render=true")
.then((response) => response.text())
.then((response) => {


  let result = response.substring(35,response.length-16)
  return result;

})}
