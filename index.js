
function playGame(){
  var diceArray = ["images/\dice1.png","images/\dice2.png","images/\dice3.png","images/\dice4.png","images/\dice5.png","images/\dice6.png"] ;

  var a = Math.floor(Math.random()*6) ;
  var b = Math.floor(Math.random()*6) ;

  var images = document.querySelectorAll("img") ;
  images[0].setAttribute("src",diceArray[a]) ;
  images[1].setAttribute("src",diceArray[b]) ;

  if (a === b){
    document.querySelector("h1").textContent = "🎌 Its a Tie!" ;
  }
  else if (a > b){
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!" ;
  } else {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩" ;
  }
  document.querySelector("button").textContent = "PLAY AGAIN";
}
