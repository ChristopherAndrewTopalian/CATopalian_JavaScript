// addBtnSounds.js

function addBtnSounds()
{
    let buttons = document.querySelectorAll('button');

    for (let x = 0; x < buttons.length; x++)
    {
        buttons[x].addEventListener('mouseover', function()
        {
            hoverSound();
        });

        buttons[x].addEventListener('click', function()
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

