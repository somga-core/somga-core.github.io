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

function loadMarkdown(info) {
  var html = loadFile("assets/elements/other.html").split("~");
  
  return html[0] + info + html[1];
}

const markdowns = loadFile("../other.txt").split("~");

for (let i = 0; i < markdowns.length; i++) {
  document.write(loadMarkdown(markdowns[i]));
}