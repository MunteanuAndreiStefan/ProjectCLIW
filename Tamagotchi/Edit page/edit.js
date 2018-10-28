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
class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
}
function changingEyes(){
    var svg=document.getElementsByTagName("svg")[0].getBoundingClientRect();
    var w=svg.width;
    var h=svg.height;
    var facePoint=new Point(w/2,h/3);
    var leftEyePoint=new Point(facePoint.getX()-20,facePoint.getY()-20);
    var rightEyePoint=new Point(facePoint.getX()+20,facePoint.getY()-20);
    var char=document.getElementById("character");
    var rightEye=document.getElementById("right-eye");
    var leftEye=document.getElementById("left-eye");
    rightEye.parentNode.removeChild(rightEye);
    leftEye.parentNode.removeChild(leftEye);
    var value=eyesList.getCurrentItem();
    switch(value){
        case "rectangular":
            var rightEye=document.createElementNS("http://www.w3.org/2000/svg","rect");
            rightEye.setAttribute("x",rightEyePoint.getX()-10);
            rightEye.setAttribute("y",rightEyePoint.getY()-10);
            rightEye.setAttribute("width",20);
            rightEye.setAttribute("height",20);
            var leftEye=document.createElementNS("http://www.w3.org/2000/svg","rect");
            leftEye.setAttribute("x",leftEyePoint.getX()-10);
            leftEye.setAttribute("y",leftEyePoint.getY()-10);
            leftEye.setAttribute("width",20);
            leftEye.setAttribute("height",20);
            break;
        case "round":
            var rightEye=document.createElementNS("http://www.w3.org/2000/svg","circle");  
            rightEye.setAttribute("cx",rightEyePoint.getX());
            rightEye.setAttribute("cy",rightEyePoint.getY());
            rightEye.setAttribute("r","10");
            var leftEye=document.createElementNS("http://www.w3.org/2000/svg","circle");
            leftEye.setAttribute("cx",leftEyePoint.getX());
            leftEye.setAttribute("cy",leftEyePoint.getY());
            leftEye.setAttribute("r","10");
            break;
    }
    rightEye.id="right-eye";
    leftEye.id="left-eye";
    char.appendChild(rightEye);
    char.appendChild(leftEye);
}
function changingShape(){
    var svg=document.getElementsByTagName("svg")[0].getBoundingClientRect();
    var h=svg.height;
    var w=svg.width;
    var facePoint=new Point(w/2,h/3);
    var faceDimension=70;
    var char=document.getElementById("character");
    var face=document.getElementById("face");
    face.parentNode.removeChild(face);
    var value=shapeList.getCurrentItem();
    switch(value){
        case "rectangular":
            var face=document.createElementNS("http://www.w3.org/2000/svg","rect");
            face.setAttribute("x",facePoint.getX()-faceDimension);
            face.setAttribute("y",facePoint.getY()-faceDimension);
            face.setAttribute("width",faceDimension*2);
            face.setAttribute("height",faceDimension*2);
            break;
        case "round":
            var face=document.createElementNS("http://www.w3.org/2000/svg","circle");
            face.setAttribute("cx",facePoint.getX());
            face.setAttribute("cy",facePoint.getY());
            face.setAttribute("r",faceDimension);
            break;
    }
    face.style.fill=faceColor;
    face.id="face";
    char.insertBefore(face,char.childNodes[0]);
}
function changingMouth(){
    var svg=document.getElementsByTagName("svg")[0].getBoundingClientRect();
    var mouth=document.getElementById("mouth");
    var w=svg.width;
    var h=svg.height;
    var facePoint=new Point(w/2,h/3);
    var leftEyePoint=new Point(facePoint.getX()-20,facePoint.getY()-20);
    var rightEyePoint=new Point(facePoint.getX()+20,facePoint.getY()-20);
    var value=mouthList.getCurrentItem();
    switch(value){
        case "happy":
            mouth.setAttribute("d",`M${leftEyePoint.getX()},${leftEyePoint.getY()+50} Q${facePoint.getX()},${rightEyePoint.getY()+70} ${rightEyePoint.getX()},${rightEyePoint.getY()+50}`);
            break;
        case "regular":
            mouth.setAttribute("d",`M${leftEyePoint.getX()},${leftEyePoint.getY()+50} Q${facePoint.getX()},${rightEyePoint.getY()+50} ${rightEyePoint.getX()},${rightEyePoint.getY()+50}`);
            break;
        case "sad":
            mouth.setAttribute("d",`M${leftEyePoint.getX()},${leftEyePoint.getY()+50} Q${facePoint.getX()},${rightEyePoint.getY()+30} ${rightEyePoint.getX()},${rightEyePoint.getY()+50}`);
            break;
    }
}
function changingAccessory(){
}
function changingCostumes(){
}
function draw(){
    var svg=document.getElementsByTagName("svg")[0].getBoundingClientRect();
    var face=document.getElementById("face");
    var leftEye=document.getElementById("left-eye");
    var rightEye=document.getElementById("right-eye");
    var mouth=document.getElementById("mouth");
    var torso=document.getElementById("torso");
    var leftHand=document.getElementById("left-hand");
    var rightHand=document.getElementById("right-hand");
    var leftLeg=document.getElementById("left-leg");
    var rightLeg=document.getElementById("right-leg");
    var h=svg.height;
    var w=svg.width;
    var facePoint=new Point(w/2,h/3);
    var faceDimension=70;
    var faceValue=shapeList.getCurrentItem();
    if(faceValue=="rectangular"){
        face.setAttribute("x",facePoint.getX()-faceDimension);
        face.setAttribute("y",facePoint.getY()-faceDimension);
        face.setAttribute("width",faceDimension*2);
        face.setAttribute("height",faceDimension*2);
    }
    else{
        face.setAttribute("cx",facePoint.getX());
        face.setAttribute("cy",facePoint.getY());
        face.setAttribute("r",faceDimension);
    }
    var leftEyePoint=new Point(facePoint.getX()-20,facePoint.getY()-20);
    var rightEyePoint=new Point(facePoint.getX()+20,facePoint.getY()-20);
    var eyesValue=eyesList.getCurrentItem();
    if(eyesValue=="rectangular"){
        rightEye.setAttribute("x",rightEyePoint.getX()-10);
        rightEye.setAttribute("y",rightEyePoint.getY()-10);
        rightEye.setAttribute("width",20);
        rightEye.setAttribute("height",20);
        leftEye.setAttribute("x",leftEyePoint.getX()-10);
        leftEye.setAttribute("y",leftEyePoint.getY()-10);
        leftEye.setAttribute("width",20);
        leftEye.setAttribute("height",20);
    }
    else{
        leftEye.setAttribute("cx",leftEyePoint.getX());
        leftEye.setAttribute("cy",leftEyePoint.getY());
        leftEye.setAttribute("r","10");
        rightEye.setAttribute("cx",rightEyePoint.getX());
        rightEye.setAttribute("cy",rightEyePoint.getY());
        rightEye.setAttribute("r","10");
    }
    var mouthValue=mouthList.getCurrentItem();
    switch(mouthValue){
        case "happy":
            mouth.setAttribute("d",`M${leftEyePoint.getX()},${leftEyePoint.getY()+50} Q${facePoint.getX()},${rightEyePoint.getY()+70} ${rightEyePoint.getX()},${rightEyePoint.getY()+50}`);
            break;
        case "regular":
            mouth.setAttribute("d",`M${leftEyePoint.getX()},${leftEyePoint.getY()+50} Q${facePoint.getX()},${rightEyePoint.getY()+50} ${rightEyePoint.getX()},${rightEyePoint.getY()+50}`);
            break;
        case "sad":
            mouth.setAttribute("d",`M${leftEyePoint.getX()},${leftEyePoint.getY()+50} Q${facePoint.getX()},${rightEyePoint.getY()+30} ${rightEyePoint.getX()},${rightEyePoint.getY()+50}`);
            break;
    }
    var torsoPoint=new Point(facePoint.getX()-20,facePoint.getY()+faceDimension);
    torso.setAttribute("x",torsoPoint.getX());
    torso.setAttribute("y",torsoPoint.getY());
    torso.setAttribute("width","40");
    torso.setAttribute("height","140");
    leftHand.setAttribute("d",`M${torsoPoint.getX()-50},${torsoPoint.getY()+50} ${torsoPoint.getX()},${torsoPoint.getY()}`);
    rightHand.setAttribute("d",`M${torsoPoint.getX()+40},${torsoPoint.getY()} ${torsoPoint.getX()+40+50},${torsoPoint.getY()+50}`);
    leftLeg.setAttribute("d",`M${torsoPoint.getX()-50},${torsoPoint.getY()+50+140} ${torsoPoint.getX()},${torsoPoint.getY()+140}`);
    rightLeg.setAttribute("d",`M${torsoPoint.getX()+40},${torsoPoint.getY()+140} ${torsoPoint.getX()+40+50},${torsoPoint.getY()+50+140}`);
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
        buttons.item(0).onclick=()=>{list.previousElementIndex();paragraph.textContent=list.getCurrentItem();eventHandler();}
        buttons.item(1).onclick=()=>{list.nextElementIndex();paragraph.textContent=list.getCurrentItem();eventHandler();}
    }
    /*
    var color=document.getElementById("color");
    color.onchange=()=>{faceColor=color.value;document.getElementById("face").style="fill:"+faceColor;}
    */
    var hslItems=document.getElementsByTagName("input");
    var colorRectangle=document.getElementById("color-test");
    for(var i=0;i<hslItems.length;i++){
        hslItems[i].onchange=()=>{
            colorRectangle.style.background=`hsla(${hslItems[0].value},${hslItems[1].value}%,${hslItems[2].value}%,${hslItems[3].value})`;
        };
    }
    colorRectangle.style.background="black";
    document.getElementById("apply").onclick=()=>{faceColor=colorRectangle.style.background;document.getElementById("face").style.fill=faceColor;};
    window.onresize=draw;
    draw();
}
