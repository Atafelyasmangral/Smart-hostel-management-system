// Wait until DOM content is fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Grab all thumbnail images
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const modal = document.getElementById('lightboxModal');
  const modalImg = document.getElementById('lightboxImg');
  const captionText = document.getElementById('lightboxCaption');
  const closeBtn = document.querySelector('.close-btn');

  galleryItems.forEach(img => {
    img.addEventListener('click', function () {
      // Show modal
      modal.style.display = 'block';
      // Set the full-size image source
      modalImg.src = this.src;
      // Set caption (use alt text)
      captionText.textContent = this.alt;
    });
  });

  // Close modal when '×' is clicked
  closeBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // Also close modal when clicking outside the image
  window.addEventListener('click', function (e) {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});
const modal = document.getElementById('lightboxModal');
const modalImg = document.getElementById('lightboxImg');
const captionText = document.getElementById('lightboxCaption');

document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerText = img.alt;
  });
});

document.querySelector('.close-btn').onclick = function () {
  modal.style.display = "none";
}

