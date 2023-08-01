const data = [
  {
    id: 1,
    src: "./assets/1.jpg",
  },
  {
    id: 2,
    src: "./assets/2.jpg",
  },
  {
    id: 3,
    src: "./assets/3.jpg",
  },
  {
    id: 4,
    src: "./assets/4.jpg",
  },
  {
    id: 5,
    src: "./assets/5.jpg",
  },
  {
    id: 6,
    src: "./assets/6.jpg",
  },
  {
    id: 7,
    src: "./assets/7.jpg",
  },
  {
    id: 8,
    src: "./assets/8.jpg",
  },
  {
    id: 9,
    src: "./assets/9.jpg",
  },
  {
    id: 10,
    src: "./assets/10.jpg",
  },
];

const swiperWrapper = document.querySelector(".swiper-wrapper");

// Loop through the data and create the HTML components
data.forEach((item) => {
  // Create the main elements
  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide");

  const card = document.createElement("div");
  card.classList.add("card");

  const cardImage = document.createElement("div");
  cardImage.classList.add("card__image");

  const img = document.createElement("img");
  img.src = item.src;
  img.alt = "";

  // Append the elements to create the structure
  cardImage.appendChild(img);

  card.appendChild(cardImage);

  swiperSlide.appendChild(card);

  swiperWrapper.appendChild(swiperSlide);
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 1.5,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  watchSlidesProgress: true,
  breakpoints: {
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
      centeredSlides: true,
    },
    700: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: true,
    },
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
