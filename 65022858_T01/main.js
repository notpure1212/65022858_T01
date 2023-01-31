let randNum = Math.floor(Math.random()*101);
console.log(randNum);
function GN(){
    let Guess_Number = document.getElementById('G_N').value;
    if(Guess_Number==randNum){
        alert("CORRECT!");
    }else if (Guess_Number<randNum){
        alert("TOO LOW!");
    }else{
        alert("TOO HIGH!")
    }
    console.count(Guess_Number)
}