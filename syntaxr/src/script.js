// syntaxr

(function addCSS() {
	let bsLink = document.createElement('link');
	let jsLink = document.createElement('link');
	bsLink.setAttribute('rel','stylesheet');
	jsLink.setAttribute('rel','stylesheet');
	bsLink.setAttribute('href','syntaxr/build/bower_components/bootstrap/dist/css/bootstrap.min.css');
	jsLink.setAttribute('href','syntaxr/build/syntaxr.css')
	document.querySelector('head').appendChild(jsLink)
	document.querySelector('head').appendChild(bsLink)
})();

let select = function(selector) {
	return document.querySelector(selector);
}

function read(selector,keyword) {
	let Wrapper = function(keyword){
		this.before = `<span class="${keyword}">`;
		this.after = `</span>`;
	};
	let wrapper = new Wrapper(keyword);
	let el = select(selector);
	let elText = el.textContent;
	let elRebuild = "";
	let elArr = elText.split(' ');
	console.log(elArr)
	let keyMatch = elArr.indexOf(keyword)
	console.log(keyMatch);
	try {
		if(keyMatch === -1){console.log('error')};
	} catch(e) {
		return;
	}
	let newText = elArr[keyMatch];
	newText = '<span class="syn js-'+keyword+'">'+newText+'</span>';
	console.log(newText)
	elArr[keyMatch] = newText;
	console.log(elArr);

	for(let i=0;i<elArr.length;i++) {
		elRebuild += elArr[i]+' ';
	}
	el.innerHTML = elRebuild;
}
