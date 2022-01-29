document.addEventListener("DOMContentLoaded", () => {
    // const buttons = document.querySelectorAll(".accordion-header");
    const accordions = document.querySelectorAll(".accordion");

    accordions.forEach((accordion) => {
        const items = accordion.querySelectorAll(".accordion-item");
        items.forEach((item) => {
            const button = item.querySelector(".accordion-header");
            const content = item.querySelector(".accordion-content");
            button.addEventListener("click", () => {
                item.querySelector(".accordion__button").classList.toggle("active");
                content.classList.toggle("active");
            });
        });

    });

});