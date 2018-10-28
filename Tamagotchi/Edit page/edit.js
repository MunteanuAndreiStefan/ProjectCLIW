class List {
    constructor(items) {
        this.items = items;
        this.index = 0;
    }
    nextElementIndex() {
        this.index=(this.index+1)%this.items.length;
    }
    previousElementIndex() {
        var size=this.items.length;
        this.index=(this.index+size-1)%size;
    }
    getCurrentItem() {
        return this.items[this.index];
    }
}
function changingEyes(value){
    var char=document.getElementById("character");
    var rightEye=document.getElementById("right-eye");
    var leftEye=document.getElementById("left-eye");
    rightEye.parentNode.removeChild(rightEye);
    leftEye.parentNode.removeChild(leftEye);
    switch(value){
        case "rectangular":
            var rightEye=document.createElementNS("http://www.w3.org/2000/svg","rect");
            rightEye.setAttributeNS(null,"x","410");
            rightEye.setAttributeNS(null,"y","80");
            rightEye.setAttributeNS(null,"width","10");
            rightEye.setAttributeNS(null,"height","10");
            var leftEye=document.createElementNS("http://www.w3.org/2000/svg","rect");
            leftEye.setAttributeNS(null,"x","380");
            leftEye.setAttributeNS(null,"y","80");
            leftEye.setAttributeNS(null,"width","10");
            leftEye.setAttributeNS(null,"height","10");
            break;
        case "round":
            var rightEye=document.createElementNS("http://www.w3.org/2000/svg","circle");
            rightEye.setAttributeNS(null,"cx","415");
            rightEye.setAttributeNS(null,"cy","85");
            rightEye.setAttributeNS(null,"r","5");
            var leftEye=document.createElementNS("http://www.w3.org/2000/svg","circle");
            leftEye.setAttributeNS(null,"cx","385");
            leftEye.setAttributeNS(null,"cy","85");
            leftEye.setAttributeNS(null,"r","5");
            break;
    }
    rightEye.id="right-eye";
    leftEye.id="left-eye";
    char.appendChild(rightEye);
    char.appendChild(leftEye);
}
function changingShape(value){
    var char=document.getElementById("character");
    var face=document.getElementById("face");
    face.parentNode.removeChild(face);
    switch(value){
        case "rectangular":
            var face=document.createElementNS("http://www.w3.org/2000/svg","rect");
            face.setAttributeNS(null,"x","350");
            face.setAttributeNS(null,"y","50");
            face.setAttributeNS(null,"width","100");
            face.setAttributeNS(null,"height","100");
            break;
        case "round":
            var face=document.createElementNS("http://www.w3.org/2000/svg","circle");
            face.setAttributeNS(null,"cx","400");
            face.setAttributeNS(null,"cy","100");
            face.setAttributeNS(null,"r","50");
            break;
    }
    face.style.fill=faceColor;
    face.id="face";
    char.insertBefore(face,char.childNodes[0]);
}
function changingMouth(value){
    var mouth=document.getElementById("mouth");
    switch(value){
        case "happy":
            mouth.setAttribute("d","M385,125 Q400,150 415,125");
            break;
        case "regular":
            mouth.setAttribute("d","M385,125 415,125");
            break;
        case "sad":
            mouth.setAttribute("d","M385,125 Q400,100 415,125");
            break;
    }
}
function changingAccessory(value){
}
function changingCostumes(value){
}
var eyesList=new List(["round","rectangular"]);
var mouthList=new List(["happy","regular","sad"]);
var shapeList=new List(["round","rectangular"]);
var accessoryList=new List(["default"]);
var costumeList=new List(["default"]);
var divToList={"eyes-options":eyesList,"shape-options":shapeList,"mouth-options":mouthList,"accessory-options":accessoryList,"costume-options":costumeList};
var divToFunction={"eyes-options":changingEyes,"shape-options":changingShape,"mouth-options":changingMouth,"accessory-options":changingAccessory,"costume-options":changingCostumes};
var faceColor="blue";
window.onload=function(){
    var divs=document.getElementsByClassName("options");
    var divsSize=divs.length;
    for(var i=0;i<divsSize;i++){
        let buttons=divs[i].getElementsByTagName("button");
        let list=divToList[divs[i].id];
        let paragraph=divs[i].getElementsByTagName("p")[0];
        let eventHandler=divToFunction[divs[i].id];
        paragraph.textContent=list.getCurrentItem();
        buttons.item(0).onclick=()=>{list.previousElementIndex();paragraph.textContent=list.getCurrentItem();eventHandler(paragraph.textContent);}
        buttons.item(1).onclick=()=>{list.nextElementIndex();paragraph.textContent=list.getCurrentItem();eventHandler(paragraph.textContent);}
    }
    /*
    var color=document.getElementById("color");
    color.onchange=()=>{faceColor=color.value;document.getElementById("face").style="fill:"+faceColor;}
    */
    var hslItems=document.getElementsByTagName("input");
    var colorRectangle=document.getElementById("colorTest");
    for(var i=0;i<hslItems.length;i++){
        hslItems[i].onchange=()=>{
            colorRectangle.style.fill=`hsla(${hslItems[0].value},${hslItems[1].value}%,${hslItems[2].value}%,${hslItems[3].value})`;
        };
    }
    colorRectangle.style.fill="black";
    document.getElementById("apply").onclick=()=>{faceColor=colorRectangle.style.fill;document.getElementById("face").style.fill=faceColor;};
}
