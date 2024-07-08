
let btns = document.querySelectorAll(".btn");
let userSeq =[];
let compSeq = [];
let h2 = document.querySelector("h2");
let level =1;
let started = false;

document.addEventListener("keypress" , function (event){

    event.stopPropagation();
    if(started == false){
        
        started = true;
        
        h2.innerText = "Level " + level ;
        
        levelUp();
    }
   
})

function checkInput(){
    // console.log("checking ip")
    for(let i =0; i<compSeq.length ; i++){
        if(userSeq[i] !== compSeq[i]){
    //         console.log(" user seq" + userSeq)
    // console.log("comp seq: " + compSeq)
            let score = level-1;
            started= false;
            userSeq=[];
            compSeq=[];
            h2.innerText = "Game Over, Your score was " + score + ".  Press any key to restart";
            return;
            
        }
    }
    
    level++;
    userSeq=[];
    h2.innerText = "level" + level;
    levelUp();
}


function btnPress(btn,bg){
   
    userSeq.push(btn.id);
    // console.log(" user seq" + userSeq)
    // console.log("comp seq: " + compSeq)
    if(userSeq.length == compSeq.length && userSeq.length == level){

        checkInput();

    }
    if(userSeq.length < compSeq.length){
        for(let i =0; i<userSeq.length ; i++){
            if(userSeq[i] !== compSeq[i]){
        //         console.log(" user seq" + userSeq)
        // console.log("comp seq: " + compSeq)
                let score = level - 1;
                started= false;
                userSeq=[];
                compSeq=[];
                h2.innerText = "Game Over, Your score was " + score + ".  Press any key to restart";
                return;
                
            }
        }
    }
   
}

function flashbtn(btn, bg){
  
   btn.style.backgroundColor = "white";
   
    setTimeout(function () {
        btn.style.backgroundColor = `${bg}`;
    }, 1000)

    
 
    
   
   
}


    for(let btn of btns){

        
        btn.addEventListener("click", function (event){
            let bg = btn.style.backgroundColor;
            console.log(event)
            if(event.target.id === btn.id && started==true){
               
               
                btn.style.backgroundColor="green";
                setTimeout(function () {
                    btn.style.backgroundColor = `${bg}`;
                }, 200)
                setTimeout(function (){
                    btnPress(btn);
                }, 400)
                
            }
        }) ;
    }


    



function levelUp(){
    
        let r = Math.floor(Math.random() *4);
       
        let btn1 = document.querySelectorAll(".btn")[r];
      
        // console.log("comp seq" + compSeq)
        compSeq.push(btn1.id);
        flashbtn(btn1, btn1.style.backgroundColor);
       
        
        

    
}

