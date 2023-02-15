let dice1=document.getElementById('image1');
let dice2=document.getElementById('image2');
let heading=document.querySelector('h1');
let randomnum1=Math.floor((Math.random()*6)+1);
let randomnum2=Math.floor((Math.random()*6)+1);
let imgsrc1="images/"+"dice"+randomnum1+".png";
let imgsrc2="images/"+"dice"+randomnum2+".png"

dice1.setAttribute("src",imgsrc1);
dice2.setAttribute("src",imgsrc2);
if(randomnum1>randomnum2){
  heading.textContent="🎉Player1 Wins";
}
else if(randomnum2>randomnum1){
  heading.textContent="Player2 Wins🎉";
}else{
  heading.textContent="Drawn";
}
