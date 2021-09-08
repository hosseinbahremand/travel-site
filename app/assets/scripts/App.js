import "../styles/styles.css";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import StickyHeader from "./modules/StickyHeader";

if (module.hot) {
  module.hot.accept(function (err) {
    console.log("An error occurred while accepting new version");
  });
}

new MobileMenu();
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonials"), 60);
new StickyHeader();
