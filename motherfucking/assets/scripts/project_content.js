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
  var source_link = link.split(" ")[0];
  var name = link.split(" ").slice(2).join(" ");

  return [name, splited_link[3], source_link, source_link + "/archive/refs/heads/main.zip", "https://raw.githubusercontent.com/" + splited_link[3] + "/" + splited_link[4] + "/main/README.md"];
}

function loadProjectContent(info) {
  var html = loadFile("assets/elements/project_content.html").split("~");

  return html[0] + info[0] + html[1] + info[1] + html[2] + info[2] + html[3] + info[3] + html[4] + info[4] + html[5];
}

const id = new URLSearchParams(window.location.search).get('id')
const links = loadFile("../projects.txt").split("\n")[id]

document.write(loadProjectContent(getGithubInfo(links)));
