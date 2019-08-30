var gameData = {
  teamPlaying1: "Select Team 1",
  teamPlaying2: "Select Team 2",
  outs: 0,
  team1Score: 0,
  team2Score: 0,
  inning: 1,
  teamList: ["Braves", "Marlins", "Indians", "Mets", "Yankees", "Padres", "Angels", "Tigers", "Expos", "Royals"],
  teamWins: [0,0,0,0,0,0,0,0,0,0],
  teamLosses: [0,0,0,0,0,0,0,0,0,0],
  game: true
}

var gameData2 = {
  teamPlaying1: "Select Team 1",
  teamPlaying2: "Select Team 2",
  outs: 0,
  team1Score: 0,
  team2Score: 0,
  inning: 1,
  teamList: ["Braves", "Marlins", "Indians", "Mets", "Yankees", "Padres", "Angels", "Tigers", "Expos", "Royals"],
  teamWins: [0,0,0,0,0,0,0,0,0,0],
  teamLosses: [0,0,0,0,0,0,0,0,0,0],
  game: true
}

////Populate team list from array in var gameData
function populateTeams(){
  for(i = 0; i <= 9; i++) {
    document.getElementById('team'+ i +'Name').innerHTML = gameData.teamList[i];
  }
}

function populateStats(){
  for(i = 0; i <= 9; i++) {
    document.getElementById('team'+ i +'Wins').innerHTML = gameData.teamWins[i];
  }

  for(i = 0; i <= 9; i++) {
    document.getElementById('team'+ i +'Losses').innerHTML = gameData.teamLosses[i];
  }
}




function viewStandings() {
  document.getElementById('showTeam1').innerHTML = gameData.teamPlaying1
  document.getElementById('showTeam2').innerHTML = gameData.teamPlaying2
}


function gameLoop() {
  document.getElementById('team1Playing').innerHTML = gameData.teamPlaying1
  document.getElementById('team2Playing').innerHTML = gameData.teamPlaying2
  document.getElementById('team1Score').innerHTML = gameData.team1Score
  document.getElementById('team2Score').innerHTML = gameData.team2Score
  document.getElementById('currentInning').innerHTML = gameData.inning
}

function playNow(teamChoice) {
  gameData.teamPlaying1 = teamChoice

}

function gameReset(){
  gameData.team1Score = 0
  gameData.team2Score = 0
  gameData.inning = 1
  document.getElementById('team1Playing').innerHTML = "Select Team 1"
  gameData.teamPlaying1 = "Select Team 1"
  gameData.teamPlaying2 = "Select Team 2"
  document.getElementById('team2Playing').innerHTML = "Select Team 2"
  document.getElementById('teamSelect1').value = "Select Home Team"
  document.getElementById('teamSelect2').value = "Select Away Team"
  document.getElementById('winner').style.display = "none"
  gameData.game=true
}

function playNow2(teamChoice) {
  gameData.teamPlaying2 = teamChoice
}

function resetAll(){
  this.gameData = this.gameData2
}

function runGame() {
  if(gameData.game){
    document.getElementById('winner').innerHTML = ""
    document.getElementById('winner').style.display = "block"
    if(gameData.inning < 9 || gameData.team1Score == gameData.team2Score){
    gameData.team1Score += Math.floor(Math.random() * 3)
    gameData.team2Score += Math.floor(Math.random() * 3)
    gameData.inning ++
  }
  else if(gameData.team1Score > gameData.team2Score){
    document.getElementById('winner').innerHTML = gameData.teamPlaying1 + " Win!"
    for(i=0; i < gameData.teamList.length; i++){
      if(gameData.teamPlaying1 === gameData.teamList[i]){
        gameData.teamWins[i]++

        for(i=0; i < gameData.teamList.length; i++){
          if(gameData.teamPlaying2 === gameData.teamList[i]){
            gameData.teamLosses[i]++

          }gameData.game = false}
      }
    }//end
  }
  else{
    document.getElementById('winner').innerHTML = gameData.teamPlaying2 + " Win!"
    for(i=0; i < gameData.teamList.length; i++){
      if(gameData.teamPlaying2 == gameData.teamList[i]){
        gameData.teamWins[i]++

        for(i=0; i < gameData.teamList.length; i++){
          if(gameData.teamPlaying1 === gameData.teamList[i]){
            gameData.teamLosses[i]++

          }gameData.game = false}
      }
    }
  }}
}//function

var saveGameLoop = window.setInterval(function() {
  localStorage.setItem('bestBaseball', JSON.stringify(gameData))
}, 1000)

var savegame = JSON.parse(localStorage.getItem("bestBaseball"))
if (savegame !== null) {
  gameData = savegame
}

var mainGameLoop = window.setInterval(function() {
  gameLoop()
  populateTeams()
  populateStats()
}, 1000)
