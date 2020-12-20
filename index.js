document .querySelector(".toggleButton") .addEventListener("click", darkMode);
   function darkMode() {
      var element = document.body;
      element.classList.toggle("darkMode");
   }
