document.querySelectorAll(".dropdown-item").forEach((ele) => {
  console.log(ele);
});

console.log(document.querySelectorAll(".dropdown-item"));

function clickNavItem(e) {
  document
    .querySelector(".nav__section--item a.active")
    .classList.remove("active");
  e.target.classList.add("active");
}

function clickSideNavItem(e) {
  document
    .querySelector(".modal--item .nav-link.active")
    .classList.remove("active");
  e.target.classList.add("active");
  document
    .querySelector(".nav__section_sidebar.active")
    .classList.remove("active");
}

function openSidebar(e) {
  document.querySelector(".nav__section_sidebar").classList.add("active");
}

function closeSidebar(e) {
  console.log(e.target.classList);
  if (e.target.classList.contains("nav__section_sidebar")) {
    document
      .querySelector(".nav__section_sidebar.active")
      .classList.remove("active");
  }
}

function clickDropdownItem(e) {
  document.querySelector(".dropdown-item").classList.remove("after_content");
  e.target.classList.add("after_content");
}

// video slider
function handleIFrame() {
  let video = document.querySelector(".carousel-item.active iframe");
  let videoSrc = video.getAttribute("src");
  video.setAttribute("src", "");
  video.setAttribute("src", videoSrc);
}
