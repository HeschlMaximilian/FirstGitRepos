function checkMail(){

    alert("Dies ist eine ungültige Email");
    var mail = document.getElementById('email').value;
    if (mail.includes('@')) {
        document.getElementById('textInput').value= "";
        document.getElementById('email').value = "";
        console.log('test');
    } 
    
    else {
    }
}
function logToConsole(){
    console.log("TEst")
}

