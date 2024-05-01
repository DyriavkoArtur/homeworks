document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".slider-dots");
    const slider = document.querySelector(".slider");
    const prevSlideBtn = document.querySelector(".prev-slide");
    const nextSlideBtn = document.querySelector(".next-slide");
    let currentSlide = 0;
    let slideInterval = setInterval(nextSlide, 3000);

    slides[0].classList.add("active");

    slides.forEach((slide, index) => {
        const dot = document.createElement("div");
        dot.classList.add("slider-dot");
        if (index === 0) dot.classList.add("active-dot");
        dot.addEventListener("click", () => {
            clearInterval(slideInterval);
            setActiveSlide(index);
            slideInterval = setInterval(nextSlide, 3000);
        });
        dotsContainer.appendChild(dot);
    });

    prevSlideBtn.addEventListener("click", () => {
        clearInterval(slideInterval);
        prevSlide();
        slideInterval = setInterval(nextSlide, 3000);
    });

    nextSlideBtn.addEventListener("click", () => {
        clearInterval(slideInterval);
        nextSlide();
        slideInterval = setInterval(nextSlide, 3000);
    });

    function setActiveSlide(index) {
        currentSlide = index;
        slides.forEach(slide => slide.classList.remove("active"));
        dotsContainer.querySelectorAll(".slider-dot").forEach(dot => dot.classList.remove("active-dot"));
        slides[index].classList.add("active");
        dotsContainer.querySelectorAll(".slider-dot")[index].classList.add("active-dot");
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        setActiveSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        setActiveSlide(currentSlide);
    }
});
