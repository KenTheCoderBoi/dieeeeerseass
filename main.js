var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

//var john = new Human()

function start()
{
    document.getElementById("textbox").innerHTML = ""; 

    //john.speak()
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    document.getElementById("textbox").innerHTML = Content;

    console.log(Content);


}