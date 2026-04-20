const openButtons = document.querySelectorAll(".open-video");
const videoModal = document.getElementById("videoModal");
const modalVideo = document.getElementById("modalVideo");
const modalSource = modalVideo.querySelector("source");
const videoClose = document.getElementById("videoClose");
const modalOverlay = document.querySelector(".video-modal-overlay");

function openVideoModal(videoSrc) {
  modalSource.src = videoSrc;
  modalVideo.load();

  videoModal.classList.add("active");
  document.body.style.overflow = "hidden";

  modalVideo.play().catch(() => {});
}

function closeVideoModal() {
  videoModal.classList.remove("active");
  document.body.style.overflow = "";

  modalVideo.pause();
  modalVideo.currentTime = 0;
  modalSource.src = "";
  modalVideo.load();
}

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const videoSrc = button.dataset.video;
    openVideoModal(videoSrc);
  });
});

videoClose.addEventListener("click", closeVideoModal);
modalOverlay.addEventListener("click", closeVideoModal);

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeVideoModal();
  }
});