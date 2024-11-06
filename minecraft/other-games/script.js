function showContent(game) {
  // Hide all game content
  const gameContents = document.querySelectorAll(".game-content");
  gameContents.forEach((content) => (content.style.display = "none"));

  // Show the selected game's content
  document.getElementById(game).style.display = "block";
}

// Add event listeners for trailer buttons
document
  .getElementById("trailerButtonMinecraft")
  .addEventListener("click", function () {
    window.open("https://www.youtube.com/watch?v=minecraft-trailer", "_blank");
  });
document
  .getElementById("trailerButtonDungeons")
  .addEventListener("click", function () {
    window.open("https://www.youtube.com/watch?v=dungeons-trailer", "_blank");
  });
document
  .getElementById("trailerButtonLegends")
  .addEventListener("click", function () {
    window.open("https://www.youtube.com/watch?v=legends-trailer", "_blank");
  });
document
  .getElementById("trailerButtonEducation")
  .addEventListener("click", function () {
    window.open("https://www.youtube.com/watch?v=education-trailer", "_blank");
  });
