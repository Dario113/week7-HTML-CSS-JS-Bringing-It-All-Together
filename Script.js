const pArray = document.querySelectorAll("p");
const h1Array = document.querySelectorAll("h1");
const h2Array = document.querySelectorAll("h2");
const h3Array = document.querySelectorAll("h3");
const lightMode = document.getElementById("light-mode"); //id of the sun img
let layout = "light"; //check the layout status

lightMode.addEventListener("click", (e) => {
  document.getElementById("light-mode").classList.toggle("sun-moon-animation");//insert sun animation

  setTimeout(function () {//wait till the end of animation and then change the elements color
    if (layout == "light") {
      document.body.style.backgroundColor = "black";

      for (let i = 0; i < pArray.length; i++) {
        pArray[i].style.color = "white";
      }
      for (let i = 0; i < h1Array.length; i++) {
        h1Array[i].style.color = "white";
      }
      for (let i = 0; i < h2Array.length; i++) {
        h2Array[i].style.color = "floralwhite";
      }

      for (let i = 0; i < h3Array.length; i++) {
        h3Array[i].style.color = "white";
      }
      document.getElementById("light-mode").style.filter = "invert(100%)";
      layout = "dark";
    } else {
      document.body.style.backgroundColor = "white";

      for (let i = 0; i < pArray.length; i++) {
        pArray[i].style.color = "black";
      }
      for (let i = 0; i < h1Array.length; i++) {
        h1Array[i].style.color = "black";
      }
      for (let i = 0; i < h2Array.length; i++) {
        h2Array[i].style.color = "black";
      }

      for (let i = 0; i < h3Array.length; i++) {
        h3Array[i].style.color = "black";
      }
      document.getElementById("light-mode").style.filter = "invert(0%)"
      layout = "light";
    }
    document
      .getElementById("light-mode")
      .classList.toggle("sun-moon-animation");//remove the animation

    ;
  }, 300);
});