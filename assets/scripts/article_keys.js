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

function formatName(name) {
  return name.replace(/ /g, "-").toLowerCase();
}

function loadKey(key) {
  var html = loadFile("assets/elements/article_key.html").split("~");
  var info = [key.split("\n")[0], key.split("\n").slice(1).join("\n")];

  return html[0] + formatName(info[0]) + html[1] + info[0] + html[2];
}

const keys = loadFile("articles.md").split("~");

for (let i = 0; i < keys.length; i++) {
  document.write(loadKey(keys[i]));
}