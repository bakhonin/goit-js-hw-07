import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListImg = document.querySelector('.gallery');

const createGalleryItems = galleryItems.reduce((acc, { preview, original, description }) => 
 acc + `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
, '');

galleryListImg.insertAdjacentHTML('beforeend', createGalleryItems);

galleryListImg.addEventListener('click', onImgClick);

function onImgClick(evt) {
    evt.preventDefault();
    const { target } = evt;
    const imgEl = target.dataset.source;

    if (!target.classList.contains("gallery__image")) {
        return;
    }

    const instance = basicLightbox.create(`
        <img src="${imgEl}" width="800" height="600">
    `);

    instance.show();
    document.addEventListener("keydown", onCloseEscape);

    function onCloseEscape (evt) {
        if (evt.code === "Escape") {
            instance.close();
            document.removeEventListener("keydown", onCloseEscape);
        } console.log(evt);
    };
}



