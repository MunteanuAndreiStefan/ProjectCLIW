    window.addEventListener("load", function() {
    var load_screen = document.getElementById("page_loader");
    document.body.removeChild(load_screen);
            
    document.getElementsByClassName("main-container")[0].style.display = "block";
    document.getElementsByClassName("main-container")[1].style.display = "block";
    document.getElementsByClassName("header-container")[0].style.display = "block";
});