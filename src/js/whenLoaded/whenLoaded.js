// whenLoaded.js

function whenLoaded()
{
    mainDataArray = mainDataArray.concat(apps, babylonjs3d, operators, lifeSciences, object_flat, true_ai_foundation, true_ai_kingdom, true_ai_starfleet_academy_ethos);

    makeInterface(beginner, 0);

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

