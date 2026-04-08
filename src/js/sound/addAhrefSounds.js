// addAhrefSounds.js

function addAhrefSounds()
{
    let elements = document.querySelectorAll('a');

    for (let x = 0; x < elements.length; x++)
    {
        elements[x].addEventListener('mouseover', function()
        {
            hoverSound();
        });

        elements[x].addEventListener('click', function()
        {
            clickSound();
        });
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

