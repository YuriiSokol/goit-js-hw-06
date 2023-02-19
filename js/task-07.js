const input = document.getElementById("font-size-control");
const text = document.getElementById("text");
text.setAttribute("style", "font-size:" + input.value + "px");
input.addEventListener("input", () => {
  text.setAttribute("style", "font-size:" + input.value + "px");
});
