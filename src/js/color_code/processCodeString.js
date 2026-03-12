// processCodeString.js

function processCodeString(rawCode)
{
    let code = escapeHtml(rawCode);

    let functionPattern = new RegExp(`\\b(${theFunctions.join('|')})\\b`, 'g');

    let eventPattern = new RegExp(`\\b(${theEvents.join('|')})\\b`, 'g');

    let objectPattern = new RegExp(`\\b(${theObjects.join('|')})\\b`, 'g');

    let highlightedCode = code
        // strings first! (So that it doesn't break the span classes)
        .replace(/(["'`])(?:\\.|[^\\])*?\1/g, '<span class="lightGray">$&</span>')

        // comments second! This catches "//" and everything after it to the end of the line.
        .replace(/(\/\/.*)/g, '<span class="green">$1</span>')

        // now we run all the other patterns
        .replace(functionPattern, '<span class="yellow">$1</span>')

        .replace(eventPattern, '<span class="flowControl">$1</span>')

        .replace(objectPattern, '<span class="objects">$1</span>')

        .replace(/\bfunction\b/g, '<span class="pink">function</span>')

        .replace(/\b(let|const|var)\b/g, '<span class="pink">$1</span>')

        .replace(/\bnew\b/g, '<span class="pink">new</span>')

        .replace(/\d+/g, '<span class="lightGray">$&</span>') // \d+ to catch multi-digit numbers!

        .replace(/\b(if|else|do|while|for|forEach|break|continue|return)\b/g, '<span class="magenta">$1</span>');

    return highlightedCode;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

