function parse(text, text2) {
    var j = text.indexOf(text2);
    var newtext = text.substring(j + text2.length + 1);
    var j2 = newtext.indexOf('"', 1);
    return newtext.substring(0, j2 + 1).substring(1, newtext.substring(0, j2 + 1).length - 1);
}

function SVGDraw(shapeDictionary, a) {
    var h = a.height;
    var w = a.width;
    var faceText = shapeDictionary['face'];
    var face;
    if (faceText.search("rect") != -1) {
        face = a.rect(parse(faceText, '" x'), parse(faceText, '" y'), parse(faceText, 'width'), parse(faceText, 'height'), "face");
    } else {
        face = a.ellipse(parse(faceText, 'cx'), parse(faceText, 'cy'), parse(faceText, 'rx'), parse(faceText, 'ry'), "face");
    }
    face.css("fill", shapeDictionary['faceColor']);
    var rightEyeText = shapeDictionary['right-eye'];
    var leftEyeText = shapeDictionary['left-eye'];
    var rightEye;
    var leftEye;
    if (rightEyeText.search("rect") != -1) {
        rightEye = a.rect(parse(rightEyeText, '" x'), parse(rightEyeText, '" y'), parse(rightEyeText, 'width'), parse(rightEyeText, 'height'), "right-eye");
        leftEye = a.rect(parse(leftEyeText, '" x'), parse(leftEyeText, '" y'), parse(leftEyeText, 'width'), parse(leftEyeText, 'height'), "left-eye");
    } else {
        rightEye = a.ellipse(parse(rightEyeText, 'cx'), parse(rightEyeText, 'cy'), parse(rightEyeText, 'rx'), parse(rightEyeText, 'ry'), "right-eye");
        leftEye = a.ellipse(parse(leftEyeText, 'cx'), parse(leftEyeText, 'cy'), parse(leftEyeText, 'rx'), parse(leftEyeText, 'ry'), "left-eye");
    }
    var torsoText = shapeDictionary['torso'];
    if (torsoText.search("rect") != -1) {
        torso = a.rect(parse(torsoText, '" x'), parse(torsoText, '" y'), parse(torsoText, 'width'), parse(torsoText, 'height'), "torso");
    } else {
        torso = a.ellipse(parse(torsoText, 'cx'), parse(torsoText, 'cy'), parse(torsoText, 'rx'), parse(torsoText, 'ry'), "torso");
    }
    var mouthText = shapeDictionary['mouth'];
    var obj = document.createElementNS(a.ns, 'path');
    obj.setAttribute('d', parse(mouthText, " d"));
    obj.setAttribute('id', "mouth");
    obj.setAttribute('fill', 'none');
    obj.setAttribute('stroke', '#000000');
    mouth = a.add(obj, "mouth");
    var rightHandText = shapeDictionary['right-hand'];
    var obj = document.createElementNS(a.ns, 'path');
    obj.setAttribute('d', parse(rightHandText, " d"));
    obj.setAttribute('id', "right-hand");
    obj.setAttribute('fill', 'none');
    obj.setAttribute('stroke', '#000000');
    rightHand = a.add(obj, "right-hand");
    var leftHandText = shapeDictionary['left-hand'];
    var obj = document.createElementNS(a.ns, 'path');
    obj.setAttribute('d', parse(leftHandText, " d"));
    obj.setAttribute('id', "right-hand");
    obj.setAttribute('fill', 'none');
    obj.setAttribute('stroke', '#000000');
    leftHand = a.add(obj, "left-hand");
    var rightLegText = shapeDictionary['right-leg'];
    var obj = document.createElementNS(a.ns, 'path');
    obj.setAttribute('d', parse(rightLegText, " d"));
    obj.setAttribute('id', "right-leg");
    obj.setAttribute('fill', 'none');
    obj.setAttribute('stroke', '#000000');
    rightLeg = a.add(obj, "right-leg");
    var leftLegText = shapeDictionary['left-leg'];
    var obj = document.createElementNS(a.ns, 'path');
    obj.setAttribute('d', parse(leftLegText, " d"));
    obj.setAttribute('id', "left-leg");
    obj.setAttribute('fill', 'none');
    obj.setAttribute('stroke', '#000000');
    leftLeg = a.add(obj, "left-leg");
}