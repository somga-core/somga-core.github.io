function loadFile(filePath) {
    var result = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", filePath, false);
    xmlhttp.send();
    if (xmlhttp.status==200) {
      result = xmlhttp.responseText;
    }
    return result;
}

function loadLink(info) {
  var html = loadFile("assets/elements/link.html").split("~");

  return html[0] + info[1] + html[1] + info[2] + html[2] + info[0] + html[3];
}

var links = loadFile("links.txt").split("\n");

for (let i = 0; i < links.length; i++) {
  document.write(loadLink(links[i].split(" ")));
}
