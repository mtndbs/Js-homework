// all the js var
NumScreen = document.getElementById("scrn");
mainDiv = document.getElementById("main-div");
btnDiv = document.getElementById('btn-div');
btns = document.getElementsByClassName('btn');
// js styling 
NumScreen.style.textAlign = "center";
NumScreen.style.fontSize = "3rem";

mainDiv.style.width = "200px";
mainDiv.style.height = "200px";
mainDiv.style.border = "solid 1px black";
mainDiv.style.borderRadius = "20px";
mainDiv.style.margin = "200px auto";
mainDiv.style.boxsizing = "border-box";
mainDiv.style.backgroundColor = "silver";
mainDiv.style.transition = "background-color 1s";   // if you want to use JS transition, you will write inside the " - " with css syntext , and not backgroundColor like JS 

document.body.style.transition = "background-color 1s"; // same

btnDiv.style.display="flex";
btnDiv.style.justifyContent="space-around";
btnDiv.style.marginTop = "40px"

//random change color function
function randRgb() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    return "rgb(" + x + "," + y + "," + z + ")";
  }



// the selector code. 
let x = 1;
NumScreen.innerHTML = x;
// must be carful to code ++ before the x, else js will read it x, and only in the next step the ++ it will be expressed. 
//to lern more, type :   x=1 , console.log(x++) it will output 1 or 2??? , 1.   Now try console.log(++x)


function upBtn() {
  NumScreen.innerHTML = x++;
  NumScreen.innerHTML = x   // Another way is to type the variable again

  // also you can use -->  Numscreen.innerHTML = ++x
  
  if(x >= 6) {
    NumScreen.innerHTML = x = 1
  }
  document.body.style.backgroundColor = randRgb();
}

function downBtn() {
  NumScreen.innerHTML = x--;
  NumScreen.innerHTML = x
  // also you can use -->  Numscreen.innerHTML = --x
  if (x < 1) {
    NumScreen.innerHTML = x = 5;
  }
  x= x
  document.body.style.backgroundColor = randRgb();


}




