const button = document.querySelectorAll("button");

let input = document.querySelector("input");
let string = "";
button.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    if (event.target.innerHTML == "=") {
      string = eval(string);
      string = string.toString();
      input.value = string;
    } else if (event.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (event.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string = string + event.target.innerHTML;
      input.value = string;
    }
  });
});
