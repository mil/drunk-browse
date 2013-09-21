var bubble_cursor = (function(my) {
  var svg = null;
  var link = null;
  var poly = null;
  var mouse_x = null;
  var mouse_y = null;
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;
  var paper = null;

  function get_closest_link() {
    var links = document.getElementsByTagName("a");
    var closest_link = null;
    var smallest_del = null;

    _.each(links, function(link) {
      link.className = "";
      var rect = link.getBoundingClientRect();
      var del_x = mouse_x - rect.left + (0.5 * rect.width); 
      var del_y = mouse_y - rect.top + (0.5 * rect.height);
      var del = Math.abs(del_x) + Math.abs(del_y);
      if (!smallest_del || del < smallest_del) {
        smallest_del = del;
        closest_link = link;
      }
    });
    closest_link.className = "active";
    return closest_link;
  }
  function recalculate() {
    link = get_closest_link();
    var points = [
        { "x" : mouse_x, "y" : mouse_y },
        { "x" : link.getBoundingClientRect().left, "y" : link.getBoundingClientRect().top  + link.getBoundingClientRect().height},
        { "x" : link.getBoundingClientRect().left + link.getBoundingClientRect().width, "y" : link.getBoundingClientRect().top  + link.getBoundingClientRect().height}
    ];
    var first = points[0];
    points.shift();
    var str = "M" + first.x + "," + first.y;
    _.each(points, function(p) {
      str = str + "L" + p.x + "," + p.y;
    });
    poly.animate({path : str });

  }
  function setup_event_handlers() {
    window.onmousemove = function(e) {
      mouse_x = e.clientX;
      mouse_y = e.clientY;
    }
    window.onload = function() {
      //Make an SVG Container
      paper = Raphael(0,0,w,h);
      poly = paper.path("");
      poly.attr("fill", "#e6edfc");
      poly.attr("fill-opacity", 0.5);
      poly.attr("stroke", "#fff");

      setInterval(recalculate, 100);
    }
    document.onclick = function(e) {
      window.location = link.getAttribute("href");
    }
  }

  setup_event_handlers();
}());
