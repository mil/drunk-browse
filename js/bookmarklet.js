load_js("http://github.com/mil/drunk-browse/master/js/underscore.min.js");
load_js("http://github.com/mil/drunk-browse/master/js/raphael-min.js");
load_js("http://github.com/mil/drunk-browse/master/js/bubble_cursor.js");
load_css("http://github.com/mil/drunk-browse/master/css/style.css");

function load_js(url) {
  var script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute("src", url);
}

function load_css(url) {
  var stylesheet = document.createElement("link");
  stylesheet.setAttribute("rel", "stylesheet");
  stylesheet.setAttribute("type", "text/css");
  stylesheet.setAttribute("href", "url);
}
