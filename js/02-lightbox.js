import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML(
  "afterbegin",
  galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class = "gallery__item" href= "${original}">
    <img class = "gallery__image" src = ${preview} alt = "${description}">
    </a>
    `;
    })
    .join("")
);
const lightbox = new SimpleLightbox(".gallery .gallery__item ", {
  captionsData: "alt",
  captionDelay: 180,
});
