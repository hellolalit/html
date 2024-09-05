"use strict";

alert("This Website is not mobile/tablet/Large Screen Ready. Please use it on Laptop/Dekstop for best experience !");

function redirect() {
    let selectElement = document.getElementById("chapter");
    let selectValue = selectElement.value;
    if (
        selectValue !== "Select Chapter" &&
        selectValue !== "select chapter"
    ) {
        let chapterName = selectValue.split("-")[1];
        let path = selectValue + "/" + chapterName + ".html";
        window.location.href = path;
    } else {
        alert("Please select a chapter.");
    }
}

function featureComingSoon() {
    alert("This feature is coming soon!");
}