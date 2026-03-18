// makeInterface.js

function makeInterface(whichArray, whichEntry)
{
    ba(makeTitleOfApp());

    // if frameContainer exists
    if (ge("frameContainer"))
    {
        // remove frameContainer
        ge("frameContainer").remove();
    }

    let frameContainer = ce("div");
    frameContainer.style.position = "absolute";
    frameContainer.style.left = 120 + "px";
    frameContainer.style.top = 20 + "px";
    frameContainer.id = "frameContainer";
    ba(frameContainer);

    //-//

    let theFrame = ce("iframe");
    theFrame.src = whichArray[whichEntry].urlOffline;
    theFrame.id = "thePdfId";
    theFrame.style.width = '620px';
    theFrame.style.height = '300px';
    theFrame.style.overflowX = 'scroll';
    frameContainer.append(theFrame);

    //-//

    let buttonContainer = ce('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.flexDirection = 'column';
    buttonContainer.style.zIndex = 2;
    buttonContainer.style.position = 'absolute';
    buttonContainer.style.left = '0px';
    buttonContainer.style.top = '10px';
    buttonContainer.style.width = '120px';
    buttonContainer.style.height = '300px';
    buttonContainer.style.overflow = 'scroll';
    buttonContainer.style.gap = '1px';
    ba(buttonContainer);

    //-//

    let collapseExpandContainer = ce('div');
    collapseExpandContainer.style.display = 'flex';
    collapseExpandContainer.style.flexDirection = 'row';
    buttonContainer.append(collapseExpandContainer);

    //-//

    let collapseAllDetailsBtn = ce('button');
    collapseAllDetailsBtn.textContent = '_';
    collapseAllDetailsBtn.onmouseover = function()
    {
        hoverSound();
    };
    collapseAllDetailsBtn.onclick = function()
    {
        clickSound();
        collapseAllDetails();
    };
    collapseExpandContainer.append(collapseAllDetailsBtn);

    //-//

    let exapandAllDetailsBtn = ce('button');
    exapandAllDetailsBtn.textContent = 'O';
    exapandAllDetailsBtn.onmouseover = function()
    {
        hoverSound();
    };
    exapandAllDetailsBtn.onclick = function()
    {
        clickSound();
        expandAllDetails();
    };
    collapseExpandContainer.append(exapandAllDetailsBtn);

    //-//

    let symbolsDetails = ce('details');
    symbolsDetails.onmouseover = function()
    {
        hoverSound();
    };
    symbolsDetails.onclick = function()
    {
        clickSound();
    };
    buttonContainer.append(symbolsDetails);

    //-//

    let symbolsSummary = ce('summary');
    symbolsSummary.textContent = 'Symbols';
    symbolsDetails.append(symbolsSummary);

    for (let x = 0; x < whichArray.length; x++)
    {
        if (whichArray[x].category == 'arithmetic_operators' || whichArray[x].category == 'assignment_operators')
        {
            let theButton = ce("button");
            theButton.textContent = whichArray[x].name;
            theButton.onmouseover = function()
            {
                //hoverSound();
            };
            theButton.onclick = function()
            {
                //clickSound();
                theFrame.src = whichArray[x].urlOffline;
            };
            symbolsDetails.append(theButton);
        }
    }

    //----//

    let arrayDetails = ce('details');
    arrayDetails.onmouseover = function()
    {
        hoverSound();
    };
    arrayDetails.onclick = function()
    {
        clickSound();
    };
    buttonContainer.append(arrayDetails);

    //-//

    let arraySummary = ce('summary');
    arraySummary.textContent = 'Array';
    arrayDetails.append(arraySummary);

    for (let x = 0; x < whichArray.length; x++)
    {
        if (whichArray[x].category == 'array')
        {
            let theButton = ce("button");
            theButton.textContent = whichArray[x].name;
            theButton.title = whichArray[x].description || '';
            theButton.onmouseover = function()
            {
                // hoverSound();
            };
            theButton.onclick = function()
            {
                //clickSound();
                theFrame.src = whichArray[x].urlOffline;
            };
            arrayDetails.append(theButton);
        }
    }

    //----//

    let aooDetails = ce('details');
    aooDetails.onmouseover = function()
    {
        hoverSound();
    };
    aooDetails.onclick = function()
    {
        clickSound();
    };
    buttonContainer.append(aooDetails);

    //-//

    let aooSummary = ce('summary');
    aooSummary.textContent = 'AOO';
    aooDetails.append(aooSummary);

    for (let x = 0; x < whichArray.length; x++)
    {
        if (whichArray[x].category == 'array_of_objects')
        {
            let theButton = ce("button");
            theButton.textContent = whichArray[x].name;
            theButton.onmouseover = function()
            {
                // hoverSound();
            };
            theButton.onclick = function()
            {
                //clickSound();
                theFrame.src = whichArray[x].urlOffline;
            };
            aooDetails.append(theButton);
        }
    }

    //----//

    // we create an empty docking bay for our cleaned app names
    let cleanApps = [];

    // loop through the original array
    for (let i = 0; i < apps.length; i++)
    {
        // create a copy of the current app, but replace the name
        let updatedApp = {
            ...apps[i], 
            name: apps[i].name.replace("CATopalian JavaScript ", "")
        };

        // send the new, clean object into our new array
        cleanApps.push(updatedApp);
    }

    let appsDetails = ce('details');
    appsDetails.onmouseover = function()
    {
        hoverSound();
    };
    appsDetails.onclick = function()
    {
        clickSound();
    };
    buttonContainer.append(appsDetails);

    //-//

    let appsSummary = ce('summary');
    appsSummary.textContent = 'All Apps';
    appsDetails.append(appsSummary);

    for (let x = 0; x < cleanApps.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = cleanApps[x].name;
        theButton.onmouseover = function()
        {
            // hoverSound();
        };
        theButton.oncontextmenu = function()
        {
            //clickSound();
            window.open(apps[x].codeURL);
        };
        theButton.onclick = function()
        {
            //clickSound();
            theFrame.src = apps[x].appURL;
        };
        appsDetails.append(theButton);
    }

    //----//

    let textApps = cleanApps.filter(function(item)
    {
        return item.category === "text";
    });

    let textAppsDetails = ce('details');
    textAppsDetails.onmouseover = function()
    {
        hoverSound();
    };
    textAppsDetails.onclick = function()
    {
        clickSound();
    };
    buttonContainer.append(textAppsDetails);

    //-//

    let textAppsSummary = ce('summary');
    textAppsSummary.textContent = 'Text Apps';
    textAppsDetails.append(textAppsSummary);

    for (let x = 0; x < textApps.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = textApps[x].name;
        theButton.onmouseover = function()
        {
            // hoverSound();
        };
        theButton.oncontextmenu = function()
        {
            //clickSound();
            window.open(textApps[x].codeURL);
        };
        theButton.onclick = function()
        {
            //clickSound();
            theFrame.src = textApps[x].appURL;
        };
        textAppsDetails.append(theButton);
    }

    //----//

    let trueAIApps = cleanApps.filter(function(item)
    {
        return item.category === "true_ai";
    });

    let trueAIAppsDetails = ce('details');
    trueAIAppsDetails.onmouseover = function()
    {
        hoverSound();
    };
    trueAIAppsDetails.onclick = function()
    {
        clickSound();
    };
    buttonContainer.append(trueAIAppsDetails);

    //-//

    let trueAIAppsSummary = ce('summary');
    trueAIAppsSummary.textContent = 'True AI Apps';
    trueAIAppsDetails.append(trueAIAppsSummary);

    for (let x = 0; x < trueAIApps.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = trueAIApps[x].name;
        theButton.onmouseover = function()
        {
            // hoverSound();
        };
        theButton.oncontextmenu = function()
        {
            //clickSound();
            window.open(trueAIApps[x].codeURL);
        };
        theButton.onclick = function()
        {
            //clickSound();
            theFrame.src = trueAIApps[x].appURL;
        };
        trueAIAppsDetails.append(theButton);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

