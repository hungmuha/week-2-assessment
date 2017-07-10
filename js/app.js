$(document).ready(function(){

 var l=0;
 var a=0;

 window.addEventListener("keypress",test) //function that control the keypress to the box move
 function test(e){
 	let key=e.which||e.keyCode;
 	if(key===108){ //blue box move
 		console.log("you pressed L");
 		l++;
 		var b= "blue";
 		shapeMove(l,b);	
 	}
 	if(key===97){ //red box move
 		console.log("you pressed A");
 		a++;
 		var r= "red";
 		shapeMove(a,r);
 	}
  }
  	function shapeMove(x,color){ //function that give the key stroke meaning to move the box
  		let y= String(x*30)+"px";
  		if(color.valueOf()=="blue"){
  			var blueMove = x; //this keep track of how far the blue box have gone
  			document.getElementById("blue").style.marginLeft= y;
  			if(blueMove === 30){ //the amount of move that the player has to make before becoming a winner
  				alert("Top Won");
  			}
  		}
  		if(color.valueOf()=="red"){
  			var redMove = x; //this keep track of how far the red box have gone
  			document.getElementById("red").style.marginLeft= y;
  			if(redMove === 30){//the amount of move that the player has to make before becoming a winner
  				alert("Bottom Won");		
  			}
  		}
  		x=0;
  	}
  	





	})