document.addEventListener("DOMContentLoaded", () => {
    // const buttons = document.querySelectorAll(".accordion-header");
    // создается константа ищется обьект с классом .accordion
    const accordions = document.querySelectorAll(".accordion");
    // выполняется функция форич
    accordions.forEach((accordion) => {
        const items = accordion.querySelectorAll(".accordion-item");
        items.forEach((item) => {
            const button = item.querySelector(".accordion-header");
            const content = item.querySelector(".accordion-content");
            // открытие и закрытие по клику
            button.addEventListener("click", () => {
                item.querySelector(".accordion__button").classList.toggle("active");
                content.classList.toggle("active");
            });
        });

    });

});