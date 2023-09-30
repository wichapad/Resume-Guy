const navbarMobile = document.querySelector("#navbar-mobile");

function checkScreenSize() {
    if (window.innerWidth > 640) {
      // if screen more than 640px will show navbar everytime.
      navbarMobile.style.display = 'block';
    } else {
      // if screen less or equal to 640px let check scroll website
      // ให้ตรวจสอบการเลื่อนหน้าเว็บ
      window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
          // if scroll down more than 20px will show navbar
          navbarMobile.style.display = 'block';
        } else {
          // if scroll up will hide navbar
          navbarMobile.style.display = 'none';
        }
      });
    }
  }
  
  // เรียกฟังก์ชันเพื่อตรวจสอบขนาดหน้าจอเมื่อโหลดหน้าเว็บ
  window.addEventListener('load', checkScreenSize);
  
  // เรียกฟังก์ชันเพื่อตรวจสอบขนาดหน้าจอเมื่อปรับขนาดหน้าต่าง
  window.addEventListener('resize', checkScreenSize);

