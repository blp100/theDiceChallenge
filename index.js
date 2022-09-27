document.body.addEventListener('click', rollTheDice, true); 

function rollTheDice(){
    var randomNumber1 = Math.floor(Math.random()*6) + 1;
    var diceOneImage = "images/dice" + randomNumber1  + ".png";

    document.querySelector(".img1").setAttribute("src",diceOneImage);

    var randomNumber2 = Math.floor(Math.random()*6) + 1;
    var diceTwoImage = "images/dice" + randomNumber2  + ".png";

    document.querySelector(".img2").setAttribute("src",diceTwoImage);

    var icon = '<i class="fa-solid fa-flag"></i>';

    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML =  icon + " Players 1 Wins! ";
    }else if (randomNumber1<randomNumber2){
        document.querySelector("h1").innerHTML =  " Players 2 Wins! " + icon;
    }
    else{
        document.querySelector("h1").innerHTML =  "Draw";
    }
}