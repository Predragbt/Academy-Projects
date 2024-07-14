export function setupVideoHandler() {
  document.querySelector(".btn-video").addEventListener("click", function () {
    const bgImage = document.querySelector(".bg-image");
    const video = document.querySelector(".bg-video");

    // Hide the background image
    bgImage.style.backgroundImage = "none";

    // Show the video and play it
    video.style.display = "block";
    video.play();

    // Revert back when the video ends
    video.addEventListener("ended", function () {
      video.style.display = "none";
      bgImage.style.backgroundImage =
        'url("/images/maximalfocus-VT4rx775FT4-unsplash 1.jpg")';
    });
  });
}