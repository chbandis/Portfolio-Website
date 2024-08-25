var FullUserLang = navigator.language || navigator.userLanguage;
var userLang = FullUserLang.slice(0, 2);

var manuallySetLanguage = getCookie("user_language_preference");

var langPicker = document.querySelector(".lan");

if (!manuallySetLanguage) {
    if(userLang === "en"){
        setCookie("user_language_preference", "en", 30); // 30 days expiry
        window.location.replace("/en/index.html");
    }
}

langPicker.addEventListener("click", function() {
    if (!manuallySetLanguage) {
        setCookie("user_language_preference", "en", 30); // 30 days expiry
        window.location.replace("/en/index.html");
    } else if (manuallySetLanguage === "en") {
        setCookie("user_language_preference", "el", 30); // 30 days expiry
        window.location.replace("../index.html");
    } else if(manuallySetLanguage === "el") {
        setCookie("user_language_preference", "en", 30); // 30 days expiry
        window.location.replace("/en/index.html");
    }
}) 

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}
    
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
