//Calculator Program
const display=document.getElementById("display");

//Preview in Display
function appendToDisplay(input){
    display.value +=input;

}

//Clear Display
function clearDisplay(){
    display.value ='';

}

//Delete one input
function deleteOneInput(){
  display.value=display.value.toString().slice(0,-1);
}


//Calculate Function
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}