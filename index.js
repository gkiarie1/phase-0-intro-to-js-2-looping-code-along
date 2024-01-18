// Code your solutions in this file
function writeCards(){
    const name=["Guadalupe", "Ollie", "Aki"];
    const eventName= "surprise";
    let invitationMessages= [];
    
        for (let i = 0; i < name.length; i++) {
            let message = `Thank you, ${name[i]}, for the wonderful ${eventName} gift!`;
            invitationMessages.push(message);
          }
          return invitationMessages;
    }
    
    function countDown(){
       let number=10;
        while(number>=0){
          console.log(number) 
      number--;
        }
    }
    