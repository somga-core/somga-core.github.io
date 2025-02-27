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

function getGithubInfo(link) {
  var splited_link = link.split(" ")[0].split("/");
  var image_link = link.split(" ")[1];
  var name = link.split(" ").slice(2).join(" ");

  return ["project?id=" + projects.reverse().indexOf(link), name, splited_link[3]];
}

function loadProject(info) {
  var html = loadFile("assets/elements/project.html").split("~");

  return html[0] + info[0] + html[1] + info[1] + html[2] + info[2] + html[3];
}

var projects = loadFile("../projects.txt").split("\n");

for (let i = 0; i < projects.length; i++) {
  document.write(loadProject(getGithubInfo(projects[i])) + "\n");
}
