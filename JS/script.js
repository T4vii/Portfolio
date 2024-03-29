//togle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      // active navbar link
      navLinks.forEach(links => {
        links.classList.remove('active');
        document
          .querySelector('header nav a[href*=' + id + ']')
          .classList.add('active');
      });
    }
  });
  // sticky header
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  // remove toggle icon and navbar when click navbar links (scroll)
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');

  //animation footer on scroll
  let footer = document.querySelector('footer');

  footer.classList.toggle(
    'show-animate',
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
};

// Scroll Reveal
window.addEventListener('scroll', reveal);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

// Project Slider
var swiper = new Swiper('.mySwiper', {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//Form deploy

const form = document.querySelector('form');
const fullName = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

function sendEmail() {
  const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${message.value}`;

  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'it.t4vi@gmail.com',
    Password: 'B34810551A46A2EFC468E07C1E31A435F7E6',
    To: 'it.t4vi@gmail.com',
    From: 'it.t4vi@gmail.com',
    Subject: subject.value,
    Body: bodyMessage,
  }).then(message => alert(message));
}

form.addEventListener('submit', e => {
  e.preventDefault();

  sendEmail();
});
