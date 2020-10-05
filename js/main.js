$(".goods__avatar").brazzersCarousel(e => {
    
});

// Показ инфы при ховер

const openItem = item => {
    const container = item.closest(".goods__item");
    const contentBlock = container.find(".goods__content");
    const textBlock = contentBlock.find(".goods__content-block");
    const reqHeight = textBlock.height();

    container.addClass("active");
    contentBlock.height(reqHeight);
}


const closeEveryItem = container => {
    const items = container.find(".goods__content"); // закрытие всех блоков
    const itemContainer = container.find(".goods__item");

    itemContainer.removeClass("active");
    items.height(0);
}

$('.goods__link').hover(e => {
    const $this = $(e.currentTarget);
    const container = $this.closest(".goods__list");
    const elemContainer = $this.closest(".goods__item");

    if (elemContainer.hasClass("active")) {
        closeEveryItem(container);
    } else {
        closeEveryItem(container);
        openItem($this);
    }
});

// модальное окно

$(".goods__link").click(e => {
    event.preventDefault();

/*     $.fancybox.open({
        src: "#modal",
        type: "inline"
    }) */
});

$("[data-goods-id]").click(e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-goods-id");
    const reqSection = $(`[data-open-id=${target}]`);

    $.fancybox.open({
        src: "#modal",
        type: "inline"
    })
});

//slider 

const left = document.querySelector("#left");
const right = document.querySelector("#right");
const itemsList = document.querySelector("#items");
const computedStyles = window.getComputedStyle(itemsList);
const items = document.querySelectorAll(".modal__slider-img");

const minRight = 0;
const step = 160;
const preShownItems = 500 / step;
const maxRight = (items.length - preShownItems) * step;
let currentRight = 0;

itemsList.style.right = currentRight;

right.addEventListener("click", e => {
    if (currentRight < maxRight) {
        currentRight += step;
        itemsList.style.right = `${currentRight}px`;
    }
});

left.addEventListener("click", e => {
    if (currentRight > minRight) {
        currentRight -= step;
        itemsList.style.right = `${currentRight}px`;
    }
});

