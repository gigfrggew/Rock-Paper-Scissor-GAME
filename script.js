// let btn1=document.querySelector(".btn1");
// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked-handler1")
// })
// btn1.addEventListener("click",()=>{
//     console.log("button was clicked-handler2")
// })
// const handler3=()=>{
//     console.log("button was clicked-handler3")
// };
// btn1.addEventListener("click",handler3);
// btn1.addEventListener("click",()=>{
//     console.log("button was clicked-handler4")
// })
// btn1.removeEventListener("click",handler3)
// let modeBtn=document.querySelector(".mode");
// let body=document.querySelector("body");
// let currMode="light";
// modeBtn.addEventListener("click",()=>{
// if(currMode==="light"){
//     currMode="dark";
//     body.classList.add("dark");
//     body.classList.remove("light");
// }
// else{
//     currMode="light";
//     body.classList.add("light");
//     body.classList.remove("dark");
// }
// console.log(currMode);
// });
// let btn1=document.querySelector(".btn1");
// let btn2=document.querySelector(".btn2");
// let body=document.querySelector("body");
// let currMode="light";
// btn1.addEventListener("mouseover",()=>{
//     if(currMode==="light"){
//         currMode="dark";
//         console.log("background is in dark mode");
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }
// })
// btn2.addEventListener("mouseover",()=>{
//     if(currMode==="dark"){
//         currMode="light";
//         console.log("background is in light mode");
//         body.classList.add("light");
//         body.classList.remove("dark")

//     }
// })
let userScore=0;
let compScore=0;
const userScorePara=document.querySelector("#user-score")
const compScorePara=document.querySelector("#comp-score")
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const getCompChoice=()=>{
    const options=["rock","paper","scissors"]
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}
const drawGame=()=>{
    console.log("Game was a draw ");
    msg.innerText="Game was a draw.Play again";
    msg.style.backgroundColor="#081b31";
};
const shoWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        msg.innerText=`Congratulations You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
        userScore++;
        userScorePara.innerText=userScore;
    }
    else{
        msg.innerText=`Sorry You Lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        compScorePara.innerText=compScore;
    }
};
const playGame=(userChoice)=>{
    console.log("user-choice=",userChoice);
    const compChoice=getCompChoice();
    console.log("computer-choice:",compChoice);

    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        shoWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});