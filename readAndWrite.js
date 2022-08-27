function getInformationsAndPostThem() {
  //ghater the informatios
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const message = document.getElementById("message").value;

  //create the new elements
  const h1 = document.createElement("h1");
  const h3 = document.createElement("h3");
  const p = document.createElement("p");
  const divider = document.createElement("p");

  //assign the values
  h1.innerHTML = `Title: ${title}`;
  h3.innerHTML = `Author: ${author}`;
  p.innerHTML = `${message}`;
  divider.innerHTML =
    "__________________________________________________________________________________________________";

  //append them
  document.getElementById("output-message-div").appendChild(h1);
  document.getElementById("output-message-div").appendChild(h3);
  document.getElementById("output-message-div").appendChild(p);
  document.getElementById("output-message-div").appendChild(divider);
}

function sendEmail() {
  //ghater the informatios
  const subject = document.getElementById("subject").value;
  const text = document.getElementById("text").value;
  //create and assign the link
  document.getElementById(
    "linkEmail"
  ).href = `mailto:jeSuisNapoléon@versailles.com?subject=${subject}&body=${text}`;
}

//attempt to open the file but I get back a CORS policy error
function readFile() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    console.log(this.responseText);
  };

  xhttp.open("GET", "PostSaved.txt");
  xhttp.send();
}