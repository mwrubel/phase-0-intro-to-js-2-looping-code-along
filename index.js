// Code your solutions in this file
function writeCards(names, eventName){
    let messages = []
    for (let i = 0; i < names.length; i++){
        
        messages.push('Thank you, ' + names[i] + ', for the wonderful ' + eventName + ' gift!')
    }
    return messages
}
function countDown(){
    for (let cDown = 10; cDown >= 0; cDown--) {
    console.log(cDown);
  }
}
