import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListImg = document.querySelector('.gallery');

const createGalleryItems = galleryItems.map(({ preview, original, description }) => 
 `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
);

galleryListImg.insertAdjacentHTML('beforeend', createGalleryItems.join(''));

galleryListImg.addEventListener('click', onImgClick);

function onImgClick(evt) {
    evt.preventDefault();
    const { target } = evt;
    const imgEl = target.dataset.source ?? target.closest(".gallery__image");

      if (!target.classList.contains("gallery__image")) {
        return;
      }else{
        const instance = basicLightbox.create(`
        <img src="${imgEl}" width="800" height="600">
    `)
         
    instance.show(galleryListImg.addEventListener("keydown", (evt) => {
      if(evt.code === "Escape"){
        instance.close();
        galleryListImg.removeEventListener("keydown", onImgClick);
      }
      console.log(evt);
    }))
};
}



