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

function loadProject(name, info, i) {
  var html = loadFile("assets/elements/project.html").split("~");

  return html[0] + "./project?id=" + i + html[1] + info["image"] + html[2] + name + html[3] + info["author"] + html[4];
}

var projects = eval("(" + loadFile("./projects.json") + ")");
var i = Object.keys(projects).length - 1;

for (var project_name in projects) {
  document.write(loadProject(project_name, projects[project_name], i) + "\n");
  i--;
}
