export function setupVideoHandler() {
  document.querySelector(".btn-video").addEventListener("click", function () {
    const bgImage = document.querySelector(".bg-image");
    const video = document.querySelector(".bg-video");

    // Hide the background image by setting the background to none
    bgImage.style.backgroundImage = "none";

    // Show the video and play it
    video.style.display = "block";
    video.play();

    // Add event listener to revert back when the video ends
    video.addEventListener("ended", function () {
      // Hide the video
      video.style.display = "none";

      // Restore the background image
      bgImage.style.backgroundImage =
        'url("/images/maximalfocus-VT4rx775FT4-unsplash 1.jpg")';
    });
  });
}
