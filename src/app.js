document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
  
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
        });
      });
    });
    // Set current year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('year').textContent = currentYear;
 });
  