var canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploading; 
	img_imgTag.src = img_image;   
}

function uploading() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}
window.addEventListener("keydown",my_keydown)

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
		aplhabetkey();
		document.getElementById("d1").innerHTML="You pressed Alphabet Key";
	}
 
else{
	otherkey();
	document.getElementById("d1").innerHTML="You Pressed Other Key";
	console.log("other key");}

if 
(keyPressed >=48 && keyPressed <=57){
   numberkey();
   document.getElementById("d1").innerHTML="You Pressed Number Key";
}
   if (keyPressed>=37 && keyPressed <=40){
	   arrowkey();
	   document.getElementById("d1").innerHTML="You Pressed Arrow Key"
   }
   if (keyPressed ==17){
	   Specialkey();
	   document.getElementById("d1").innerHTML="You Pressed Special Key"
   }
   if (keyPressed ==18){
	Specialkey();
	document.getElementById("d1").innerHTML="You Pressed Special Key"
}
   if (keyPressed ==27){
	Specialkey();
	document.getElementById("d1").innerHTML="You Pressed Special Key"
}
  
	
function otherkey()
{
	img_image="otherkey.png";
	add();
}	
function aplhabetkey()
{
	img_image="Alpkey.png";
	add();
}
function numberkey()
{
	img_image="numkey.png";
	add();
}	
function arrowkey()
{
	img_image="Arrkey.png";
	add();
}
function Specialkey()
{
	img_image="spkey.png";
	add();
}			

}