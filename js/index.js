window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  const scrolled = window.scrollY > 50;

  if (scrolled) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
})

function menu() {
  const nav = document.querySelector('.navbar-Item');
  nav.classList.toggle('slide');

  const click = document.querySelector('.btn-menu');
  document.addEventListener('click', function (e) {
    if (!click.contains(e.target) && !nav.contains(e.target)) {
      nav.classList.remove('slide');
    }
  })
}