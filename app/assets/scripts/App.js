import "../styles/styles.css";
import "lazysizes";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";
import ClientArea from "./modules/ClientArea";

new ClientArea();
new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonials"), 60);
new StickyHeader();
let modal;

document.querySelectorAll(".open-modal").forEach((el) => {
  el.addEventListener("click", (e) => {
    if (modal === undefined) {
      e.preventDefault();
      import(/* webpackChunkName: "modal" */ "./modules/Modal")
        .then((res) => {
          modal = new res.default();
          modal.openModal();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      modal.openModal();
    }
  });
});

if (module.hot) {
  module.hot.accept(function (err) {
    console.log("An error occurred while accepting new version");
  });
}
