//Team Page

let heroButtons = document.querySelectorAll('.team_members a'),
  lightBox = document.querySelector('#lightbox'),
  LBdesign = document.querySelector('.lightbox-des'),
  exitButton = document.querySelector('.lightbox-close');

function loadHeroData() {
  lightBox.querySelector('h3').textContent = members[this.dataset.member].headline;
  lightBox.querySelector('p').textContent = members[this.dataset.member].bio;
  LBdesign.style.backgroundImage = `url(${members[this.dataset.member].avatar})`;

  lightBox.classList.add('lightbox-active');
}

function closeLightbox(event) {
  event.preventDefault();
  lightBox.classList.remove('lightbox-active');
}

heroButtons.forEach(hero => hero.addEventListener('click', loadHeroData));

//Product Page

let prodButtons = document.querySelectorAll('.product-showcase a'),
  prodBox = document.querySelector('#prodbox'),
  PBdesign = document.querySelector('.prodbox-des'),
  exits = document.querySelector('.prodbox-close');

function loadProdData() {
  prodBox.querySelector('h3').textContent = products[this.dataset.product].name;
  prodBox.querySelector('p').textContent = products[this.dataset.product].description;
  PBdesign.style.backgroundImage = `url(${products[this.dataset.product].image})`;

  prodBox.classList.add('prodbox-active');
}

function closeprodbox(event) {
  event.preventDefault();
  prodBox.classList.remove('prodbox-active');
}

prodButtons.forEach(prod => prod.addEventListener('click', loadProdData));

// Thank You Message

let thankButton = document.querySelectorAll('#contact-form a'),
  thankBox = document.querySelector('#thanks'),
  TYdesign = document.querySelector('.thanks-des'),
  exit = document.querySelector('.thanks-close');

function loadThankData() {
  thankBox.classList.add('thanks-active');
}

function closeThankbox(event) {
  event.preventDefault();
  thankBox.classList.remove('thanks-active');
}

thankButton.forEach(ty => ty.addEventListener('click', loadThankData));

// Newsletter Message

let newsButton = document.querySelectorAll('#newsletter a'),
  newsBox = document.querySelector('#newsbox'),
  NLdesign = document.querySelector('.news-des');

function loadNewsData() {
  newsBox.classList.add('newsbox-active');
}

function closeNewsbox(event) {
  event.preventDefault();
  thankBox.classList.remove('newsbox-active');
}

newsButton.forEach(news => news.addEventListener('click', loadNewsData));
