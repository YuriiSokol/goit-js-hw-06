const nameinput = document.getElementById("name-input");
const nameoutput = document.getElementById("name-output");

nameinput.addEventListener("input", (event) => {
  nameoutput.textContent = event.currentTarget.value;
  if (nameoutput.textContent.length === 0) nameoutput.textContent = "Anonimus";
});
