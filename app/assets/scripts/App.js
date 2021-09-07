import "../styles/styles.css";
import MobileMenu from "./MobileMenu";

if (module.hot) {
  module.hot.accept(function (err) {
    console.log("An error occurred while accepting new version");
  });
}

const mobileMenu = new MobileMenu();
