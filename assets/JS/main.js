document.addEventListener("DOMContentLoaded", function() {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        const images = carousel.querySelectorAll("img");
        let currentIndex = 0;

        const prevButton = carousel.querySelector(".prev");
        const nextButton = carousel.querySelector(".next");

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.toggle("hidden", i !== index);
            });
        }

        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
            showImage(currentIndex);
        });

        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
            showImage(currentIndex);
        });

        showImage(currentIndex);
    });
});
