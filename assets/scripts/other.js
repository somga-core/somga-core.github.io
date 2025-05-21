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
  return name.replace(" ", "-").toLowerCase();
}

function loadMarkdown(markdown) {
  var html = loadFile("assets/elements/other.html").split("~");
  var info = [markdown.split("\n")[0], markdown.split("\n").slice(1).join("\n")];
  console.log(markdown.split("\n").splice(0, 1))

  return html[0] + formatName(info[0]) + html[1] + formatName(info[0]) + html[2] + info[0] + html[3] + info[1] + html[4];
}

const markdowns = loadFile("other.txt").split("~");

for (let i = 0; i < markdowns.length; i++) {
  document.write(loadMarkdown(markdowns[i]));
}