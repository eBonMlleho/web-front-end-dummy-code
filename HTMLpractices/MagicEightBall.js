let userName ='';
userName!=='' ? console.log(`Hello, ${userName}!`):console.log('Hello!')
let userQuestion = 'Do I like you?';
console.log(`The user asked: ${userQuestion}`);
var randomNumber = Math.floor(Math.random() * 3);
var eightBall = '';
switch(randomNumber){
    case 0:
        eightBall = 'It is certain'
        break;
    case 1:
        eightBall = 'It is decidedly so'
        break;
    case 2:
        eightBall = 'value 2'
        break;
}
console.log(eightBall);

