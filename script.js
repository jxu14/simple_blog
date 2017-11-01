var button = document.getElementById("submit");
button.addEventListener("click", function() {
  var title = document.getElementById("title");
  var newTitle = document.createElement("h1");
  newTitle.innerHTML = title.value;
  var post = document.getElementById("post");
  var newPost = document.createElement("p");
  newPost.innerHTML = post.value;
  var section = document.getElementById("main");
  section.append(newTitle);
  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "delete";
  deleteButton.addEventListener("click", function() {
    section.removeChild(newPost);
    section.removeChild(newTitle);
    section.removeChild(deleteButton);
  })
  if (post.value.replace(/^\s*/, "").replace(/\s*$/, "") != "") {
    section.append(newPost);
    section.append(deleteButton);
  } else {
    var invalid = document.getElementById("invalid");
    invalid.innerHTML = "Please Type Something in the Text Fields";
  }

  title.value = "";
  post.value = "";
})
