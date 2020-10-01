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