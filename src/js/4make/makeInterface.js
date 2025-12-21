// makeInterface.js

function makeInterface(whichArray, whichEntry)
{
    // if frameContainer exists
    if (ge("frameContainer"))
    {
        // remove frameContainer
        ge("frameContainer").remove();
    }

    let frameContainer = ce("div");
    frameContainer.style.position = "absolute";
    frameContainer.style.left = 90 + "px";
    frameContainer.style.top = 10 + "px";
    frameContainer.id = "frameContainer";
    ba(frameContainer);

    //-//

    let theFrame = ce("iframe");
    theFrame.src = whichArray[whichEntry].urlOffline;
    theFrame.id = "thePdfId";
    theFrame.style.width = '350px';
    theFrame.style.height = '300px';
    frameContainer.append(theFrame);

    //-//

    let buttonContainer = ce('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.flexDirection = 'column';
    buttonContainer.style.zIndex = 2;
    buttonContainer.style.position = 'absolute';
    buttonContainer.style.left = '0px';
    buttonContainer.style.top = '10px';
    buttonContainer.style.width = '90px';
    ba(buttonContainer);

    //-//

    for (let x = 0; x < whichArray.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = whichArray[x].name;
        theButton.onmouseover = function()
        {
            hoverSound();
        };
        theButton.onclick = function()
        {
            clickSound();
            theFrame.src = whichArray[x].urlOffline;
        };
        buttonContainer.append(theButton);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

