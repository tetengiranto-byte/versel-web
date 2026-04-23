
const imgs= [
  "images/bandulan.jpg",
  "images/pantai.jpg",
  "images/nyilem.jpg"
]
const container = document.getElementById("container");
function render() {
  let imgsDOM = "";
  for (let i = 0; i < imgs.length; i++ ) {
imgsDOM += `<img alt="beach views" class="tea-img" src=${imgs[i]}>`
  }
  container.innerHTML = imgsDOM;
};
render();

