document.getElementById("revealBtn").addEventListener("click", function () {
  const message = document.querySelector(".message");
  message.classList.toggle("hidden");

  this.textContent = message.classList.contains("hidden")
    ? "Click for a surprise 💌"
    : "Hide Surprise 💌";
});
