// Hide greeting screen after 2 seconds
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("greeting-screen").classList.add("hide");
  }, 2000); // 2000ms = 2 seconds
});
