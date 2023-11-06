// process  1 Declaring variables+
const boxElement=document.querySelectorAll(".box");
var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
var xAttempts = [];
var oAttempts = [];
var click=0;
var wonTheGame = 0;
const message= document.getElementById("message");
const gameResult=document.getElementById("result");
const restart=document.getElementById("button");

// Process  2  Onclick function
boxElement.forEach(box=>{
    console.log(box);
    box.onclick  = handleClick;
})
function handleClick(e){
    console.log(e.target);
    console.log(e.target.getAttribute('id'));
    const i=e.target.getAttribute('id');
    const text = document.createElement('p');
    text.setAttribute('id','text');
    boxElement[i-1].appendChild(text);
    console.log(boxElement[i-1]);
    if(click%2 == 0){
        xAttempts.push(parseInt(i-1));
        console.log(xAttempts);
        text.innerHTML="X"; 
        text.style.color = '#FAB201';
        result(winningCombinations,xAttempts,"X");
    }
    else{
        oAttempts.push(parseInt(i-1));
        console.log(oAttempts)
        text.innerHTML="O";
        text.style.color = '#FAB201';
        result(winningCombinations,oAttempts,"O");
    }
    click++;
    if(click == 9 && wonTheGame == 0){ 
            gameResult.style.visibility="visible";
            message.innerHTML = "It's a tie 🤝 ";
    }
}
// process 3:
function result(winningCombinations, attempts, player){
    let flag = 0;
    let checker = [];
    for (var i = 0; i < winningCombinations.length; i++) {
        console.log(winningCombinations[i]);
        if (Array.isArray(winningCombinations[i])){//it will check whether the winningCombinations is array or not if it is array
                                                   //it will set the parameters for result.
            result(winningCombinations[i],attempts,player);
        }else{
            if(attempts.includes(winningCombinations[i])){ //if the attempts includes the array the desired combination
                checker.push(true); //checker will have the boolean value as true
                flag++;//flag gets increament by 1
            } else {
                checker.push(false);//when the condition fails the checker will have the boolean value as false
            }
        }
    }
    if (checker.every(check => check === true)&&flag>2){//the condition is true the message is printed 
            gameResult.style.visibility="visible";
            message.innerHTML ="'"+ player +"'" + " Won the game!";  
            wonTheGame=1;   
    }
}

// process  4: Restart function

restart.onclick=()=>{ 
    history.go(0);
}