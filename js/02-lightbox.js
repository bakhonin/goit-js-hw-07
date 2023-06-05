import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

const createGalleryItems = galleryItems.map(({ preview, original, description }) =>
  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
     <img class="gallery__image" src="${preview}" alt="${description}" title="${description}"/>
  </a>
</li>`
);

galleryList.insertAdjacentHTML('beforeend', createGalleryItems.join(''));

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionDelay: 250,
});

console.log(galleryItems);

