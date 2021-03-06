var isSmartphone = /iPhone|iPod|Android.*Mobile|Windows.*Phone/.test(navigator.userAgent);
var isTablet = /iPad|Android/.test(navigator.userAgent);
if (isSmartphone || isTablet) {
	var viewport = document.createElement("meta");
	viewport.name = "viewport";
	viewport.content = "initial-scale=1.0, minimum-scale=1.0";
}

function addEvent(obj, event, func) {
	obj.addEventListener(event, func, false);
}

function $(id) {
	return document.getElementById(id);
}

function showWindow(elm, width, height, close, removeFunc) {
	var documentElement = document.documentElement;
	var body = document.body;
	var scrollLeft = documentElement.scrollLeft || body.scrollLeft;
	var scrollTop = documentElement.scrollTop || body.scrollTop;
	var scrollWidth = documentElement.scrollWidth || body.scrollWidth;
	var scrollHeight = documentElement.scrollHeight || body.scrollHeight;
	var clientWidth = documentElement.clientWidth || body.clientWidth || scrollWidth;
	var clientHeight = documentElement.clientHeight || body.clientHeight || scrollHeight;

	var curtain = document.createElement("div");
	curtain.id = "curtain";
	curtain.style.width = scrollWidth + "px";
	curtain.style.height = scrollHeight + "px";
	body.appendChild(curtain);

	var layer = document.createElement("div");
	layer.id = "windowLayer";
	layer.style.width = width + "px";
	layer.style.height = height + "px";
	layer.style.top = scrollTop + (clientHeight - height) / 2 + 10 + "px";
	if (parseInt(layer.style.top, 10) < 0) {
		layer.style.top = scrollTop;
	}
	layer.style.left = scrollLeft + (clientWidth - width) / 2 + 10 + "px";
	if (parseInt(layer.style.left, 10) < 0) {
		layer.style.left = scrollLeft;
	}

	elm.style.width = width + "px";
	elm.style.height = height + "px";
	layer.appendChild(elm);
	body.appendChild(layer);

	// Force reflow, doing nothing.
	layer.offsetTop;

	var scaleTo = "scale(1)";
	curtain.style.opacity = 0.9;
	layer.style.transform = scaleTo;
	layer.style.webkitTransform = scaleTo;
	layer.style.MozTransform = scaleTo;
	layer.style.msTransform = scaleTo;
	layer.style.OTransform = scaleTo;

	var remove = function () {
		// Force reflow, doing nothing.
		this.offsetTop;
		body.removeChild(this);
	};

	var closeWindow = function () {
		addEvent(curtain, "transitionend", remove);
		addEvent(curtain, "webkitTransitionEnd", remove);
		if (removeFunc) {
			addEvent(layer, "transitionend", removeFunc);
			addEvent(layer, "webkitTransitionEnd", removeFunc);
		}
		addEvent(layer, "transitionend", remove);
		addEvent(layer, "webkitTransitionEnd", remove);

		var scaleTo = "scale(0)";
		curtain.style.opacity = 0;
		layer.style.transform = scaleTo;
		layer.style.webkitTransform = scaleTo;
		layer.style.MozTransform = scaleTo;
		layer.style.msTransform = scaleTo;
		layer.style.OTransform = scaleTo;
		layer.style.opacity = 0;

		if (!("transition" in curtain.style) && !("webkitTransition" in curtain.style) && !("mozTransition" in curtain.style)) {
			remove.call(curtain);
			remove.call(layer);
			if (removeFunc) {
				removeFunc.call(layer);
			}
		}
	};

	addEvent(curtain, "click", closeWindow);
	if (close) {
		addEvent(layer, "click", closeWindow);
	}
}

function zoomImage(e) {
	var image = new Image();
	image.src = (e.target || window.event.srcElement).src;
	image.id = "zoomImage";
	showWindow(image, image.width, image.height, true, null);
}
