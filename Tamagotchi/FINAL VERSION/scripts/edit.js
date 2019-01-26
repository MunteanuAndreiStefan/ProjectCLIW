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

/*Function for changing the eyes of the tamagotchi*/
function changingEyes() {
    var w = a.width;
    var h = a.height;
    var facePoint = new Point(w / 2, h / 3);
    var leftEyePoint = new Point(facePoint.getX() - h / 30, facePoint.getY() - h / 30);
    var rightEyePoint = new Point(facePoint.getX() + h / 30, facePoint.getY() - h / 30);
    var value = eyesList.getCurrentItem();
    if (value == "rectangular") {
        rightEye = a.rect(rightEyePoint.getX() - h / 70, rightEyePoint.getY() - h / 70, h / 35, h / 35, "right-eye");
        leftEye = a.rect(leftEyePoint.getX() - h / 70, rightEyePoint.getY() - h / 70, h / 35, h / 35, "left-eye");
    } else {
        rightEye = a.circle(rightEyePoint.getX(), rightEyePoint.getY(), h / 70, "right-eye");
        leftEye = a.circle(leftEyePoint.getX(), leftEyePoint.getY(), h / 70, "left-eye");
    }
    character['right-eye'] = rightEye;
    character['left-eye'] = leftEye;
}

/*Function for changing the face shape of the tamagotchi*/
function changingShape() {
    var h = a.height;
    var w = a.width;
    var facePoint = new Point(w / 2, h / 3);
    var faceDimension = h / 10;
    var value = shapeList.getCurrentItem();
    if (value == "rectangular") {
        face = a.rect(facePoint.getX() - faceDimension, facePoint.getY() - faceDimension, faceDimension * 2, faceDimension * 2, "face");
    } else {
        face = a.circle(facePoint.getX(), facePoint.getY(), faceDimension, "face");
    }
    face.css("fill", faceColor);
    character['face'] = face;
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
    character['mouth'] = mouth;
}

/*Function for changing the accesory of the tamagotchi*/
function changingAccessory() {}

/*Function for changing the costume of the tamagotchi*/
function changingCostumes() {}

/*This function is used at drawing the tamagotchi, based on the values selected by the user*/
function draw() {
    var h = a.height;
    var w = a.width;
    var facePoint = new Point(w / 2, h / 3);
    var faceDimension = h / 10;
    var faceValue = shapeList.getCurrentItem();
    if (faceValue == "rectangular") {
        face = a.rect(facePoint.getX() - faceDimension, facePoint.getY() - faceDimension, faceDimension * 2, faceDimension * 2, "face");
    } else {
        face = a.circle(facePoint.getX(), facePoint.getY(), faceDimension, "face");
    }
    face.css("fill", faceColor);
    var leftEyePoint = new Point(facePoint.getX() - h / 30, facePoint.getY() - h / 30);
    var rightEyePoint = new Point(facePoint.getX() + h / 30, facePoint.getY() - h / 30);
    var eyesValue = eyesList.getCurrentItem();
    if (eyesValue == "rectangular") {
        rightEye = a.rect(rightEyePoint.getX() - h / 70, rightEyePoint.getY() - h / 70, h / 35, h / 35, "right-eye");
        leftEye = a.rect(leftEyePoint.getX() - h / 70, rightEyePoint.getY() - h / 70, h / 35, h / 35, "left-eye");
    } else {
        rightEye = a.circle(rightEyePoint.getX(), rightEyePoint.getY(), h / 70, "right-eye");
        leftEye = a.circle(leftEyePoint.getX(), leftEyePoint.getY(), h / 70, "left-eye");
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
    var torsoPoint = new Point(facePoint.getX() - h / 28, facePoint.getY() + faceDimension);
    torso = a.rect(torsoPoint.getX(), torsoPoint.getY(), h / 14, h / 5, "torso");
    leftHand = a.path([torsoPoint.getX() - h / 20, torsoPoint.getY() + h / 20, torsoPoint.getX(), torsoPoint.getY()], "left-hand");
    rightHand = a.path([torsoPoint.getX() + h / 14, torsoPoint.getY(), torsoPoint.getX() + h / 14 + h / 20, torsoPoint.getY() + h / 20], "right-hand");
    leftLeg = a.path([torsoPoint.getX() - h / 20, torsoPoint.getY() + h / 20 + h / 5, torsoPoint.getX(), torsoPoint.getY() + h / 5], "left-leg");
    rightLeg = a.path([torsoPoint.getX() + h / 14, torsoPoint.getY() + h / 5, torsoPoint.getX() + h / 14 + h / 20, torsoPoint.getY() + h / 20 + h / 5], "right-leg");
    character['face'] = face;
    character['right-eye'] = rightEye;
    character['left-eye'] = leftEye;
    character['mouth'] = mouth;
    character['torso'] = torso;
    character['right-hand'] = rightHand;
    character['left-hand'] = leftHand;
    character['right-leg'] = rightLeg;
    character['left-leg'] = leftLeg;
}
var eyesList = new List(["round", "rectangular"]);
var mouthList = new List(["happy", "regular", "sad"]);
var shapeList = new List(["round", "rectangular"]);
var accessoryList = new List(["default"]);
var costumeList = new List(["default"]);
var divToList = { "eyes-options": eyesList, "shape-options": shapeList, "mouth-options": mouthList, "accessory-options": accessoryList, "costume-options": costumeList };
var divToFunction = { "eyes-options": changingEyes, "shape-options": changingShape, "mouth-options": changingMouth, "accessory-options": changingAccessory, "costume-options": changingCostumes };
var faceColor = "blue";

function initialize() {
    var container = document.getElementById("svg-container");
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
    };

    window.onresize = (e) => {
        a.destroy();
        a = new engine("svg-container", Math.round(container.clientWidth), Math.round(container.clientHeight));
        draw();
    };
    a = new engine("svg-container", Math.round(container.clientWidth), Math.round(container.clientHeight));
    draw();

}