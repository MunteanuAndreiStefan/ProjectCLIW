/* Instances of class List will be used for iterating through the possible values of the options*/
class List {
    constructor(items) {
        this.items = items;
        this.index = 0;
    }
    nextElementIndex() {
        this.index = (this.index + 1) % this.items.length;
    }
    previousElementIndex() {
        var size = this.items.length;
        this.index = (this.index + size - 1) % size;
    }
    getCurrentItem() {
        return this.items[this.index];
    }
    setCurrentItem(name) {
        var n = this.items.length;
        for (var i = 0; i < n; i++)
            if (this.items[i] == name)
                this.index = i;
        return this.getCurrentItem();
    }
    reset() {
        this.index = 0;
    }
}

/*Instances of class Point will be used at drawing the tamagotchi*/
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}

var character = {};
var a;
var face;
var rightEye;
var leftEye;
var rightHand;
var rightLeg;
var leftHand;
var leftLeg;
var mouth;
var torso;
var eventCheck = false;
/*Function for changing the eyes of the tamagotchi*/
function changingEyes() {
    var w = a.width;
    var h = a.height;
    var facePoint = new Point(w / 2, h / 3);
    var leftEyePoint = new Point(facePoint.getX() - h / 30, facePoint.getY() - h / 30);
    var rightEyePoint = new Point(facePoint.getX() + h / 30, facePoint.getY() - h / 30);
    var value = eyesList.getCurrentItem();
    switch (value) {
        case "rectangular":
            rightEye = a.rect(rightEyePoint.getX() - h / 70, rightEyePoint.getY() - h / 70, h / 35, h / 35, "right-eye");
            leftEye = a.rect(leftEyePoint.getX() - h / 70, rightEyePoint.getY() - h / 70, h / 35, h / 35, "left-eye");
            break;
        case "round":
            rightEye = a.circle(rightEyePoint.getX(), rightEyePoint.getY(), h / 70, "right-eye");
            leftEye = a.circle(leftEyePoint.getX(), leftEyePoint.getY(), h / 70, "left-eye");
            break;
        case "ellipse":
            rightEye = a.ellipse(rightEyePoint.getX(), rightEyePoint.getY(), h / 70, h / 50, "right-eye");
            leftEye = a.ellipse(leftEyePoint.getX(), leftEyePoint.getY(), h / 70, h / 50, "left-eye");
            break;
        case "ellipse2":
            rightEye = a.ellipse(rightEyePoint.getX(), rightEyePoint.getY(), h / 50, h / 70, "right-eye");
            leftEye = a.ellipse(leftEyePoint.getX(), leftEyePoint.getY(), h / 50, h / 70, "left-eye");
            break;

    }
    character['right-eye'] = rightEye[0].outerHTML;
    character['left-eye'] = leftEye[0].outerHTML;
}

/*Function for changing the face shape of the tamagotchi*/
function changingFace() {
    var h = a.height;
    var w = a.width;
    var facePoint = new Point(w / 2, h / 3);
    var faceDimension = h / 10;
    var value = faceList.getCurrentItem();
    switch (value) {
        case "rectangular":
            face = a.rect(facePoint.getX() - faceDimension, facePoint.getY() - faceDimension, faceDimension * 2, faceDimension * 2, "face");
            break;
        case "round":
            face = a.circle(facePoint.getX(), facePoint.getY(), faceDimension, "face");
            break;
        case "ellipse":
            face = a.ellipse(facePoint.getX(), facePoint.getY(), faceDimension * 1.25, faceDimension, "face");
            break;
    }
    face.css("fill", faceColor);
    character['face'] = face[0].outerHTML;
}

/*Function for changing the mouth of the tamagotchi*/
function changingMouth() {
    var w = a.width;
    var h = a.height;
    var facePoint = new Point(w / 2, h / 3);
    var leftEyePoint = new Point(facePoint.getX() - h / 30, facePoint.getY() - h / 30);
    var rightEyePoint = new Point(facePoint.getX() + h / 30, facePoint.getY() - h / 30);
    var value = mouthList.getCurrentItem();
    switch (value) {
        case "happy":
            mouth = a.path([leftEyePoint.getX(), leftEyePoint.getY() + h / 12, facePoint.getX(), rightEyePoint.getY() + h / 10, rightEyePoint.getX(), rightEyePoint.getY() + h / 12], "mouth");
            break;
        case "regular":
            mouth = a.path([leftEyePoint.getX(), leftEyePoint.getY() + h / 12, facePoint.getX(), rightEyePoint.getY() + h / 12, rightEyePoint.getX(), rightEyePoint.getY() + h / 12], "mouth");
            break;
        case "sad":
            mouth = a.path([leftEyePoint.getX(), leftEyePoint.getY() + h / 12, facePoint.getX(), rightEyePoint.getY() + h / 12 - (h / 10 - h / 12), rightEyePoint.getX(), rightEyePoint.getY() + h / 12], "mouth");
            break;
    }
    character['mouth'] = mouth[0].outerHTML;
}

/*Function for changing the accesory of the tamagotchi*/
function changingAccessory() {}

/*Function for changing the costume of the tamagotchi*/
function changingTorso() {
    var w = a.width;
    var h = a.height;
    var facePoint = new Point(w / 2, h / 3);
    var faceDimension = h / 10;
    var torsoValue = torsoList.getCurrentItem();
    var torsoPoint = new Point(facePoint.getX() - h / 28, facePoint.getY() + faceDimension);
    switch (torsoValue) {
        case "rectangular":
            torso = a.rect(torsoPoint.getX(), torsoPoint.getY(), h / 14, h / 5, "torso");
            break;
        case "ellipse":
            torso = a.ellipse(torsoPoint.getX() + h / 28, torsoPoint.getY() + h / 10, h / 28, h / 10, "torso");
            break;
    }
    leftHand = a.path([torsoPoint.getX() - h / 20, torsoPoint.getY() + h / 20, torsoPoint.getX(), torsoPoint.getY()], "left-hand");
    rightHand = a.path([torsoPoint.getX() + h / 14, torsoPoint.getY(), torsoPoint.getX() + h / 14 + h / 20, torsoPoint.getY() + h / 20], "right-hand");
    leftLeg = a.path([torsoPoint.getX() - h / 20, torsoPoint.getY() + h / 20 + h / 5, torsoPoint.getX(), torsoPoint.getY() + h / 5], "left-leg");
    rightLeg = a.path([torsoPoint.getX() + h / 14, torsoPoint.getY() + h / 5, torsoPoint.getX() + h / 14 + h / 20, torsoPoint.getY() + h / 20 + h / 5], "right-leg");
    character['torso'] = torso[0].outerHTML;
}

/*This function is used at drawing the tamagotchi, based on the values selected by the user*/
function draw() {
    var h = a.height;
    var w = a.width;
    var facePoint = new Point(w / 2, h / 3);
    var faceDimension = h / 10;
    var faceValue = faceList.getCurrentItem();
    switch (faceValue) {
        case "rectangular":
            face = a.rect(facePoint.getX() - faceDimension, facePoint.getY() - faceDimension, faceDimension * 2, faceDimension * 2, "face");
            break;
        case "round":
            face = a.circle(facePoint.getX(), facePoint.getY(), faceDimension, "face");
            break;
        case "ellipse":
            face = a.ellipse(facePoint.getX(), facePoint.getY(), faceDimension * 1.25, faceDimension, "face");
            break;
    }
    face.css("fill", faceColor);
    var leftEyePoint = new Point(facePoint.getX() - h / 30, facePoint.getY() - h / 30);
    var rightEyePoint = new Point(facePoint.getX() + h / 30, facePoint.getY() - h / 30);
    var eyesValue = eyesList.getCurrentItem();
    switch (eyesValue) {
        case "rectangular":
            rightEye = a.rect(rightEyePoint.getX() - h / 70, rightEyePoint.getY() - h / 70, h / 35, h / 35, "right-eye");
            leftEye = a.rect(leftEyePoint.getX() - h / 70, rightEyePoint.getY() - h / 70, h / 35, h / 35, "left-eye");
            break;
        case "round":
            rightEye = a.circle(rightEyePoint.getX(), rightEyePoint.getY(), h / 70, "right-eye");
            leftEye = a.circle(leftEyePoint.getX(), leftEyePoint.getY(), h / 70, "left-eye");
            break;
        case "ellipse":
            rightEye = a.ellipse(rightEyePoint.getX(), rightEyePoint.getY(), h / 70, h / 50, "right-eye");
            leftEye = a.ellipse(leftEyePoint.getX(), leftEyePoint.getY(), h / 70, h / 50, "left-eye");
            break;
        case "ellipse2":
            rightEye = a.ellipse(rightEyePoint.getX(), rightEyePoint.getY(), h / 50, h / 70, "right-eye");
            leftEye = a.ellipse(leftEyePoint.getX(), leftEyePoint.getY(), h / 50, h / 70, "left-eye");
            break;
    }
    var mouthValue = mouthList.getCurrentItem();
    switch (mouthValue) {
        case "happy":
            mouth = a.path([leftEyePoint.getX(), leftEyePoint.getY() + h / 12, facePoint.getX(), rightEyePoint.getY() + h / 10, rightEyePoint.getX(), rightEyePoint.getY() + h / 12], "mouth");
            break;
        case "regular":
            mouth = a.path([leftEyePoint.getX(), leftEyePoint.getY() + h / 12, facePoint.getX(), rightEyePoint.getY() + h / 12, rightEyePoint.getX(), rightEyePoint.getY() + h / 12], "mouth");
            break;
        case "sad":
            mouth = a.path([leftEyePoint.getX(), leftEyePoint.getY() + h / 12, facePoint.getX(), rightEyePoint.getY() + h / 12 - (h / 10 - h / 12), rightEyePoint.getX(), rightEyePoint.getY() + h / 12], "mouth");
            break;
    }
    var torsoValue = torsoList.getCurrentItem();
    var torsoPoint = new Point(facePoint.getX() - h / 28, facePoint.getY() + faceDimension);
    switch (torsoValue) {
        case "rectangular":
            torso = a.rect(torsoPoint.getX(), torsoPoint.getY(), h / 14, h / 5, "torso");
            break;
        case "ellipse":
            torso = a.ellipse(torsoPoint.getX() + h / 28, torsoPoint.getY() + h / 10, h / 14, h / 5, "torso");
            break;
    }
    leftHand = a.path([torsoPoint.getX() - h / 20, torsoPoint.getY() + h / 20, torsoPoint.getX(), torsoPoint.getY()], "left-hand");
    rightHand = a.path([torsoPoint.getX() + h / 14, torsoPoint.getY(), torsoPoint.getX() + h / 14 + h / 20, torsoPoint.getY() + h / 20], "right-hand");
    leftLeg = a.path([torsoPoint.getX() - h / 20, torsoPoint.getY() + h / 20 + h / 5, torsoPoint.getX(), torsoPoint.getY() + h / 5], "left-leg");
    rightLeg = a.path([torsoPoint.getX() + h / 14, torsoPoint.getY() + h / 5, torsoPoint.getX() + h / 14 + h / 20, torsoPoint.getY() + h / 20 + h / 5], "right-leg");
    character['face'] = face[0].outerHTML;
    character['right-eye'] = rightEye[0].outerHTML;
    character['left-eye'] = leftEye[0].outerHTML;
    character['mouth'] = mouth[0].outerHTML;
    character['torso'] = torso[0].outerHTML;
    character['right-hand'] = rightHand[0].outerHTML;
    character['left-hand'] = leftHand[0].outerHTML;
    character['right-leg'] = rightLeg[0].outerHTML;
    character['left-leg'] = leftLeg[0].outerHTML;
}
var eyesList = new List(["round", "rectangular", "ellipse", "ellipse2"]);
var mouthList = new List(["happy", "regular", "sad"]);
var faceList = new List(["round", "rectangular", "ellipse"]);
var accessoryList = new List(["default"]);
var torsoList = new List(["rectangular", "ellipse"]);
var divToList = { "eyes-options": eyesList, "face-options": faceList, "mouth-options": mouthList, "accessory-options": accessoryList, "torso-options": torsoList };
var divToFunction = { "eyes-options": changingEyes, "face-options": changingFace, "mouth-options": changingMouth, "accessory-options": changingAccessory, "torso-options": changingTorso };
var faceColor = "blue";

function removeElement(id) {
    var elem = document.getElementById(id);
    return elem.parentNode.removeChild(elem);
}

function initializeView(tamagotchi) {
    var container = document.getElementById("svg-container");
    document.getElementById("options-container").style.display = "none";
    document.getElementById("color-container").style.display = "none";
    document.getElementById("save").style.display = "none";
    document.getElementById("play-container").style.display = "block";
	// add events

	document.getElementById("btnPlay").onclick=function(){
		a.node("face").animateColor("red;blue;red", 10,"2");
		a.node("torso").animateColor("green;yellow;white", 10,"2");
		}
	document.getElementById("btnAmuse").onclick=function(){
		console.log(a.node("left-eye"));
		a.node("left-eye").animateX(a.node("left-eye")[0]["cx"]["baseVal"]['value']+10, 1, "1");
		a.node("right-eye").animateX(a.node("right-eye")[0]["cx"]["baseVal"]['value']+10, 1, "1");
	}
	
	document.getElementById("btnLearn").onclick=function(){
		while(document.getElementById("brakeDance")){
			removeElement("brakeDance");
		}
		
		a.animateText("left-leg", "brakeDance", "Learn", 20, "2");
		a.animateText("right-leg", "brakeDance", "Learn", 20, "2");
		a.animateText("left-hand", "brakeDance", "Learn", 20, "2");
		a.animateText("right-hand", "brakeDance", "Learn", 20, "2");
		}

    if (a) {
        a.destroy();
    }
    a = new engine("svg-container", 724, 447);
    var elements = document.querySelectorAll("#svg-container > svg");
    window.onresize = (e) => {
        if (!window.matchMedia("(max-width: 380px)").matches)
            elements[0].style.transform = "translate(" + (Math.round(container.clientWidth) - 724) / 2 + "px," + (Math.round(container.clientHeight) - 447) / 2 + "px)";
        else
            elements[0].style.transform = "translate(" + (Math.round(container.clientWidth) - 724 - 30) / 2 + "px," + (Math.round(container.clientHeight) - 447 - 10) / 2 + "px)";
    };
    if (!window.matchMedia("(max-width: 380px)").matches)
        elements[0].style.transform = "translate(" + (Math.round(container.clientWidth) - 724) / 2 + "px," + (Math.round(container.clientHeight) - 447) / 2 + "px)";
    else
        elements[0].style.transform = "translate(" + (Math.round(container.clientWidth) - 724 - 30) / 2 + "px," + (Math.round(container.clientHeight) - 447 - 10) / 2 + "px)";

    console.log(tamagotchi);


    console.log(document.getElementById("left-eye"));
}

function initializeEdit(tamagotchi) {
    initialize();
    a = new engine("svg-container");
    }
    eyesList.setCurrentItem(nodeDictionary['eyesItem']);
        character2['right-eye'] = character['right-eye'];
        character2['left-eye'] = character['left-eye'];
        character2['mouth'] = character['mouth'];
        character2['torso'] = character['torso'];
        character2['right-hand'] = character['right-hand'];
        character2['left-hand'] = character['left-hand'];
        character2['right-leg'] = character['right-leg'];
        character2['left-leg'] = character['left-leg'];
        character2['faceColor'] = faceColor;
        dao.updateTamagotchi(JSON.parse(JSON.stringify(character2)), null);
        router.changePage('management', initializeManagement);
    });
}

function initializeAdd() {
    initialize();
    draw();
    var item = document.getElementById("save");
    item.parentNode.removeChild(item);
    var item = document.createElement("div");
    item.id = "save";
    item.className = "button";
    item.textContent = "Save";
    document.getElementById("wrapper").appendChild(item);
    item.addEventListener('click', () => {
        dao.saveNewTamagotchi(JSON.parse(JSON.stringify(character)), null);
        router.changePage('management', initializeManagement);
    });
}

function initialize() {
    var container = document.getElementById("svg-container");
    document.getElementById("options-container").style.display = "block";
    document.getElementById("color-container").style.display = "block";
    document.getElementById("save").style.display = "block";
    document.getElementById("play-container").style.display = "none";
    var divs = document.getElementsByClassName("options");
    var divsSize = divs.length;
    for (var i = 0; i < divsSize; i++) {
        let buttons = divs[i].getElementsByTagName("button");
        let list = divToList[divs[i].id];
        let paragraph = divs[i].getElementsByTagName("p")[0];
        let eventHandler = divToFunction[divs[i].id];
        paragraph.textContent = list.getCurrentItem();
        buttons.item(0).onclick = () => {
            list.previousElementIndex();
            paragraph.textContent = list.getCurrentItem();
            eventHandler();
        }
        buttons.item(1).onclick = () => {
            list.nextElementIndex();
            paragraph.textContent = list.getCurrentItem();
            eventHandler();
        }
    }
    faceList.reset();
    document.getElementById("face-options").getElementsByTagName("p")[0].textContent = faceList.getCurrentItem();
    eyesList.reset();
    document.getElementById("eyes-options").getElementsByTagName("p")[0].textContent = eyesList.getCurrentItem();
    mouthList.reset();
    document.getElementById("mouth-options").getElementsByTagName("p")[0].textContent = mouthList.getCurrentItem();
    torsoList.reset();
    document.getElementById("torso-options").getElementsByTagName("p")[0].textContent = torsoList.getCurrentItem();
    faceColor = "blue";
    character['faceColor'] = "blue";
    /*Computing the color using the hsla parameters*/
    var hslItems = document.getElementsByTagName("input");
    hslItems[0].value = 0;
    hslItems[1].value = 0;
    hslItems[2].value = 0;
    hslItems[3].value = 0;
    var colorRectangle = document.getElementById("color-test");
    for (var i = 0; i < hslItems.length; i++) {
        hslItems[i].onchange = () => {
            colorRectangle.style.background = `hsla(${hslItems[0].value},${hslItems[1].value}%,${hslItems[2].value}%,${hslItems[3].value})`;
        };
    }
    colorRectangle.style.background = "black";
    document.getElementById("apply").onclick = () => {
        faceColor = colorRectangle.style.background;
        face.css("fill", faceColor);
        character['faceColor'] = faceColor;
    };

    window.onresize = (e) => {
        a.destroy();
        a = new engine("svg-container", Math.round(container.clientWidth), Math.round(container.clientHeight));
        draw();
    };
    if (a) {
        a.destroy();
    }
    a = new engine("svg-container", Math.round(container.clientWidth), Math.round(container.clientHeight));
}