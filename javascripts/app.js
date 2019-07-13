// Rover Object Goes Here
// ======================

let rover = {
  direction : 'N',
  x  :  0,
  y : 0,
  travelLog : [ ],

}

// ======================

function turnLeft(rover){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      console.log(rover);
      travelLog(rover);
      break;
    
    case 'W':
      rover.direction = 'S';
      console.log(rover);
      travelLog(rover);
      break;

    case 'S':
      rover.direction = 'E';
      console.log(rover);
      travelLog(rover);
      break;
      
    case 'E':
      rover.direction = 'N';
      console.log(rover);
      travelLog(rover);
      break;  
  
    default:
      console.log('No puedes girar a la izquierda')
      break;
  }
}

function turnRight(rover){
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      console.log(rover);  
      travelLog(rover);
      break;
    
    case 'E':
      rover.direction = 'S';
      console.log(rover);  
      travelLog(rover);
      break;

    case 'S':
      rover.direction = 'W';
      console.log(rover);
      travelLog(rover);
      break;
      
    case 'W':
      rover.direction = 'N';
      console.log(rover);
      travelLog(rover);
      break;  
  
    default:
      console.log('No puedes girar a la derecha')
      break;
  }
}

// Mover el rover 

// If n = -y
// If w = -x
// If s = +y
// If e = +x

function moveForward(rover){
  switch (rover.direction) {
    case 'N':
      rover.y = rover.y + 1;
      console.log(rover);
      travelLog(rover);
      break;
    
    case 'S':
      rover.y = rover.y - 1;
      console.log(rover);
      travelLog(rover);
      break;

    case 'W':
      rover.x = rover.x + 1;
      console.log(rover);
      travelLog(rover);
      break;
        
    case 'E': 
      rover.x = rover.x - 1;
      console.log(rover);
      travelLog(rover);
      break;    
    
    default:
      console.log('No puedes avanzar')
      break;  
  }
}

// If n = +y
// If w = +x
// If s = -y
// If e = -x

function moveBackward(rover){
  switch (rover.direction) {
    case 'N':
      rover.y = rover.y - 1;
      console.log(rover);
      break;
    
    case 'S':
      rover.y = rover.y + 1;
      console.log(rover);
      break;

    case 'W':
      rover.x = rover.x - 1;
      console.log(rover);
      break;
        
    case 'E': 
      rover.x = rover.x + 1;
      console.log(rover);
      break;    
    
    default:
      console.log('No puedes avanzar')
      break;  
  }
}

function whatToDo (command,rover){
  console.log('Estoy iniciando en N...');
  // Asignarle a "command" el string
 // let command = 'rffrfflfrff';
  // Imprimir la longitud de "command" (mi string)
  console.log('Mi string mide =', command.length);
  // Declarar una nueva variable que aplique el split a "command"
  let myArray = command.split('');
  // Llamar a la nueva variable que ya actuó sobre "command" sin tener que llamarlo directamente
  console.log('Convierto cada caracter en parte de un arreglo =', myArray);
  //Acabo de crear una función que recibe la cadena de comandos y dividí sus componentes



  for (let i = 0; i < myArray.length; i++){
    switch(myArray[i]){
      case 'r' :
        turnRight(rover)
      console.log(`Volteé derecha`);
      break;
      
      case 'l':
        turnLeft(rover)
    
      console.log('Volteé izquierda');
      break;

      case 'f' :
        moveForward(rover)
      console.log('Avancé hacia adelante');
      break;

      case 'b' :
        moveBackward(rover)
      console.log('Retrocedí hacia atrás');

      default :
      console.log('Algo salió mal');
      break;
    }
 }

 /// Ver log


 console.log('El historial es', rover.travelLog)

 
 
}

// let dylan =[]

   function travelLog (rover) {
     let newObj = {
       direction:rover.direction,
       x:rover.x,
       y:rover.y
     }
    rover.travelLog.push(newObj)
     
   }
