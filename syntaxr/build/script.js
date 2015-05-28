// syntaxr

'use strict';

(function addCSS() {
	var bsLink = document.createElement('link');
	var jsLink = document.createElement('link');
	bsLink.setAttribute('rel', 'stylesheet');
	jsLink.setAttribute('rel', 'stylesheet');
	bsLink.setAttribute('href', 'syntaxr/build/bower_components/bootstrap/dist/css/bootstrap.min.css');
	jsLink.setAttribute('href', 'syntaxr/build/syntaxr.css');
	document.querySelector('head').appendChild(jsLink);
	document.querySelector('head').appendChild(bsLink);
})();

var select = function select(selector) {
	return document.querySelector(selector);
};

function read(selector, keyword) {
	var Wrapper = function Wrapper(keyword) {
		this.before = '<span class="' + keyword + '">';
		this.after = '</span>';
	};
	var wrapper = new Wrapper(keyword);
	var el = select(selector);
	var elText = el.textContent;
	var elRebuild = '';
	var elArr = elText.split(' ');
	console.log(elArr);
	var keyMatch = elArr.indexOf(keyword);
	console.log(keyMatch);
	try {
		if (keyMatch === -1) {
			console.log('error');
		};
	} catch (e) {
		return;
	}
	var newText = elArr[keyMatch];
	newText = '<span class="syn js-' + keyword + '">' + newText + '</span>';
	console.log(newText);
	elArr[keyMatch] = newText;
	console.log(elArr);

	for (var i = 0; i < elArr.length; i++) {
		elRebuild += elArr[i] + ' ';
	}
	el.innerHTML = elRebuild;
}