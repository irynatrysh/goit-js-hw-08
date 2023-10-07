// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

function createGalleryMarkup(items) {
  return items
    .map(
      (item) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${item.original}">
            <img
              class="gallery__image"
              src="${item.preview}"
              alt="${item.description}"
            />
          </a>
        </li>`
    )
    .join("");
}


const galleryList = document.querySelector('.gallery');

const galleryMarkup = createGalleryMarkup(galleryItems);
galleryList.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    lightbox.close();
  }
});