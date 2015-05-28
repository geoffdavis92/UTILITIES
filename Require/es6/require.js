class Plugin {
  constructor(name,site,code) {
    this.name = name;
    this.site = site;
    this.code = code;
  }
  require(module) {
    if(!module) {
      try {
        throw "No Module!"
      } catch(e) {
        console.log(e);
      }
    } else {
      let head = document.querySelector('head');
      let html = head.innerHTML();
      html += `<script src="${module.code}"></script>`
    }
  }
}

let jquery = new Plugin('jquery','http://www.jquery.com/','https://code.jquery.com/jquery-2.1.3.min.js');

require(jquery);