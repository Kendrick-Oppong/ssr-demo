document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  // Show the initial slide
  showSlide(currentSlide);

  // Navigation functions
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
    // Update slide counter for each slide
    const currentSlideCounter = slides[index].querySelector(".slide-counter");
    if (currentSlideCounter) {
      currentSlideCounter.textContent = `${index + 1}/${totalSlides}`;
    }
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === totalSlides - 1;
  }

  function nextSlide() {
    if (currentSlide < totalSlides - 1) {
      currentSlide++;
      showSlide(currentSlide);
    }
  }

  function previousSlide() {
    if (currentSlide > 0) {
      currentSlide--;
      showSlide(currentSlide);
    }
  }

  // Event listeners for buttons
  prevBtn.addEventListener("click", previousSlide);
  nextBtn.addEventListener("click", nextSlide);

  // Keyboard navigation
  document.addEventListener("keydown", (event) => {
    console.log("Key pressed:", event.key); // Debug log to confirm key events
    if (event.key === "ArrowRight") {
      nextSlide();
    } else if (event.key === "ArrowLeft") {
      previousSlide();
    }
  });
});
