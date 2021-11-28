window.onscroll = function() {
    scrollFunction()
        // returnTop()
};
//Fixed menu appears
function scrollFunction() {
    if (document.body.scrollTop > 186 || document.documentElement.scrollTop > 186) {
        document.getElementById("slide-down-bar").style.top = "0";
    } else {
        document.getElementById("slide-down-bar").style.top = "-100px";
    }
}