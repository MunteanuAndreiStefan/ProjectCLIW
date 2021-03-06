var elements;

function processList(array) {
    var paragraph = document.getElementById("myID");
    paragraph.textContent = dao.getMyUserID();
    var d = document.getElementById("managementWrapper");
    var div = document.createElement("div");
    div.className = "tamagotchiItem";
    var image = document.createElement("img");
    image.src = "pictures/add.svg";
    div.style.backgroundColor = "beige";
    div.appendChild(image);
    div.addEventListener('click', () => router.changePage('view/edit', initializeAdd));
    d.appendChild(div);
    if (array !== undefined) {
        elements = array.filter(element => element.face !== undefined);
        n = elements.length;
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
            div.appendChild(b);
            var b1 = document.createElement("button");
            b1.textContent = "Edit";
            b1.className = "edit";
            div.appendChild(b1);
            var b2 = document.createElement("button");
            b2.textContent = "Share";
            b2.className = "share";
            div.appendChild(b2);
            b3 = document.createElement("button");
            b3.textContent = "Delete";
            b3.className = "delete";
            div.appendChild(b3);
            b.addEventListener('click', () => router.changePage('view/edit', function() { initializeView(elements[i]); }));
            b1.addEventListener('click', () => router.changePage('view/edit', function() { initializeEdit(elements[i]) }));
            b2.addEventListener('click', () => share(elements[i]));
            b3.addEventListener('click', () => erase(elements[i]));
        }
    }
}

function erase(tamagotchi) {
    dao.deleteTamagotchi(tamagotchi, null);
    router.changePage("management", initializeManagement);
}

function share(tamagotchi) {
    var user = prompt("You gift this tamagotchi to..");
    dao.shareTamagotchi(tamagotchi, user, null);
}

function initializeManagement() {
    var d = document.getElementById("managementWrapper");
    var p = d.parentNode;
    p.removeChild(d);
    var d = document.createElement("div");
    d.id = "managementWrapper";
    p.appendChild(d);
    var paragraph = document.getElementById("myID");
    paragraph.textContent = "";
    dao.getAllMyTamagotchi(processList);
}