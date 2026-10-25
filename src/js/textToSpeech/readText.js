// readText.js

function readText(elementId)
{
    let textDiv = document.getElementById(elementId);
    let textToRead = textDiv.innerText;

    // We check if the browser supports the speech API
    if ('speechSynthesis' in window)
    {
        // We create the audio utterance packet
        let utterance = new SpeechSynthesisUtterance(textToRead);
        
        // We can optionally tweak the pacing
        utterance.rate = 0.9; 
        
        // We trigger the browser to speak
        window.speechSynthesis.speak(utterance);
    }
    else
    {
        console.log("Text-to-speech is not supported in this browser.");
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

