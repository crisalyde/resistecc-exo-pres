let currentSlide = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slides img");
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  const offset = -currentSlide * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
  currentSlide += step;
  showSlides();
}

showSlides();

function toggleAccordion(id) {
  const content = document.getElementById("accordion-content-" + id);
  const arrow = content.previousElementSibling.querySelector(".arrow");
  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    arrow.classList.add("up");
  } else {
    content.style.display = "none";
    arrow.classList.remove("up");
  }
}

function changeNavbarBackground() {
  console.log("Scroll event triggered");
  const navbar = document.getElementById("navbar");
  if (navbar) {
    if (window.scrollY > 0) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  }
}

window.addEventListener("scroll", changeNavbarBackground);

function toggleDrawer() {
  const drawer = document.getElementById("drawer");
  const drawerBackground = document.getElementById("drawer-background");
  drawer.classList.toggle("open");
  drawerBackground.classList.toggle("open");
}

function toggleDropdown(element) {
  const dropdownContent = element.nextElementSibling;
  const dropdownArrow = element.querySelector(".drawer-dropdown-arrow");
  dropdownContent.classList.toggle("open");
  dropdownArrow.classList.toggle("rotated");
}
