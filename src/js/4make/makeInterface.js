// makeInterface.js

function makeInterface(whichArray, whichEntry)
{
    ba(makeTitleOfApp());

    //-//

    let mainDiv = ce('div');
    mainDiv.id = 'mainDiv';
    mainDiv.style.display = 'flex';
    mainDiv.style.flexDirection = 'row';
    ba(mainDiv);

    //-//

    let buttonContainer = ce('div');
    buttonContainer.style.display = 'flex';
    buttonContainer.style.flexDirection = 'column';
    buttonContainer.style.zIndex = 2;
    buttonContainer.style.width = '120px';
    buttonContainer.style.height = '320px';
    buttonContainer.style.overflow = 'scroll';
    buttonContainer.style.whiteSpace = 'nowrap';
    buttonContainer.style.gap = '1px';
    buttonContainer.style.fontSize = '15px';
    buttonContainer.style.resize = 'both';
    mainDiv.append(buttonContainer);

    //-//

    let theFrame = ce("iframe");
    theFrame.src = whichArray[whichEntry].urlOffline;
    theFrame.id = "thePdfId";
    theFrame.style.width = '620px';
    theFrame.style.height = '315px';
    theFrame.style.overflowX = 'scroll';
    mainDiv.append(theFrame);

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

    let objectFlatDetails = ce('details');
    objectFlatDetails.onmouseover = function()
    {
        hoverSound();
    };
    objectFlatDetails.onclick = function()
    {
        clickSound();
    };
    buttonContainer.append(objectFlatDetails);

    //-//

    let objectFlatSummary = ce('summary');
    objectFlatSummary.textContent = 'Object Flat';
    objectFlatDetails.append(objectFlatSummary);

    for (let x = 0; x < object_flat.length; x++)
    {
        if (object_flat[x].category == 'object')
        {
            let theButton = ce("button");
            theButton.textContent = object_flat[x].name;
            theButton.onmouseover = function()
            {
                // hoverSound();
            };
            theButton.onclick = function()
            {
                //clickSound();
                theFrame.src = object_flat[x].urlOffline;
            };
            objectFlatDetails.append(theButton);
        }
    }

    //----//

    let objectOfObjectsDetails = ce('details');
    objectOfObjectsDetails.onmouseover = function()
    {
        hoverSound();
    };
    objectOfObjectsDetails.onclick = function()
    {
        clickSound();
    };
    buttonContainer.append(objectOfObjectsDetails);

    //-//

    let objectOfObjectsSummary = ce('summary');
    objectOfObjectsSummary.textContent = 'OoO';
    objectOfObjectsDetails.append(objectOfObjectsSummary);

    for (let x = 0; x < object_of_objects.length; x++)
    {
        if (object_of_objects[x].category == 'object')
        {
            let theButton = ce("button");
            theButton.textContent = object_of_objects[x].name;
            theButton.onmouseover = function()
            {
                // hoverSound();
            };
            theButton.oncontextmenu = function()
            {
                window.open(object_of_objects[x].urlOffline);
            };
            theButton.onclick = function()
            {
                //clickSound();
                theFrame.src = object_of_objects[x].urlOffline;
            };
            objectOfObjectsDetails.append(theButton);
        }
    }

    //----//

    let objectOfObjectsDODDetails = ce('details');
    objectOfObjectsDODDetails.onmouseover = function()
    {
        hoverSound();
    };
    objectOfObjectsDODDetails.onclick = function()
    {
        clickSound();
    };
    buttonContainer.append(objectOfObjectsDODDetails);

    //-//

    let objectOfObjectsDODSummary = ce('summary');
    objectOfObjectsDODSummary.textContent = 'DOD';
    objectOfObjectsDODDetails.append(objectOfObjectsDODSummary);

    for (let x = 0; x < data_oriented_design.length; x++)
    {
        if (data_oriented_design[x].category == 'object_of_objects')
        {
            let theButton = ce("button");
            theButton.textContent = data_oriented_design[x].name;
            theButton.onmouseover = function()
            {
                // hoverSound();
            };
            theButton.oncontextmenu = function()
            {
                window.open(data_oriented_design[x].urlOffline);
            };
            theButton.onclick = function()
            {
                //clickSound();
                theFrame.src = data_oriented_design[x].urlOffline;
            };
            objectOfObjectsDODDetails.append(theButton);
        }
    }

    //----//

    let stringDetails = ce('details');
    stringDetails.onmouseover = function()
    {
        hoverSound();
    };
    stringDetails.onclick = function()
    {
        clickSound();
    };
    buttonContainer.append(stringDetails);

    //-//

    let stringSummary = ce('summary');
    stringSummary.textContent = 'String';
    stringDetails.append(stringSummary);

    for (let x = 0; x < whichArray.length; x++)
    {
        if (whichArray[x].category == 'string')
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
            stringDetails.append(theButton);
        }
    }

    //----//

    let mathDetails = ce('details');
    mathDetails.onmouseover = function()
    {
        hoverSound();
    };
    mathDetails.onclick = function()
    {
        clickSound();
    };
    buttonContainer.append(mathDetails);

    //-//

    let mathSummary = ce('summary');
    mathSummary.textContent = 'Math';
    mathDetails.append(mathSummary);

    for (let x = 0; x < whichArray.length; x++)
    {
        if (whichArray[x].category == 'math')
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
            mathDetails.append(theButton);
        }
    }

    //----//

    buttonContainer.append(ce('hr'));

    //-//

    //let appsTitle = ce('div');
    //appsTitle.textContent = 'Apps';
    //buttonContainer.append(appsTitle);

    //-//

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

    //-//

    let appsMainDetails = ce('details');
    appsMainDetails.onmouseover = function()
    {
        hoverSound();
    };
    appsMainDetails.onclick = function()
    {
        clickSound();
    };
    buttonContainer.append(appsMainDetails);

    //-//

    let appsMainSummary = ce('summary');
    appsMainSummary.textContent = 'Apps';
    appsMainSummary.style.fontWeight = 'bold';
    appsMainSummary.style.color = 'rgb(100, 255, 255)';
    appsMainDetails.append(appsMainSummary);

    //-//

    let appsDetails = ce('details');
    appsDetails.onmouseover = function()
    {
        hoverSound();
    };
    appsDetails.onclick = function()
    {
        clickSound();
    };
    appsMainDetails.append(appsDetails);

    //-//

    let appsSummary = ce('summary');
    appsSummary.textContent = 'All';
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
    appsMainDetails.append(textAppsDetails);

    //-//

    let textAppsSummary = ce('summary');
    textAppsSummary.textContent = 'Text';
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
    appsMainDetails.append(trueAIAppsDetails);

    //-//

    let trueAIAppsSummary = ce('summary');
    trueAIAppsSummary.textContent = 'True AI';
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

    //----//

    let videoApps = cleanApps.filter(function(item)
    {
        return item.category === "video";
    });

    let videoAppsDetails = ce('details');
    videoAppsDetails.onmouseover = function()
    {
        hoverSound();
    };
    videoAppsDetails.onclick = function()
    {
        clickSound();
    };
    appsMainDetails.append(videoAppsDetails);

    //-//

    let videoAppsSummary = ce('summary');
    videoAppsSummary.textContent = 'Video';
    videoAppsDetails.append(videoAppsSummary);

    for (let x = 0; x < videoApps.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = videoApps[x].name;
        theButton.onmouseover = function()
        {
            // hoverSound();
        };
        theButton.oncontextmenu = function()
        {
            //clickSound();
            window.open(videoApps[x].codeURL);
        };
        theButton.onclick = function()
        {
            //clickSound();
            theFrame.src = videoApps[x].appURL;
        };
        videoAppsDetails.append(theButton);
    }

    //----//

    let editorApps = cleanApps.filter(function(item)
    {
        return item.category === "editor";
    });

    let editorAppsDetails = ce('details');
    editorAppsDetails.onmouseover = function()
    {
        hoverSound();
    };
    editorAppsDetails.onclick = function()
    {
        clickSound();
    };
    appsMainDetails.append(editorAppsDetails);

    //-//

    let editorAppsSummary = ce('summary');
    editorAppsSummary.textContent = 'Editors';
    editorAppsDetails.append(editorAppsSummary);

    for (let x = 0; x < editorApps.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = editorApps[x].name;
        theButton.onmouseover = function()
        {
            // hoverSound();
        };
        theButton.oncontextmenu = function()
        {
            //clickSound();
            window.open(editorApps[x].codeURL);
        };
        theButton.onclick = function()
        {
            //clickSound();
            theFrame.src = editorApps[x].appURL;
        };
        editorAppsDetails.append(theButton);
    }

    //----//

    let timeDateApps = cleanApps.filter(function(item)
    {
        return item.category === "time_date";
    });

    let timeDateAppsDetails = ce('details');
    timeDateAppsDetails.onmouseover = function()
    {
        hoverSound();
    };
    timeDateAppsDetails.onclick = function()
    {
        clickSound();
    };
    appsMainDetails.append(timeDateAppsDetails);

    //-//

    let timeDateAppsSummary = ce('summary');
    timeDateAppsSummary.textContent = 'Time/Date';
    timeDateAppsDetails.append(timeDateAppsSummary);

    for (let x = 0; x < timeDateApps.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = timeDateApps[x].name;
        theButton.onmouseover = function()
        {
            // hoverSound();
        };
        theButton.oncontextmenu = function()
        {
            //clickSound();
            window.open(timeDateApps[x].codeURL);
        };
        theButton.onclick = function()
        {
            //clickSound();
            theFrame.src = timeDateApps[x].appURL;
        };
        timeDateAppsDetails.append(theButton);
    }

    //----//

    let game2DApps = cleanApps.filter(function(item)
    {
        return item.category === "game_2d";
    });

    let game2DAppsDetails = ce('details');
    game2DAppsDetails.onmouseover = function()
    {
        hoverSound();
    };
    game2DAppsDetails.onclick = function()
    {
        clickSound();
    };
    appsMainDetails.append(game2DAppsDetails);

    //-//

    let game2DAppsSummary = ce('summary');
    game2DAppsSummary.textContent = 'Game 2D';
    game2DAppsDetails.append(game2DAppsSummary);

    for (let x = 0; x < game2DApps.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = game2DApps[x].name;
        theButton.onmouseover = function()
        {
            // hoverSound();
        };
        theButton.oncontextmenu = function()
        {
            //clickSound();
            window.open(game2DApps[x].codeURL);
        };
        theButton.onclick = function()
        {
            //clickSound();
            theFrame.src = game2DApps[x].appURL;
        };
        game2DAppsDetails.append(theButton);
    }

    //----//

    let game3DApps = cleanApps.filter(function(item)
    {
        return item.category === "game_3d";
    });

    let game3DAppsDetails = ce('details');
    game3DAppsDetails.onmouseover = function()
    {
        hoverSound();
    };
    game3DAppsDetails.onclick = function()
    {
        clickSound();
    };
    appsMainDetails.append(game3DAppsDetails);

    //-//

    let game3DAppsSummary = ce('summary');
    game3DAppsSummary.textContent = 'Game 3D';
    game3DAppsDetails.append(game3DAppsSummary);

    for (let x = 0; x < game3DApps.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = game3DApps[x].name;
        theButton.onmouseover = function()
        {
            // hoverSound();
        };
        theButton.oncontextmenu = function()
        {
            //clickSound();
            window.open(game3DApps[x].codeURL);
        };
        theButton.onclick = function()
        {
            //clickSound();
            theFrame.src = game3DApps[x].appURL;
        };
        game3DAppsDetails.append(theButton);
    }

    //----//

    let musicApps = cleanApps.filter(function(item)
    {
        return item.category === "music";
    });

    let musicAppsDetails = ce('details');
    musicAppsDetails.onmouseover = function()
    {
        hoverSound();
    };
    musicAppsDetails.onclick = function()
    {
        clickSound();
    };
    appsMainDetails.append(musicAppsDetails);

    //-//

    let musicAppsSummary = ce('summary');
    musicAppsSummary.textContent = 'Music';
    musicAppsDetails.append(musicAppsSummary);

    for (let x = 0; x < musicApps.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = musicApps[x].name;
        theButton.onmouseover = function()
        {
            // hoverSound();
        };
        theButton.oncontextmenu = function()
        {
            //clickSound();
            window.open(musicApps[x].codeURL);
        };
        theButton.onclick = function()
        {
            //clickSound();
            theFrame.src = musicApps[x].appURL;
        };
        musicAppsDetails.append(theButton);
    }

    //----//

    let scienceApps = cleanApps.filter(function(item)
    {
        return item.category === "science";
    });

    let scienceAppsDetails = ce('details');
    scienceAppsDetails.onmouseover = function()
    {
        hoverSound();
    };
    scienceAppsDetails.onclick = function()
    {
        clickSound();
    };
    appsMainDetails.append(scienceAppsDetails);

    //-//

    let scienceAppsSummary = ce('summary');
    scienceAppsSummary.textContent = 'Science';
    scienceAppsDetails.append(scienceAppsSummary);

    for (let x = 0; x < scienceApps.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = scienceApps[x].name;
        theButton.onmouseover = function()
        {
            // hoverSound();
        };
        theButton.oncontextmenu = function()
        {
            //clickSound();
            window.open(scienceApps[x].codeURL);
        };
        theButton.onclick = function()
        {
            //clickSound();
            theFrame.src = scienceApps[x].appURL;
        };
        scienceAppsDetails.append(theButton);
    }

    //----//

    let fileNavApps = cleanApps.filter(function(item)
    {
        return item.category === "file_navigation";
    });

    let fileNavAppsDetails = ce('details');
    fileNavAppsDetails.onmouseover = function()
    {
        hoverSound();
    };
    fileNavAppsDetails.onclick = function()
    {
        clickSound();
    };
    appsMainDetails.append(fileNavAppsDetails);

    //-//

    let fileNavAppsSummary = ce('summary');
    fileNavAppsSummary.textContent = 'File Nav';
    fileNavAppsDetails.append(fileNavAppsSummary);

    for (let x = 0; x < fileNavApps.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = fileNavApps[x].name;
        theButton.onmouseover = function()
        {
            // hoverSound();
        };
        theButton.oncontextmenu = function()
        {
            //clickSound();
            window.open(fileNavApps[x].codeURL);
        };
        theButton.onclick = function()
        {
            //clickSound();
            theFrame.src = fileNavApps[x].appURL;
        };
        fileNavAppsDetails.append(theButton);
    }

    //----//

    let earthApps = cleanApps.filter(function(item)
    {
        return item.category === "earth";
    });

    let earthAppsDetails = ce('details');
    earthAppsDetails.onmouseover = function()
    {
        hoverSound();
    };
    earthAppsDetails.onclick = function()
    {
        clickSound();
    };
    appsMainDetails.append(earthAppsDetails);

    //-//

    let earthAppsSummary = ce('summary');
    earthAppsSummary.textContent = 'Earth';
    earthAppsDetails.append(earthAppsSummary);

    for (let x = 0; x < earthApps.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = earthApps[x].name;
        theButton.onmouseover = function()
        {
            // hoverSound();
        };
        theButton.oncontextmenu = function()
        {
            //clickSound();
            window.open(earthApps[x].codeURL);
        };
        theButton.onclick = function()
        {
            //clickSound();
            theFrame.src = earthApps[x].appURL;
        };
        earthAppsDetails.append(theButton);
    }

    //----//

    let mobileApps = cleanApps.filter(function(item)
    {
        return item.category === "mobile";
    });

    let mobileAppsDetails = ce('details');
    mobileAppsDetails.onmouseover = function()
    {
        hoverSound();
    };
    mobileAppsDetails.onclick = function()
    {
        clickSound();
    };
    appsMainDetails.append(mobileAppsDetails);

    //-//

    let mobileAppsSummary = ce('summary');
    mobileAppsSummary.textContent = 'Mobile';
    mobileAppsDetails.append(mobileAppsSummary);

    for (let x = 0; x < mobileApps.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = mobileApps[x].name;
        theButton.onmouseover = function()
        {
            // hoverSound();
        };
        theButton.oncontextmenu = function()
        {
            //clickSound();
            window.open(mobileApps[x].codeURL);
        };
        theButton.onclick = function()
        {
            //clickSound();
            theFrame.src = mobileApps[x].appURL;
        };
        mobileAppsDetails.append(theButton);
    }

    //----//

    let interfaceApps = cleanApps.filter(function(item)
    {
        return item.category === "interface";
    });

    let interfaceAppsDetails = ce('details');
    interfaceAppsDetails.onmouseover = function()
    {
        hoverSound();
    };
    interfaceAppsDetails.onclick = function()
    {
        clickSound();
    };
    appsMainDetails.append(interfaceAppsDetails);

    //-//

    let interfaceAppsSummary = ce('summary');
    interfaceAppsSummary.textContent = 'Interface';
    interfaceAppsDetails.append(interfaceAppsSummary);

    for (let x = 0; x < interfaceApps.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = interfaceApps[x].name;
        theButton.onmouseover = function()
        {
            // hoverSound();
        };
        theButton.oncontextmenu = function()
        {
            //clickSound();
            window.open(interfaceApps[x].codeURL);
        };
        theButton.onclick = function()
        {
            //clickSound();
            theFrame.src = interfaceApps[x].appURL;
        };
        interfaceAppsDetails.append(theButton);
    }

    //----//

    buttonContainer.append(ce('hr'));

    //----//

    let babylonjsAppsDetails = ce('details');
    babylonjsAppsDetails.onmouseover = function()
    {
        hoverSound();
    };
    babylonjsAppsDetails.onclick = function()
    {
        clickSound();
    };
    buttonContainer.append(babylonjsAppsDetails);

    //-//

    let babylonjsAppsSummary = ce('summary');
    babylonjsAppsSummary.textContent = 'BabylonJS';
    babylonjsAppsDetails.append(babylonjsAppsSummary);

    for (let x = 0; x < babylonjs3d.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = babylonjs3d[x].name;
        theButton.onmouseover = function()
        {
            // hoverSound();
        };
        theButton.oncontextmenu = function()
        {
            //clickSound();
            window.open(babylonjs3d[x].codeURL);
        };
        theButton.onclick = function()
        {
            //clickSound();
            theFrame.src = babylonjs3d[x].appURL;
        };
        babylonjsAppsDetails.append(theButton);
    }

    //----//

    let aooFilter = operators.filter(function(item)
    {
        return item.category === "aoo_filter";
    });

    let aooFilterDetails = ce('details');
    aooFilterDetails.onmouseover = function()
    {
        hoverSound();
    };
    aooFilterDetails.onclick = function()
    {
        clickSound();
    };
    buttonContainer.append(aooFilterDetails);

    //-//

    let aooFilterSummary = ce('summary');
    aooFilterSummary.textContent = 'AOO Filter';
    aooFilterDetails.append(aooFilterSummary);

    for (let x = 0; x < aooFilter.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = aooFilter[x].name;
        theButton.onmouseover = function()
        {
            // hoverSound();
        };
        theButton.oncontextmenu = function()
        {
            //clickSound();
            //window.open(aooFilter[x].codeURL);
        };
        theButton.onclick = function()
        {
            //clickSound();
            theFrame.src = aooFilter[x].urlOffline;
        };
        aooFilterDetails.append(theButton);
    }

    //----//

    let trueAIContainerDetails = ce('details');
    trueAIContainerDetails.onmouseover = function()
    {
        hoverSound();
    };
    trueAIContainerDetails.onclick = function()
    {
        clickSound();
    };
    buttonContainer.append(trueAIContainerDetails);

    //-//

    let trueAIContainerSummary = ce('summary');
    trueAIContainerSummary.textContent = 'True AI';
    trueAIContainerSummary.style.color = 'rgb(0, 255, 255)';
    trueAIContainerSummary.style.fontWeight = 'bold';
    trueAIContainerDetails.append(trueAIContainerSummary);

    //----------//

    let trueAIFoundationDetails = ce('details');
    trueAIFoundationDetails.onmouseover = function()
    {
        hoverSound();
    };
    trueAIFoundationDetails.onclick = function()
    {
        clickSound();
    };
    trueAIContainerDetails.append(trueAIFoundationDetails);

    //-//

    let trueAIFoundationSummary = ce('summary');
    trueAIFoundationSummary.textContent = 'Foundation';
    trueAIFoundationDetails.append(trueAIFoundationSummary);

    for (let x = 0; x < true_ai_foundation.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = true_ai_foundation[x].name;
        theButton.onmouseover = function()
        {
            // hoverSound();
        };
        theButton.oncontextmenu = function()
        {
            //clickSound();
            //window.open(true_ai_foundation[x].codeURL);
        };
        theButton.onclick = function()
        {
            //clickSound();
            theFrame.src = true_ai_foundation[x].urlOffline;
        };
        trueAIFoundationDetails.append(theButton);
    }

    //----//

    let trueAIKingdomDetails = ce('details');
    trueAIKingdomDetails.onmouseover = function()
    {
        hoverSound();
    };
    trueAIKingdomDetails.onclick = function()
    {
        clickSound();
    };
    trueAIContainerDetails.append(trueAIKingdomDetails);

    //-//

    let trueAIKingdomSummary = ce('summary');
    trueAIKingdomSummary.textContent = 'Kingdom';
    trueAIKingdomDetails.append(trueAIKingdomSummary);

    for (let x = 0; x < true_ai_kingdom.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = true_ai_kingdom[x].name;
        theButton.onmouseover = function()
        {
            // hoverSound();
        };
        theButton.oncontextmenu = function()
        {
            //clickSound();
            //window.open(true_ai_kingdom[x].codeURL);
        };
        theButton.onclick = function()
        {
            //clickSound();
            theFrame.src = true_ai_kingdom[x].urlOffline;
        };
        trueAIKingdomDetails.append(theButton);
    }

    //----//

    let trueAIStarfleetEthosDetails = ce('details');
    trueAIStarfleetEthosDetails.onmouseover = function()
    {
        hoverSound();
    };
    trueAIStarfleetEthosDetails.onclick = function()
    {
        clickSound();
    };
    trueAIContainerDetails.append(trueAIStarfleetEthosDetails);

    //-//

    let trueAIStarfleetEthosSummary = ce('summary');
    trueAIStarfleetEthosSummary.textContent = 'Starfleet Ethos';
    trueAIStarfleetEthosDetails.append(trueAIStarfleetEthosSummary);

    for (let x = 0; x < true_ai_starfleet_academy_ethos.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = true_ai_starfleet_academy_ethos[x].name;
        theButton.onmouseover = function()
        {
            // hoverSound();
        };
        theButton.oncontextmenu = function()
        {
            //clickSound();
            //window.open(true_ai_starfleet_academy_ethos[x].codeURL);
        };
        theButton.onclick = function()
        {
            //clickSound();
            theFrame.src = true_ai_starfleet_academy_ethos[x].urlOffline;
        };
        trueAIStarfleetEthosDetails.append(theButton);
    }

    //----//

    let lifeCreationEngineFilter = operators.filter(function(item)
    {
        return item.category === "life_creation_engine";
    });

    let lifeCreationEngineFilterDetails = ce('details');
    lifeCreationEngineFilterDetails.onmouseover = function()
    {
        hoverSound();
    };
    lifeCreationEngineFilterDetails.onclick = function()
    {
        clickSound();
    };
    buttonContainer.append(lifeCreationEngineFilterDetails);

    //-//

    let lifeCreationEngineFilterSummary = ce('summary');
    lifeCreationEngineFilterSummary.textContent = 'Life Engine';
    lifeCreationEngineFilterDetails.append(lifeCreationEngineFilterSummary);

    for (let x = 0; x < lifeCreationEngineFilter.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = lifeCreationEngineFilter[x].name;
        theButton.onmouseover = function()
        {
            // hoverSound();
        };
        theButton.oncontextmenu = function()
        {
            //clickSound();
            //window.open(lifeCreationEngineFilter[x].codeURL);
        };
        theButton.onclick = function()
        {
            //clickSound();
            theFrame.src = lifeCreationEngineFilter[x].urlOffline;
        };
        lifeCreationEngineFilterDetails.append(theButton);
    }

    //----//

    let lifeSciencesDetails = ce('details');
    lifeSciencesDetails.onmouseover = function()
    {
        hoverSound();
    };
    lifeSciencesDetails.onclick = function()
    {
        clickSound();
    };
    buttonContainer.append(lifeSciencesDetails);

    //-//

    let lifeSciencesSummary = ce('summary');
    lifeSciencesSummary.textContent = 'Life Sciences';
    lifeSciencesDetails.append(lifeSciencesSummary);

    for (let x = 0; x < lifeSciences.length; x++)
    {
        let theButton = ce("button");
        theButton.textContent = lifeSciences[x].name;
        theButton.onmouseover = function()
        {
            // hoverSound();
        };
        theButton.oncontextmenu = function()
        {
            //clickSound();
            //window.open(lifeSciences[x].codeURL);
        };
        theButton.onclick = function()
        {
            //clickSound();
            theFrame.src = lifeSciences[x].urlOffline;
        };
        lifeSciencesDetails.append(theButton);
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

