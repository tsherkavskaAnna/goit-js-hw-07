import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(`.gallery`);

 const galleryMarkup = galleryItems.map(item => 
   `<div class="gallery__item">
   <a class="gallery__link" href="${item.original}">
     <img
       class="gallery__image"
       src="${item.preview}"
       data-source="${item.original}"
       alt="${item.description}"
     />
   </a>
 </div>`,
 )
  .join(``);

 galleryContainer.insertAdjacentHTML(`beforeend`, galleryMarkup );



 galleryContainer.addEventListener(`click`, onGalleryClick);

 function onGalleryClick (event) {
   event.preventDefault();

   if(!event.target.classList.contains(`gallery__image`)) {
     return;
   }
   makeModal(event);
   }
   

   function makeModal(event) {
    const instance = basicLightbox.create(`
       <img src="${event.target.dataset.source}"width="800" height="600"> `);
       instance.show();


       galleryContainer.addEventListener(`keydown`, onEscClick);

       
       function onEscClick(event) {
         if(!(event.code === `Escape`)) {
           return;
         }
         if(event.code === `Escape`) {
           instance.close();
           galleryContainer.removeEventListener(`keydown`, onEscClick);
         }
       }
     }
