var myRover = {
  position: [0,0], 
  direction: 'N'
};

function goForward(rover) {
  switch(rover.direction) {
    case 'N': if (rover.position[0] === 9){
      rover.position[0] = 9;
      console.log('Alert. Top of the grid reached.');
    } else rover.position[0]++
      break;
    case 'E': if (rover.position[1] === 9){
      rover.position[1] = 9;
      console.log('Alert. Right edge of the grid reached.');
      } else rover.position[1]++
      break;
    case 'S': if (rover.position[0] === 0){
      rover.position[0] = 0;
      console.log('Alert. Bottom of the grid reached.');
      } else rover.position[0]--
      break;
    case 'W': if (rover.position[1] === 0){
      rover.position[1] = 0;
      console.log('Alert. Left edge of the grid reached.');
      } else rover.position[1]--
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}


function goBackward(rover) {
  switch(rover.direction) {
    case 'N': 
      if (rover.position[0] === 0){
        rover.position[0] = 0;
        console.log('Alert. Bottom of the grid reached.')
      }
       else rover.position[0]--
      break;
    case 'E': 
      if (rover.position[1] === 0){
        rover.position[1] = 0;
        console.log('Alert. Left edge of the grid reached.')
      }
       else
      rover.position[1]--
      break; 
    case 'S': 
      if (rover.position[0] === 9){
        rover.position[0] = 9;
        console.log('Alert. Bottom of the grid reached.')
      }
       else
      rover.position[0]++
      break;
    case 'W': 
      if (rover.position[1] === 9){
        rover.position[1] = 9;
        console.log('Alert. Bottom of the grid reached.')
      }
       else
      rover.position[1]++
      break;
  };

  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function turnRight(rover) {
  switch(rover.direction) {
    case 'N': rover.direction = 'E'
      break;
    case 'E': rover.direction = 'S'
      break;
    case 'S': rover.direction = 'W'
      break;
    case 'W': rover.direction = 'N'
      break; 
      default: rover.direction = rover.direction;
    break;
  };
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

  function turnLeft(rover) {
  switch(rover.direction) {
    case 'N': rover.direction = 'W'
      break;
    case 'E':  rover.direction = 'N'
      break;
    case 'S': rover.direction = 'E'
      break;
    case 'W': rover.direction = 'S'
      break;
    default: rover.direction = rover.direction;
    break;
  };
  console.log("New Rover Position: [" + rover.position[0] + ", " + rover.position[1] + "]")
}

function movement(){

  orders = prompt("Welcome to the Mars Rover Kata. Please enter your command. Remember: f for forward movement, b for backwards movement, r for right movement and l for left movement.");
  orders = orders.toLowerCase();
  for (index = 0; index < orders.length; index ++)
    if (orders.charAt(index) === 'f'){
      goForward(myRover);
      
    } else if (orders.charAt(index) === 'b') {
       goBackward(myRover);
      
    } else if (orders.charAt(index) === 'r'){
      turnRight(myRover);
        
   
    } else if (orders.charAt(index) === 'l') {
     turnLeft(myRover);  
    }
      
    }

movement()


/*
goForward(myRover);
goForward(myRover);
goRight(myRover);
goBackward(myRover);
goLeft(myRover);
*/
