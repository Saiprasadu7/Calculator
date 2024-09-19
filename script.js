const display=document.getElementById('print');
function sum(input){
    display.value+=input;
}
function clearValue(){
    display.value="";
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch{
        display.value="Error";
    }
}