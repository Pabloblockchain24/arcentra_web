import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';

export function initServicesSwiper() {
  new Swiper('.servicesSwiper', {
    modules: [Pagination, Autoplay],
    loop: true,
    centeredSlides: true,
    spaceBetween: 30,
    slidesPerView: 1.2,
    grabCursor: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      768: {
        slidesPerView: 2.2
      },
      1024: {
        slidesPerView: 2.8
      }
    }
  });

  // Animación scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}