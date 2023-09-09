import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML(
  "afterbegin",
  galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description},"
    />
  </a>
</div>`;
    })
    .join("")
);

function openModalImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `
      <img src="${event.target.getAttribute("data-source")}">,
  `,
    {
      onShow: () => window.addEventListener("keydown", onEsc),
      onClose: () => window.removeEventListener("keydown", onEsc),
    }
  );
  const onEsc = (event) => {
    if (event.code === "Escape") instance.close();
  };
  instance.show();
}

gallery.addEventListener("click", openModalImg);
