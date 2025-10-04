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

function loadButtons(links) {
  var html = loadFile("assets/elements/project_content_button.html").split("~");

  var result = ""
  
  for (var title in links) {
    result += html[0] + links[title] + html[1] + title + html[2]
  }

  return result
}

function loadProjectContent(name, info) {
  var html = loadFile("assets/elements/project_content.html").split("~");

  return html[0] + info["image"] + html[1] + name + html[2] + info["author"] + html[3] + loadButtons(info["links"]) + html[4] + info["readme"] + html[5];
}

var projects = eval("(" + loadFile("./projects.json") + ")");
const id = Object.values(projects).length - 1 - new URLSearchParams(window.location.search).get('id')
const project = Object.values(projects)[id]
const name = Object.keys(projects)[id]

if (project){
  document.write(loadProjectContent(name, project));

  var error = document.getElementsByClassName("error_404")[0]
  error.parentNode.removeChild(error);
}