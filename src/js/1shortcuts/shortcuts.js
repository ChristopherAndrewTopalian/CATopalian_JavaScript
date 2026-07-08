// shortcuts.js

function ge(whichId)
{
    let result = document.getElementById(whichId);
    return result;
}

function ce(whichType)
{
    let result = document.createElement(whichType);
    return result;
}

function ba(whichElement)
{
    let result = document.body.append(whichElement);
    return result;
}

function cl(whichMessage)
{
    let result = console.log(whichMessage);
    return result;
}

function ct(whichText)
{
    let result = document.createTextNode(whichText);
    return result;
}

function gr(whichId)
{
    let result =  ge(whichId).getBoundingClientRect();
    return result;
}

// UNIVERSAL ARRAY OPERATIONS

// Replaces array.push(item)
function addToEnd(targetArray, itemToAdd)
{
    targetArray.push(itemToAdd);
    return targetArray;
}

// Replaces array.pop()
function removeLast(targetArray)
{
    let removedItem = targetArray.pop();
    return removedItem;
}

// Replaces array.unshift(item)
function addToStart(targetArray, itemToAdd)
{
    targetArray.unshift(itemToAdd);
    return targetArray;
}

// Replaces array.shift()
function removeFirst(targetArray)
{
    let removedItem = targetArray.shift();
    return removedItem;
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

