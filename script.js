const photo = document.getElementById("photo");
const button = document.getElementById("start-animation");
const body = document.getElementsByTagName("body")[0];

body.style.background = "skyblue";
button.addEventListener("click", () => {
  // Apply animation by changing transform property
  photo.style.transform = "translateX(300px) rotate(360deg)";

  // Reset after 2 seconds to allow repeated animations
  setTimeout(() => {
    photo.style.transform = "translateX(0) rotate(0)";
    body.style.background = getRandomColor();
  }, 2000);
});

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
