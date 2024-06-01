function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for(var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}
if (getCookie("theme") == 'black') {
	document.body.style.background = "black";
	document.body.style.color = 'white'
}
if (getCookie("theme") == 'white') {
	document.body.style.background = "white"
	document.body.style.color = "black"
}