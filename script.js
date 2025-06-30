// Select all filter items and gallery images
const filterItems = document.querySelectorAll(".item");
const galleryImages = document.querySelectorAll(".gallery .image");

window.onload = () => {
    filterItems.forEach(item => {
        item.addEventListener("click", () => {
            // Remove active class from all filter items
            filterItems.forEach(el => el.classList.remove("active"));

            // Add active class to clicked item
            item.classList.add("active");

            // Get selected category
            const selectedCategory = item.getAttribute("data-name").toLowerCase();

            // Show/hide images based on category
            galleryImages.forEach(image => {
                const imageCategory = image.getAttribute("data-name").toLowerCase();

                if (selectedCategory === "all" || selectedCategory === imageCategory) {
                    image.style.display = "block";
                } else {
                    image.style.display = "none";
                }
            });
        });
    });
};








