const backToTopBtn = document.querySelector(".backToTop");
const headerElement = document.querySelector("header");
const mobButton = document.querySelector(".mobile");
const nav = document.querySelector("nav ul");
const menuItems = document.querySelectorAll("nav ul li a");

function scrollFun() {
  if (
    document.body.scrollTop > 1000 ||
    document.documentElement.scrollTop > 1000
  ) {
    backToTopBtn.style.display = "block";
    headerElement.classList.add("displayBtn");
  } else {
    backToTopBtn.style.display = "none";
    headerElement.classList.remove("displayBtn");
  }
}

backToTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  headerElement.classList.toggle("displayBtn");
});

window.addEventListener("scroll", scrollFun);
backToTopBtn.addEventListener("click", topFunction);

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

const toggleMenu = () => {
  nav.classList.toggle("responsive");
};

mobButton.addEventListener("click", toggleMenu);
menuItems.forEach((item) => item.addEventListener("click", toggleMenu));
