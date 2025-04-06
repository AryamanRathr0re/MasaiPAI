function tagCleaner(tags) {
  tags
    .map((tag) => tag.trim().toLowerCase())
    .filter((tag, index, self) => self.indexOf(tag) === index)
    .join(",");
}
function clean() {
  let input = document.getElementById("tagInput").value;

  let tags = input.map((tag) => tag.trim()).filter((tag) => tag !== "");

  let cleanTags = tagCleaner(tags);
  document.getElementById("display").textContent = cleanTags;
}
