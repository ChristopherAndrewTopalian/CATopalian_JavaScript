// readText.js

// Force the browser to load voices immediately in the background
if ('speechSynthesis' in window) {
    window.speechSynthesis.onvoiceschanged = function() {
        window.speechSynthesis.getVoices();
    };
}

function readText(elementId) {
    let textDiv = document.getElementById(elementId);
    let textToRead = textDiv.innerText;

    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(textToRead);
        
        // Load the array of all voices the browser has access to
        let availableVoices = window.speechSynthesis.getVoices();
        
        // Print the total number of voices to your F12 Developer Console
        console.log("Total voices loaded: " + availableVoices.length);
        
        // Filter 1: Look for Michelle first
        let premiumVoice = availableVoices.find(voice => 
            voice.name.includes('Michelle')
        );

        // Filter 2: If Michelle is missing, fall back to the next best Natural or Google voice
        if (!premiumVoice) {
            premiumVoice = availableVoices.find(voice => 
                voice.name.includes('Natural') || voice.name.includes('Google')
            );
        }
        
        // If either filter found a match, assign it to the utterance
        if (premiumVoice) {
            console.log("Success! Using voice: " + premiumVoice.name);
            utterance.voice = premiumVoice;
        } else {
            console.log("Premium voice failed to load. Falling back to system default.");
        }
        
        // adjust the reading speed (1.0 is default, 0.9 is slightly slower)
        utterance.rate = 0.95; 
        
        // Trigger the browser to speak
        window.speechSynthesis.speak(utterance);
    } else {
        console.log("Text-to-speech is not supported in this browser.");
    }
}

function readText2(elementId)
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

