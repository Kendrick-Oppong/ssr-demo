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

  // Add click listeners to agenda items
  const agendaItems = document.querySelectorAll(
    ".slide:nth-child(2) .bullet-points li"
  );
  agendaItems.forEach((item, index) => {
    item.style.cursor = "pointer";
    item.addEventListener("click", () => {
      // Map agenda items to their corresponding slide numbers
      const slideMap = {
        0: 2, // Introduction to SSR -> Slide 3
        1: 3, // Benefits and Considerations -> Slide 4
        2: 4, // Rendering Modes -> Slide 5
        3: 5, // Angular SSR Architecture -> Slide 6
        4: 6, // Step-by-Step Setup -> Slide 7
        5: 7, // Full-Application Hydration -> Slide 8
        6: 8, // Incremental Hydration -> Slide 9
        7: 9, // Event Replay -> Slide 10
        8: 10, // Static Site Generation -> Slide 11
        9: 11, // Hybrid Rendering -> Slide 12
        10: 12, // Handling Browser-Specific Code -> Slide 13
        11: 13, // SEO Optimization -> Slide 14
        12: 14, // Performance Benefits -> Slide 15
        13: 15, // Common Pitfalls -> Slide 16
      };

      const targetSlide = slideMap[index];
      if (targetSlide !== undefined) {
        currentSlide = targetSlide;
        showSlide(currentSlide);
      }
    });
  });

  // Keyboard navigation
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
      nextSlide();
    } else if (event.key === "ArrowLeft") {
      previousSlide();
    }
  });
});
