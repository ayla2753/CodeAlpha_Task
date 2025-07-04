// Filter by category
function filterImages(category) {
  const images = document.querySelectorAll(".gallery-img");
  images.forEach((img) => {
    img.style.display = category === "all" || img.classList.contains(category)
      ? "inline-block"
      : "none";
  });
}

// Apply CSS filter
function applyStyleFilter(filterValue) {
  const images = document.querySelectorAll(".gallery-img");
  images.forEach((img) => {
    img.style.filter = filterValue;
  });
}

// Lightbox functionality
const galleryImages = document.querySelectorAll(".gallery-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
let currentIndex = 0;

galleryImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    openLightbox(img.src);
  });
});

function openLightbox(src) {
  lightbox.style.display = "flex";
  lightboxImg.src = src;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function navigateLightbox(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = galleryImages.length - 1;
  if (currentIndex >= galleryImages.length) currentIndex = 0;
  lightboxImg.src = galleryImages[currentIndex].src;
}
