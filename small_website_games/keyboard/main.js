let ball = document.getElementById('float-circle');
//注意一个是  event reference 和 Event handler property 不一样

document.addEventListener('keydown',function(){
  ball.style.bottom = '250px';
})

document.addEventListener('keyup',function(){
  ball.style.bottom = '50px'; 
})
/*
document.onkeydown = function(){
    ball.style.bottom = '250px';
}
document.onkeyup = function(){
    ball.style.bottom = '50px';
}
*/