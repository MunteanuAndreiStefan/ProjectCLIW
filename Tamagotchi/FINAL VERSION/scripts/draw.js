function SVGDraw(shapeDictionary, a) {
    var h = a.height;
    var w = a.width;
    face = shapeDictionary['face'];
    if (face instanceof SVGRectElement)
        face = a.rect(face.x, face.y, face.w, face.h, "face");
    else if (face instanceof SVGCircleElement)
        face = a.circle(face.x, face.y, face.r, "face");
    else face = a.ellipse(face.x, face.y, face.radiusX, face.radiusY, "face");
    face.css("fill", shapeDictionary['face-color']);
    var rightEye = shapeDictionary['right-eye'];
    var leftEye = shapeDictionary['left-eye'];
    if (rightEye instanceof SVGRectElement) {
        rightEye = a.rect(rightEye.x, rightEye.y, rightEye.w, rightEye.h, "right-eye");
        leftEye = a.rect(leftEye.x, leftEye.y, leftEye.w, leftEye.h, "left-eye");
    } else if (rightEye instanceof SVGCircleElement) {
        rightEye = a.circle(rightEye.x, rightEye.y, rightEye.r, "right-eye");
        leftEye = a.circle(leftEye.x, leftEye.y, leftEye.r, "left-eye");
    } else {
        rightEye = a.ellipse(rightEye.x, rightEye.y, rightEye.radiusX, rightEye.radiusY, "right-eye");
        leftEye = a.ellipse(leftEye.x, leftEye.y, leftEye.r, leftEye.radiusX, leftEye.radiusY, "left-eye");
    }
    var mouth = shapeDictionary['mouth'];
    var obj = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    obj.setAttribute('d', mouth.d);
    obj.setAttribute('id', "mouth");
    obj.setAttribute('fill', 'none');
    obj.setAttribute('stroke', '#000000');
    mouth = a.add(obj, "mouth");
    torso = shapeDictionary['torso'];
    if (torso instanceof SVGRectElement)
        torso = a.rect(torso.x, torso.y, torso.w, torso.h, "torso");
    else
        torso = a.ellipse(torso.x, torso.y, torso.radiusX, torso.radiusY, "torso");
    var leftHand = shapeDictionary['left-hand'];
    var obj = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    obj.setAttribute('d', leftHand.d);
    obj.setAttribute('id', "left-hand");
    obj.setAttribute('fill', 'none');
    obj.setAttribute('stroke', '#000000');
    leftHand = a.add(obj, "left-hand");
    var rightHand = shapeDictionary['right-hand'];
    var obj = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    obj.setAttribute('d', rightHand.d);
    obj.setAttribute('id', "right-hand");
    obj.setAttribute('fill', 'none');
    obj.setAttribute('stroke', '#000000');
    rightHand = a.add(obj, "right-hand");
    var leftLeg = shapeDictionary['left-leg'];
    var obj = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    obj.setAttribute('d', leftLeg.d);
    obj.setAttribute('id', "left-leg");
    obj.setAttribute('fill', 'none');
    obj.setAttribute('stroke', '#000000');
    leftLeg = a.add(obj, "left-leg");
    var rightLeg = shapeDictionary['right-leg'];
    var obj = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    obj.setAttribute('d', rightLeg.d);
    obj.setAttribute('id', "right-leg");
    obj.setAttribute('fill', 'none');
    obj.setAttribute('stroke', '#000000');
    rightLeg = a.add(obj, "right-leg");
}