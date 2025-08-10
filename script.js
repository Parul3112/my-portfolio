// Typewriter effect
const typedText = document.getElementById("typed-text");
const roles = ["Web Developer", "Frontend Enthusiast", "C++ Programmer"];
let i = 0, j = 0, isDeleting = false;

function type() {
  const role = roles[i];
  typedText.textContent = role.substring(0, j);

  if (!isDeleting && j < role.length) {
    j++;
    setTimeout(type, 100);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % roles.length;
    setTimeout(type, 500);
  }
}
type();

// Dark mode toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.innerHTML = document.body.classList.contains('dark-mode')
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

// Scroll reveal
ScrollReveal().reveal('section', {
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  reset: true
});

// Active link on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const inputs = this.querySelectorAll('input, textarea');
  let valid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.borderColor = 'red';
      valid = false;
    } else {
      input.style.borderColor = '#ccc';
    }
  });

  if (valid) {
    alert('Thank you for your message!');
    this.reset();
  } else {
    alert('Please fill out all fields.');
  }
});
