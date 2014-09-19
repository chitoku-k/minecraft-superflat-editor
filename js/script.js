addEvent(window, "load", setSNSButtons);
addEvent(window, "load", setImageZoom);

var isSmartphone = /iPhone|iPod|Android.*Mobile|Windows.*Phone/.test(navigator.userAgent);
var isTablet = /iPad|Android/.test(navigator.userAgent);
if (isSmartphone || isTablet) {
	var viewport = document.createElement("meta");
	viewport.name = "viewport";
	viewport.content = "initial-scale=1.0, minimum-scale=1.0";
	//viewport.content += isSmartphone ? ", maximum-scale=1.0, user-scalable=no" : "";
	if (!/superflat/.test(location.href))
		document.getElementsByTagName("head")[0].appendChild(viewport);
	if (isSmartphone) {
		addEvent(window, "load", putMenuButton);
		addEvent(window, "load", function () {
			if (window.pageYOffset === 0 && !navigator.standalone)
				setTimeout(window.scrollTo, 100, 0, 1);
		});
	}
}

function addEvent(obj, event, func) {
	if (window.addEventListener)
		obj.addEventListener(event, func, false);
	else if (window.attachEvent)
		obj.attachEvent("on" + event, function () {
			func.call(obj, window.event);
		});
	else {
		var setEvent = obj["on" + event];
		obj["on" + event] = function (e) {
			if (setEvent) {
				setEvent(e);
			}
			func.call(obj, e || window.event);
		};
	}
}

function $(id) {
	return document.getElementById(id);
}

function putMenuButton() {
	var menuButton = document.createElement("a");
	menuButton.id = "menubutton";
	$("header").appendChild(menuButton);
	if (window.ontouchstart === undefined)
		addEvent(menuButton, "mousedown", switchMenu);
	else {
		addEvent(menuButton, "touchstart", switchMenu);
		addEvent(menuButton, "touchend", enableBody);
	}

	var searchLinks = document.createElement("li");
	searchLinks.id = "searchlinks";
	searchLinks.appendChild($("searchbar"));
	document.getElementsByTagName("ul")[0].appendChild(searchLinks);
}

function switchMenu() {
	var isHidden = $("nav").className === "" || $("nav").className === undefined;
	var menuButton = $("menubutton").style;

	var scaleTo = isHidden ? "scaleY(-1)" : "";
	menuButton.backgroundColor = isHidden ? "#333" : "#666";
	$("nav").style.opacity = isHidden ? 1 : 0;

	$("nav").className = "active";
	if (!isHidden)
		setTimeout(function () {
			$("nav").removeAttribute("class");
		}, 500);

	menuButton.transform = scaleTo;
	menuButton.webkitTransform = scaleTo;
	menuButton.MozTransform = scaleTo;
	menuButton.msTransform = scaleTo;
	menuButton.OTransform = scaleTo;

	var preventDefault = function (e) {
		e.preventDefault();
	};
	document.ontouchstart = preventDefault;
	document.ontouchmove = preventDefault;
	document.ontouchend = preventDefault;
}

function enableBody() {
	document.ontouchstart = null;
	document.ontouchmove = null;
	document.ontouchend = null;
}

function setSNSButtons() {
	$("tweetbutton").href = "http://twitter.com/share?text=" + encodeURI(document.title + " -") + "&url=" + location.href;
	$("likebutton").href = "http://www.facebook.com/sharer.php?u=" + location.href + "&t=" + encodeURI(document.title);
	if (isSmartphone) {
		$("hatenabutton").href = "http://b.hatena.ne.jp/entry.touch/" + location.href;
		$("linebutton").href = "line://msg/text/" + encodeURI(document.title + " - " + location.href);
	}
	else {
		$("hatenabutton").href = "http://b.hatena.ne.jp/add?mode=confirm&url=" + location.href + "&title=" + encodeURI(document.title);
		$("linebutton").href = "http://line.naver.jp/R/msg/text/?" + encodeURI(document.title + " - " + location.href);
	}

	$("tweetbutton").onclick = shareSNS;
	$("likebutton").onclick = shareSNS;
	$("hatenabutton").onclick = shareSNS;
}

function setImageZoom(elm) {
	if (elm && "style" in elm) {
		addEvent(elm, "click", zoomImage);
		return;
	}
	var img = document.getElementsByTagName("img");
	for (var i = 0; i < img.length; i++) {
		if (!/nozoom/.test(img[i].className))
			addEvent(img[i], "click", zoomImage);
	}
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
	if (parseInt(layer.style.top, 10) < 0)
		layer.style.top = scrollTop;
	layer.style.left = scrollLeft + (clientWidth - width) / 2 + 10 + "px";
	if (parseInt(layer.style.left, 10) < 0)
		layer.style.left = scrollLeft;

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
			if (removeFunc)
				removeFunc.call(layer);
		}
	};

	addEvent(curtain, "click", closeWindow);
	if (close)
		addEvent(layer, "click", closeWindow);
}

function zoomImage(e) {
	var image = new Image();
	image.src = (e.target || window.event.srcElement).src;
	image.id = "zoomImage";
	showWindow(image, image.width, image.height, true, null);
}

function shareSNS() {
	window.open("", "share", "width=600, height=400, menubar=no, toolbar=no, scrollbars=yes, left=" + (screen.availWidth - 600) / 2 + ", top=" + (screen.availHeight - 400) / 2);
}
