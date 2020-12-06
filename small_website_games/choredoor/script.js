let doorImage1 = document.getElementById('door1')
let doorImage2 = document.getElementById('door2')
let doorImage3 = document.getElementById('door3')
let startButton  = document.getElementById('start')
let currentPlaying = true
const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg"
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg"
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg"

const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg"
let numClosedDoors = 3;
let openDoor1 = null;
let openDoor2 = null;
let openDoor3 = null;

const isBot = (door)=>{
    if(door.src===botDoorPath){return true}
    else{return false}
}

const isClicked=(door)=>{
    if(door.src ===closedDoorPath){
        return false
    }
    else{return true}
}

const playDoor = (door) =>{
    numClosedDoors --;
    if(numClosedDoors === 0){
        gameOver('win')
    }
    else if(isBot(door)){
        gameOver('')
    }
}


doorImage1.onclick = () => {
    if(currentPlaying&&!isClicked(doorImage1)){
        doorImage1.src = openDoor1
        playDoor(doorImage1)
        
        
    }

}

doorImage2.onclick = () => {
    if(currentPlaying&&!isClicked(doorImage2)){
        doorImage2.src = openDoor2
        playDoor(doorImage2)
    }
 
}

doorImage3.onclick = () => {
    if(currentPlaying&&!isClicked(doorImage3)){
        doorImage3.src = openDoor3
        playDoor(doorImage3)
    }
    
}

startButton.onclick = ()=> {
    if(!currentPlaying){
        startRound()
    }
}

const startRound=()=>{
    doorImage1.src=closedDoorPath
    doorImage2.src=closedDoorPath
    doorImage3.src=closedDoorPath
    numClosedDoors = 3
    startButton.innerHTML = "Good Luck!"
    currentPlaying = true
 
    randomChoreDoorGenerator()

}

const gameOver=(status)=>{
    if(status ==='win'){
        startButton.innerHTML="You win! Play again?"
    }
    else{
        startButton.innerHTML='Game over! Play again?'
    }
    currentPlaying = false
}

const randomChoreDoorGenerator = () =>{
    let choredoor =  Math.floor(Math.random()*numClosedDoors)
    switch(choredoor){
        case 0:
            openDoor1 = botDoorPath
            openDoor2 = beachDoorPath
            openDoor3 = spaceDoorPath
            break;
        case 1:
            openDoor1 = beachDoorPath
            openDoor2 = botDoorPath
            openDoor3 = spaceDoorPath
            break;
        case 2:
            openDoor1 = beachDoorPath
            openDoor2 = spaceDoorPath
            openDoor3 = botDoorPath
            break;    

    }
}

startRound()



