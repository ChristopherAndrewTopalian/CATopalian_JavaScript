// openCodeInWindow.js

function openCodeInWindow(whichId)
{
    // Use textContent to grab pure, raw code without the old <span> tags
    let divContent = document.getElementById(whichId).textContent;
    
    // Open a new blank window
    let newWindow = window.open('', '_blank');

    // Build the HTML string using classical concatenation
    let htmlString = "<!DOCTYPE html>\n";
    htmlString += "<html>\n";
    htmlString += "<head>\n";
    htmlString += "<title> Code View </title>\n";
    
    // Link the stylesheet so the browser knows what the colors look like
    htmlString += "<link rel='stylesheet' href='../../css/style001.css'>\n";
    
    htmlString += "<style>\n";
    htmlString += "body { background-color: rgb(30, 30, 30); color: white; font-weight: bold;}\n";
    htmlString += "</style>\n";

    // We escape the forward slash in the closing script tag so it doesn't break the parser
    htmlString += "<script src='../../js/colorer/catopalian_javascript_universal_code_colorer.js'><\/script>\n";

    htmlString += "</head>\n";

    // We trigger your colorer function immediately when the new window loads
    htmlString += "<body onload='applyCustomHighlighting();'>\n";
    htmlString += "<pre><code class='custom-code' data-language='js'>" + divContent + "</code></pre>\n";
    htmlString += "</body>\n";
    htmlString += "</html>";

    // Write the classical string into the new window and close the stream
    newWindow.document.write(htmlString);
    newWindow.document.close();
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2026
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

