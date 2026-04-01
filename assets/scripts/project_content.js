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

function loadProjectContent(info) {
  var html = loadFile("assets/elements/project_content.html").split("~");

  return html[0] + info["name"] + html[1] + info["author"] + html[2] + loadButtons(info["links"]) + html[3] + info["readme"] + html[4];
}

var projects = eval("(" + loadFile("./projects.json") + ")")

const project_id_const = new URLSearchParams(window.location.search).get('id')
var project_id = ""
if (Object.keys(projects["redirects"]).includes(project_id_const)) {
  project_id = projects["redirects"][project_id_const];
} else {
  project_id = project_id_const;
}
var project = projects["projects"][project_id];

if (project){
  document.write(loadProjectContent(project));

  var error = document.getElementsByClassName("error_404")[0]
  error.parentNode.removeChild(error);
}