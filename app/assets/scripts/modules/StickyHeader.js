import throttle from "lodash/throttle";
import debounce from "lodash/debounce";

export default class StickyHeader {
  constructor() {
    this.innerHeight = window.innerHeight;
    this.header = document.querySelector(".site-header");
    this.pageSections = document.querySelectorAll(".page-section");
    this.scrollThrottle = throttle(this.timeToStick, 200);
    this.previousScrollY = window.scrollY;
    this.event();
  }

  event() {
    window.addEventListener("scroll", () => this.scrollThrottle());
    window.addEventListener(
      "resize",
      debounce(() => {
        this.innerHeight = window.innerHeight;
      }, 333)
    );
  }

  timeToStick() {
    this.determineScrollDirection();
    if (window.scrollY > 60) {
      this.header.classList.add("site-header--dark");
    } else {
      this.header.classList.remove("site-header--dark");
    }

    this.pageSections.forEach((el) => this.calSection(el));
  }

  determineScrollDirection() {
    if (window.scrollY > this.previousScrollY) {
      this.scrollDirection = "down";
    } else {
      this.scrollDirection = "up";
    }
    this.previousScrollY = window.scrollY;
  }

  calSection(el) {
    if (
      window.scrollY + this.innerHeight > el.offsetTop &&
      window.scrollY < el.offsetTop + el.offsetHeight
    ) {
      const scrollPercent =
        (el.getBoundingClientRect().top / this.innerHeight) * 100;

      if (
        (scrollPercent < 33 &&
          scrollPercent > -0.1 &&
          this.scrollDirection == "down") ||
        (scrollPercent < 33 && this.scrollDirection == "up")
      ) {
        const matchingLink = el.getAttribute("data-matching-link");
        document
          .querySelectorAll(".site-header ul a")
          .forEach((el) => el.classList.remove("is-current-link"));

        document.getElementById(matchingLink).classList.add("is-current-link");
      }
    }
  }
}
