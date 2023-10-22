const menuIcon = document.getElementById("menu-toggle");
const clsIconn = document.getElementById("clsIcon");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", function () {
  menu.classList.add("reActive");
  menu.style.display = "flex";
});

clsIconn.addEventListener("click", function () {
  menu.classList.remove("reActive");
});

const menu_link = document.querySelectorAll(".hide");
for (let i = 0; i < menu_link.length; i++) {
  menu_link[i].addEventListener("click", function () {
    menu.classList.remove("reActive");
  });
}
let community = document.querySelector(".service-section-club");
let courses = document.querySelector(".service-section-child-courses");
let consultation = document.querySelector(
  ".service-section-child-consultation"
);
let communitybutton = document.getElementById("Community");
let coursesbutton = document.getElementById("Courses");
let consultationbutton = document.getElementById("Consultation");
consultationbutton.addEventListener("click", function () {
    community.style.display = "none";
    consultation.style.display = "grid";
    courses.style.display = "none";
    consultationbutton.classList.add("active");
    communitybutton.classList.remove("active");
    coursesbutton.classList.remove("active");
  });
communitybutton.addEventListener("click", function () {
    community.style.display = "grid";
    consultation.style.display = "none";
    courses.style.display = "none";
    communitybutton.classList.add("active");
    coursesbutton.classList.remove("active");
    consultationbutton.classList.remove("active");
  });
coursesbutton.addEventListener("click", function () {
  community.style.display = "none";
  consultation.style.display = "none";
  courses.style.display = "grid";
  coursesbutton.classList.add("active");
  communitybutton.classList.remove("active");
  consultationbutton.classList.remove("active");
});

