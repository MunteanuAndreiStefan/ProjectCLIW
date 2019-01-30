var elements;

function processList(array) {
    elements = array.filter(element => element.face !== undefined);
    n = elements.length;
    var d = document.getElementById("managementWrapper");
    var p = d.parentNode;
    p.removeChild(d);
    var d = document.createElement("div");
    d.id = "managementWrapper";
    p.appendChild(d);
    var div = document.createElement("div");
    div.className = "tamagotchiItem";
    var image = document.createElement("img");
    image.src = "pictures/add.svg";
    div.style.backgroundColor = "beige";
    div.appendChild(image);
    div.addEventListener('click', () => router.changePage('view/edit', initializeAdd));
    d.appendChild(div);
    for (let i = 0; i < n; i++) {
        var div = document.createElement("div");
        div.id = "div" + i;
        div.className = "tamagotchiItem";
        d.appendChild(div);
        var a = new engine("div" + i, div.clientWidth, div.clientHeight);
        SVGDraw(elements[i], a);
        var b = document.createElement("button");
        b.textContent = "View";
        b.className = "view";
        var b1 = document.createElement("button");
        b1.textContent = "Edit";
        b1.className = "edit";
        div.appendChild(b);
        div.appendChild(b1);
        b.addEventListener('click', () => router.changePage('view/edit', initializeView(i)));
        b1.addEventListener('click', () => router.changePage('view/edit', initializeEdit(i)));
    }
}

function initializeManagement() {
    dao.getAllMyTamagotchi(processList);
}