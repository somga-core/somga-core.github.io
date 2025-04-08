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

function loadWord(info) {
  var html = loadFile("assets/elements/dictionary.html").split("~");

  return html[0] + info[0] + html[1] + info[1] + html[2];
}

var words = loadFile("../dictonary.txt").split("\n");

for (let i = 0; i < words.length; i++) {
  document.write(loadWord(words[i].split(" ")) + "\n");
}
