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
if (getCookie("theme") == 'pink') {
    document.body.style.background = "#f2b8e6"
    document.body.style.color = "#fa4848"
}
if (getCookie("theme") == 'blue'){
    document.body.style.background = "#b8e6f2"
    document.body.style.color = "#4848fa"
}
if (getCookie("theme") == 'red'){
    document.body.style.background = "#edabdf"
    document.body.style.color = "#f55858"
}
// Just realised that this is 100% useless
//if (getCookie("theme") == "def") { 
	//document.body.style.background = "black"
	
//}