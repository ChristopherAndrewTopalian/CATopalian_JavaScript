// copyPageURL.js

function copyPageURL()
{
    let directUrl = window.location.href;
    navigator.clipboard.writeText(directUrl).then(function()
    {
        alert("Direct link copied! We can now share this specific tutorial.");
    }).catch(function(err)
    {
        console.error("Could not copy text: ", err);
    });
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

