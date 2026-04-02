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

function loadProject(project_id, info) {
  var html = loadFile("assets/elements/project.html").split("~");

  return html[0] + "./project?id=" + project_id + html[1] + info["name"] + html[2] + info["author"] + html[3];
}

var projects = eval("(" + loadFile("../projects.json") + ")")["projects"];

for (var project_id in projects) {
  document.write(loadProject(project_id, projects[project_id]) + "\n");
}
