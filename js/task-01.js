const catCount = document.querySelectorAll(".item");
console.log("Number of categories:" + catCount.length);
console.log("");
catCount.forEach((elem) => {
  console.log("Category: " + elem.querySelector("h2").textContent);
  console.log("Elements: " + elem.querySelectorAll("li").length);
  console.log("");
});
