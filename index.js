var resultHeading = document.querySelector('h1'); 

var randomNumber1 = Math.ceil(Math.random()*6); 
var randomNumber2 = Math.ceil(Math.random()*6); 

var changeImg1 = 'dice' + randomNumber1 + '.png'; 
var changeImg2 = 'dice' + randomNumber2 + '.png'; 

var changeImgSrc1 = 'images/' + changeImg1;
var changeImgSrc2 = 'images/' + changeImg2;

var image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src',changeImgSrc1);

var image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src',changeImgSrc2);

if(randomNumber1>randomNumber2){
    resultHeading.innerHTML = "Player 1 Wins";
}else if(randomNumber1<randomNumber2){
    resultHeading.innerHTML = "Player 2 Wins";
}else{
    resultHeading.innerHTML = "Draw";
}