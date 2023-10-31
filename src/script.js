const navbarMobile = document.querySelector("#navbar-mobile");

// function on navbar website
function checkScreenSize() {
  if (window.innerWidth > 640) {
    // if screen more than 640px will show navbar everytime.
    navbarMobile.style.display = "block";
  } else {
    // if screen less or equal to 640px let check scroll website
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        // if scroll down more than 20px will show navbar
        navbarMobile.style.display = "block";
      } else {
        // if scroll up will hide navbar
        navbarMobile.style.display = "none";
      }
    });
  }
}
// เรียกฟังก์ชันเพื่อตรวจสอบขนาดหน้าจอเมื่อโหลดหน้าเว็บ
window.addEventListener("load", checkScreenSize);

// เรียกฟังก์ชันเพื่อตรวจสอบขนาดหน้าจอเมื่อปรับขนาดหน้าต่าง
window.addEventListener("resize", checkScreenSize);

// function send email
function sendMail() {
  const params = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_jiwwa6d";
  const templateID = "template_3ec8gud";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Thank you, " + params["name"] + " ! Your message has been sent");
    })
    .catch((err) => console.log(err));
}

// Portfolio
const carousel = document.querySelector(".carousel-portfolio");
const arrowBtns = document.querySelectorAll("#wrapper button");
const firstCardWidth = carousel.querySelector(
  ".container-image-portfolio"
).offsetWidth;

// Add click arrows prev next image
arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth;
  });
});

// (Draging)
let isDragging = false,
  startX,
  startScrollLeft;

const dragStart = (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};

const dragging = (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};
const dragStop = () => {
  isDragging = false;
  carousel.classList.remove("dragging");
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
