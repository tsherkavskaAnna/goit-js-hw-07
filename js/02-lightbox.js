import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryOfImage = document.querySelector(`.gallery`);
console.log(galleryOfImage)


const galleryMarkup = galleryItems.map(item => 
    `<div>
    <a class="gallery__item" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
      />
    </a>
    </div>`,
  )
   .join(``);
 
  galleryOfImage.insertAdjacentHTML(`beforeend`, galleryMarkup );

  const lightbox = new SimpleLightbox(`.gallery a`, {
      captions: true,
      captionsData: `alt`,
      captionsDelay: 250,
  });
