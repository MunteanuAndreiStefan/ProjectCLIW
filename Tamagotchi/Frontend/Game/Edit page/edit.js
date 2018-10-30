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
    var leftEyePoint=new Point(facePoint.getX()-h/30,facePoint.getY()-h/30);
    var rightEyePoint=new Point(facePoint.getX()+h/30,facePoint.getY()-h/30);
    var char=document.getElementById("character");
    var rightEye=document.getElementById("right-eye");
    var leftEye=document.getElementById("left-eye");
    rightEye.parentNode.removeChild(rightEye);
    leftEye.parentNode.removeChild(leftEye);
    var value=eyesList.getCurrentItem();
    switch(value){
        case "rectangular":
            var rightEye=document.createElementNS("http://www.w3.org/2000/svg","rect");
            rightEye.setAttribute("x",rightEyePoint.getX()-h/70);
            rightEye.setAttribute("y",rightEyePoint.getY()-h/70);
            rightEye.setAttribute("width",h/35);
            rightEye.setAttribute("height",h/35);
            var leftEye=document.createElementNS("http://www.w3.org/2000/svg","rect");
            leftEye.setAttribute("x",leftEyePoint.getX()-h/70);
            leftEye.setAttribute("y",leftEyePoint.getY()-h/70);
            leftEye.setAttribute("width",h/35);
            leftEye.setAttribute("height",h/35);
            break;
        case "round":
            var rightEye=document.createElementNS("http://www.w3.org/2000/svg","circle");  
            rightEye.setAttribute("cx",rightEyePoint.getX());
            rightEye.setAttribute("cy",rightEyePoint.getY());
            rightEye.setAttribute("r",h/70);
            var leftEye=document.createElementNS("http://www.w3.org/2000/svg","circle");
            leftEye.setAttribute("cx",leftEyePoint.getX());
            leftEye.setAttribute("cy",leftEyePoint.getY());
            leftEye.setAttribute("r",h/70);
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
    var faceDimension=h/10;
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
    var leftEyePoint=new Point(facePoint.getX()-h/30,facePoint.getY()-h/30);
    var rightEyePoint=new Point(facePoint.getX()+h/30,facePoint.getY()-h/30);
    var value=mouthList.getCurrentItem();
    switch(value){
        case "happy":
            mouth.setAttribute("d",`M${leftEyePoint.getX()},${leftEyePoint.getY()+h/12} Q${facePoint.getX()},${rightEyePoint.getY()+h/8} ${rightEyePoint.getX()},${rightEyePoint.getY()+h/12}`);
            break;
        case "regular":
            mouth.setAttribute("d",`M${leftEyePoint.getX()},${leftEyePoint.getY()+h/12} Q${facePoint.getX()},${rightEyePoint.getY()+h/12} ${rightEyePoint.getX()},${rightEyePoint.getY()+h/12}`);
            break;
        case "sad":
            mouth.setAttribute("d",`M${leftEyePoint.getX()},${leftEyePoint.getY()+h/12} Q${facePoint.getX()},${rightEyePoint.getY()+h/12-(h/8-h/12)} ${rightEyePoint.getX()},${rightEyePoint.getY()+h/12}`);
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
    var faceDimension=h/10;
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
    var leftEyePoint=new Point(facePoint.getX()-h/30,facePoint.getY()-h/30);
    var rightEyePoint=new Point(facePoint.getX()+h/30,facePoint.getY()-h/30);
    var eyesValue=eyesList.getCurrentItem();
    if(eyesValue=="rectangular"){
        rightEye.setAttribute("x",rightEyePoint.getX()-h/70);
        rightEye.setAttribute("y",rightEyePoint.getY()-h/70);
        rightEye.setAttribute("width",h/35);
        rightEye.setAttribute("height",h/35);
        leftEye.setAttribute("x",leftEyePoint.getX()-h/70);
        leftEye.setAttribute("y",leftEyePoint.getY()-h/70);
        leftEye.setAttribute("width",h/35);
        leftEye.setAttribute("height",h/35);
    }
    else{
        leftEye.setAttribute("cx",leftEyePoint.getX());
        leftEye.setAttribute("cy",leftEyePoint.getY());
        leftEye.setAttribute("r",h/70);
        rightEye.setAttribute("cx",rightEyePoint.getX());
        rightEye.setAttribute("cy",rightEyePoint.getY());
        rightEye.setAttribute("r",h/70);
    }
    var mouthValue=mouthList.getCurrentItem();
    switch(mouthValue){
        case "happy":
            mouth.setAttribute("d",`M${leftEyePoint.getX()},${leftEyePoint.getY()+h/12} Q${facePoint.getX()},${rightEyePoint.getY()+h/8} ${rightEyePoint.getX()},${rightEyePoint.getY()+h/12}`);
            break;
        case "regular":
            mouth.setAttribute("d",`M${leftEyePoint.getX()},${leftEyePoint.getY()+h/12} Q${facePoint.getX()},${rightEyePoint.getY()+h/12} ${rightEyePoint.getX()},${rightEyePoint.getY()+h/12}`);
            break;
        case "sad":
            mouth.setAttribute("d",`M${leftEyePoint.getX()},${leftEyePoint.getY()+h/12} Q${facePoint.getX()},${rightEyePoint.getY()+h/12-(h/8-h/12)} ${rightEyePoint.getX()},${rightEyePoint.getY()+h/12}`);
            break;
    }
    /*
    var torsoPoint=new Point(facePoint.getX()-h/40,facePoint.getY()+faceDimension);
    torso.setAttribute("x",torsoPoint.getX());
    torso.setAttribute("y",torsoPoint.getY());
    torso.setAttribute("width",h/20);
    torso.setAttribute("height",h/5);
    leftHand.setAttribute("d",`M${torsoPoint.getX()-h/20},${torsoPoint.getY()+h/20} ${torsoPoint.getX()},${torsoPoint.getY()}`);
    rightHand.setAttribute("d",`M${torsoPoint.getX()+h/20},${torsoPoint.getY()} ${torsoPoint.getX()+h/20+h/20},${torsoPoint.getY()+h/20}`);
    leftLeg.setAttribute("d",`M${torsoPoint.getX()-h/20},${torsoPoint.getY()+h/20+h/5} ${torsoPoint.getX()},${torsoPoint.getY()+h/5}`);
    rightLeg.setAttribute("d",`M${torsoPoint.getX()+h/20},${torsoPoint.getY()+h/5} ${torsoPoint.getX()+h/20+h/20},${torsoPoint.getY()+h/20+h/5}`);
    */
   var torsoPoint=new Point(facePoint.getX()-h/28,facePoint.getY()+faceDimension);
   torso.setAttribute("x",torsoPoint.getX());
   torso.setAttribute("y",torsoPoint.getY());
   torso.setAttribute("width",h/14);
   torso.setAttribute("height",h/5);
   leftHand.setAttribute("d",`M${torsoPoint.getX()-h/20},${torsoPoint.getY()+h/20} ${torsoPoint.getX()},${torsoPoint.getY()}`);
   rightHand.setAttribute("d",`M${torsoPoint.getX()+h/14},${torsoPoint.getY()} ${torsoPoint.getX()+h/14+h/20},${torsoPoint.getY()+h/20}`);
   leftLeg.setAttribute("d",`M${torsoPoint.getX()-h/20},${torsoPoint.getY()+h/20+h/5} ${torsoPoint.getX()},${torsoPoint.getY()+h/5}`);
   rightLeg.setAttribute("d",`M${torsoPoint.getX()+h/14},${torsoPoint.getY()+h/5} ${torsoPoint.getX()+h/14+h/20},${torsoPoint.getY()+h/20+h/5}`);

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
    hslItems[0].value=0;
    hslItems[1].value=0;
    hslItems[2].value=0;
    hslItems[3].value=0;
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
