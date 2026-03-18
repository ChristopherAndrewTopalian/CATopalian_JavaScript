// whenLoaded.js

function whenLoaded()
{
    makeInterface(operators, 0);

    // run the engine as soon as the page loads
    window.onload = function()
    {
        applyCustomHighlighting();
    };

    // disable the context menu from opening upon right click
    document.addEventListener('contextmenu', function(event)
    {
        event.preventDefault();
    });
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

