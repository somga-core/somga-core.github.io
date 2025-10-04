const check_box = document.getElementsByClassName("show_contents")[0];
const dict_keys = document.getElementsByClassName("article_dict_keys")[0];
const dict_values = document.getElementsByClassName("article_dict_values")[0];
const key_links = document.getElementsByClassName("article_key_link")

for (let index = 0; index < key_links.length; index++) {
  const key_link = key_links[index];
  key_link.onclick = key_clicked;
}

var keys_visible = true;

if (window.location.hash != "") {
  keys_visible = false;
  check_box.checked = true;
  dict_keys.classList.add("hidden");
  dict_values.classList.remove("hidden");
}

function check_box_clicked() {
  keys_visible = !check_box.checked;

  if (!keys_visible) {
    dict_keys.classList.add("hidden");
    dict_values.classList.remove("hidden");
  }
  else {
    dict_keys.classList.remove("hidden");
    dict_values.classList.add("hidden");
  }
}

function key_clicked() {
  keys_visible = false;
  check_box.checked = true;
  dict_keys.classList.add("hidden");
  dict_values.classList.remove("hidden");
}