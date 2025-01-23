(function(){
    let hide_nint = getCookie("hide_nint");
    if (hide_nint == "true") {
        document.querySelector(".hint_bar").style.display = "none";
    }
})()

function hide_nint() {
    document.querySelector(".hint_bar").style.display = "none";
    setCookie("hide_nint", "true", 3);
}