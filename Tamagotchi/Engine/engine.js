(function(window, undefined) {

    var engine = function(object, width, height) {
        this.ns = 'http://www.w3.org/2000/svg';

        nodeSVG.prototype.that = this;

        this.height = (getType(height, 'number')) ? height : this.object.clientHeight;
        this.width = (getType(width, 'number')) ? width : this.object.clientWidth;

        if (getType(object, 'string'))
            object = document.getElementById(object);
        this.object = object;

        // creaza si adauga obiectul svg la parinte
        this.createSurface();

        // initializeaza nr noduri
        this.pool = {};
        this.poolIndex = 0;
    }

    // E nevoie de inca un obiect pentru a limita nr de schimbari pe main obj
    var nodeSVG = function(node) {
        // ia nodu dupa name sau id 
        this[0] = getType(node, 'string') ? this.that.pool[node] : node;
        return this;
    }

    var camelCase = function(str) {
        var index = 0;

        while ((index = str.indexOf('-')) != -1)
            str = str.substr(0, index) + str.substr(index + 1, 1).toUpperCase() + str.substr(index + 2);
        return str;
    }

    // wrapper pentru typeof
    var getType = function(variable, type) {
        if (typeof(type) == 'undefined')
            type = 'undefined';
        return typeof(variable) == type;
    }

    // Converteste un arr in [x1,y1,x2,y2,x3,y3...] sau [[x1,y1],[x2,y2],[x3,y3]...] in formatul: "Mx1,y1Lx2,y2,Lx3,y3..." (pentru svg path)
    var toPath = function(a) {
        if (a.length == 0) return '';

        var i, path = '',
            test = getType(a[0], 'number');

        for (i = 0; i < a.length; ++i) {
            path += (path == '' ? 'M' : 'L') + (test ? a[i] : a[i][0]) + ',' + (test ? a[++i] : a[i][1]);
        }

        return path;
    }

    engine.prototype.animateNode = function(nameToAttach, attributeName, from, to, dur, repeatCount) {
        console.log("entry");
        var att = document.getElementById(nameToAttach);

        var obj = document.createElementNS(this.ns, 'animate');

        obj.setAttribute('attributeType', "XML");
        obj.setAttribute('attributeName', attributeName);
        obj.setAttribute('from', from);
        obj.setAttribute('to', to);
        obj.setAttribute('dur', dur);
        obj.setAttribute('repeatCount', repeatCount);

        att.appendChild(obj);
    }

    // Creaza si adauga obiectul la parinte
    engine.prototype.createSurface = function() {
        this.surface = document.createElementNS(this.ns, 'svg');
        this.surface.setAttribute('width', this.width);
        this.surface.setAttribute('height', this.height);

        this.object.appendChild(this.surface);
    }

    engine.prototype.destroy = function() {
        this.pool = {};
        this.poolIndex = 0;
        this.object.removeChild(this.surface);
    }

    engine.prototype.clear = function() {
        this.destroy();
        this.createSurface();
    }

    engine.prototype.node = function(node) {
        return new nodeSVG(node);
    }

    nodeSVG.prototype.set = function(attribute, value) {
        this[0].setAttribute(attribute, value);
        return this;
    }

    nodeSVG.prototype.stroke = function(color) {
        return this.set('stroke', color);
    }
    nodeSVG.prototype.fill = function(color) {
        return this.set('fill', color);
    }

    nodeSVG.prototype.css = function(options, value) {
        if (getType(options, 'string')) {
            options = camelCase(options);
            this[0].style[options] = value;
        } else {
            for (var opt in options) {
                this[0].style[camelCase(opt)] = options[opt];
            }
        }

        return this;
    }

    nodeSVG.prototype.hover = function(fncOnMouseOver, fncOnMouseOut) {
        if (fncOnMouseOver)
            this[0].onmouseover = fncOnMouseOver;
        if (fncOnMouseOut)
            this[0].onmouseout = fncOnMouseOut;
        return this;
    }
    nodeSVG.prototype.click = function(fncOnMouseDown, fncOnMouseUp) {
        if (fncOnMouseDown)
            this[0].onmousedown = fncOnMouseDown;
        if (fncOnMouseUp)
            this[0].onmouseup = fncOnMouseUp;
        return this;
    }

    engine.prototype.del = function(name) {
        this.surface.removeChild(this.pool[name]);
        delete(this.pool[name]);
    }


	nodeSVG.prototype.animateX = function (to, dur, repeatCount) {
		var att = this[0];

		while (att.firstChild) {
			att.removeChild(att.firstChild);
		}

		if(att["x"]==undefined)
			attributeName="cx";
		else
			attributeName="x";
	
        var obj = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        
        obj.setAttributeNS(null, 'attributeType', 'XML');
        obj.setAttributeNS(null, 'attributeName', attributeName);
        obj.setAttributeNS(null, 'from', Number(att[attributeName]["baseVal"]['valueAsString']));
        obj.setAttributeNS(null, 'to', Number(to));
        obj.setAttributeNS(null, 'dur', Number(dur));
        obj.setAttributeNS(null, 'repeatCount', repeatCount);
        
        att.appendChild(obj);
		obj.beginElement();
		
		return this;
	}
	
		nodeSVG.prototype.animateY = function (to, dur, repeatCount) {
		var att = this[0];

		while (att.firstChild) {
			att.removeChild(att.firstChild);
		}

		if(att["y"]==undefined)
			attributeName="cy";
		else
			attributeName="y";
		
        var obj = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
        
        obj.setAttributeNS(null, 'attributeType', 'XML');
        obj.setAttributeNS(null, 'attributeName', attributeName);
        obj.setAttributeNS(null, 'from', Number(att[attributeName]["baseVal"]['valueAsString']));
        obj.setAttributeNS(null, 'to', Number(to));
        obj.setAttributeNS(null, 'dur', Number(dur));
        obj.setAttributeNS(null, 'repeatCount', repeatCount);
        
        att.appendChild(obj);
		
		return this;
	}

    engine.prototype.add = function(obj, name) {
        if (!getType(name, 'string'))
            name = 'unnamedObject' + (++this.poolIndex);

        if (getType(this.pool[name]))
            this.surface.appendChild(obj);
        else this.surface.replaceChild(obj, this.pool[name]);

        this.pool[name] = obj;

        return new nodeSVG(this.pool[name]);
    }

    engine.prototype.path = function(arr, name) {
        var path = toPath(arr);

        var obj = document.createElementNS(this.ns, 'path');
        obj.setAttribute('d', path);
        obj.setAttribute('id', name);
        obj.setAttribute('fill', 'none');
        obj.setAttribute('stroke', '#000000');

        return this.add(obj, name);
    }

    engine.prototype.text = function(x, y, text, name) {
        var obj = document.createElementNS(this.ns, 'text');
        obj.setAttribute('id', name);
        obj.setAttribute('x', x);
        obj.setAttribute('y', y);

        obj.appendChild(document.createTextNode(text));

        return this.add(obj, name);
    }

    engine.prototype.rect = function(x, y, w, h, name) {
        var obj = document.createElementNS(this.ns, 'rect');
        obj.setAttribute('id', name);
        obj.setAttribute('x', x);
        obj.setAttribute('y', y);
        obj.setAttribute('width', w);
        obj.setAttribute('height', h);

        return this.add(obj, name);
    }

    engine.prototype.ellipse = function(x, y, rx, ry, name) {
        var obj = document.createElementNS(this.ns, 'ellipse');
        obj.setAttribute('id', name);
        obj.setAttribute('cx', x);
        obj.setAttribute('cy', y);
        obj.setAttribute('rx', rx);
        obj.setAttribute('ry', ry);

        return this.add(obj, name);
    }

    engine.prototype.circle = function(x, y, r, name) {
        return this.ellipse(x, y, r, r, name);
    }

    window.engine = engine;

})(window);