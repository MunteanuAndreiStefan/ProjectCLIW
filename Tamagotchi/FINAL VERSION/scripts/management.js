function initializeManagement() {
    var n = 20;
    var d = document.getElementById("managementWrapper");
    var div = document.createElement("div");
    div.className = "tamagotchiItem";
    var image = document.createElement("img");
    image.src = "pictures/add.svg";
    div.style.backgroundColor = "beige";
    div.appendChild(image);
    div.addEventListener('click', () => router.changePage('view/edit', initialize));
    d.appendChild(div);
    for (var i = 1; i <= n; i++) {
        var div = document.createElement("div");
        div.className = "tamagotchiItem";
        d.appendChild(div);
    }
}