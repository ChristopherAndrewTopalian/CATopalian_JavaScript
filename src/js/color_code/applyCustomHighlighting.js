// applyCustomHighlighting.js

function applyCustomHighlighting()
{
    // find every <code> tag that has the class "custom-code"
    let codeBlocks = document.querySelectorAll('code.custom-code');

    // we start a counter at 0, check if it's less than the total number of blocks, 
    // and increase the counter by 1 after every cycle.
    for (let i = 0; i < codeBlocks.length; i++)
    {
        // grab the specific block we are currently looking at
        let block = codeBlocks[i];

        // grab the raw text inside that block
        let rawText = block.textContent; 

        // pass it through your logic engine and replace the HTML
        block.innerHTML = processCodeString(rawText);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

