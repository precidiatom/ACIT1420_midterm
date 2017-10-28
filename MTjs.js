var paraInput = document.getElementById("parainput");
var colorInput = document.getElementById("colorinput");
var grabBG = document.getElementById("background");
var BGinput = document.getElementById("imginput");
var bgX = 0;
var bgY = 0;
var bgHeight = 300;

function expandMenu(){
 document.getElementById("menu").addEventListener("click", function(){
        document.getElementById("control").style.bottom = "0px";
    });
}

function changeColor(){
  colorInput.addEventListener("change", function(ev){
   document.getElementById("bgtitle").style.color = colorInput.value;
    
    document.getElementById("bgdescription").style.color = colorInput.value;
});  
}

function changeBG(){
    BGinput.addEventListener("keydown", function(ev){
        var bgImgval = BGinput.value;

        if(ev.keyCode == 13){
          if (bgImgval == "horse"){
            grabBG.style.backgroundImage = "url(img/bg1.jpg)";
          } else if(bgImgval == "night"){
            grabBG.style.backgroundImage = "url(img/bg2.jpg)";
          } else if(bgImgval == "mountain"){
            grabBG.style.backgroundImage = "url(img/bg3.jpg)";
          } else if((bgImgval.indexOf("epic") > 0)){
             grabBG.style.backgroundImage = "url(img/bg4.jpg)";
          } else if((bgImgval == "epic")){
             grabBG.style.backgroundImage = "url(img/bg4.jpg)";
          } else {
                grabBG.style.backgroundImage = "url(" + bgImgval + ")";
          }
        }
    });
}

function changeTitle(){
    document.getElementById("titleinput").addEventListener("keyup", function(ev){
        document.getElementById("bgtitle").innerHTML = document.getElementById("titleinput").value;
    });
}

//Change the paragraph input
function changeDescription(){
    paraInput.addEventListener("keyup", function(ev){
       document.getElementById("bgdescription").innerHTML = paraInput.value;
    });
}

// Move the background img position
function moveBG(keycode){
    if(keycode == 37){ //move left
       bgX -= 10;
       grabBG.style.backgroundPositionX = bgX + "px";
    } else if(keycode == 39){ //move right
        bgX += 10;
        grabBG.style.backgroundPositionX = bgX + "px";
    } else if(keycode == 38){ //move up
        bgY -= 10;
        grabBG.style.backgroundPositionY = bgY + "px";
    } else if(keycode == 40){ //move down
        bgY += 10;
        grabBG.style.backgroundPositionY = bgY + "px";
    } else if(keycode == 187){ //plus height
        bgHeight += 10;
        grabBG.style.height = bgHeight + "px"; 
    } else if(keycode == 189) { //minus height
        bgHeight -= 10;
        grabBG.style.height = bgHeight + "px";
    }
}

//Creating new elements
document.getElementById("addelement").addEventListener("click", function(){
    var newBoard = document.createElement("div");
    var newTitle = document.createElement("div");
    var newDes = document.createElement("div");
    var getBG = grabBG.value;
    var bgTitle = document.getElementById("titleinput").value;
    var bgPara = paraInput.value;
    
    
    newBoard.className ="background";
    newTitle.className ="bgtitle";
    newDes.className ="bgdescription";
    
    var newStory = document.getElementById("display").appendChild(newBoard);
    newStory.appendChild(newTitle);
    newStory.appendChild(newDes);
    
    newBoard.style.cssText ="display:100%;position:relative;height:300px;";
    newTitle.style.cssText = "position:absolute;left:10%;top:10%;text-decoration:underline;text-decoration-color: grey;font-size:x-large;";
    newDes.style.cssText = "position:absolute;left:10%;top:20%;font-size:large";
    
    newTitle.style.color = colorInput.value;
    newDes.style.color = colorInput.value;
    
    newBoard.style.backgroundImage = grabBG.style.backgroundImage;
    newTitle.innerHTML = bgTitle;
    newDes.innerHTML = bgPara;  
   
});

expandMenu();
changeBG();
changeTitle();
changeDescription();
changeColor();
document.body.addEventListener("keydown", function(ev){
    if(ev.keyCode == 37){ 
       moveBG(37);
    } else if(ev.keyCode == 39){ 
        moveBG(39);
    } else if(ev.keyCode == 38){
        moveBG(38);
    } else if(ev.keyCode == 40){ 
        moveBG(40);
    } else if(ev.keyCode == 187){ 
        moveBG(187);
    } else if(ev.keyCode == 189) {
        moveBG(189);
    }
});