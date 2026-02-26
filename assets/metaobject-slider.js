const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    centeredSlides: true,
    spaceBetween: 30,
    
    
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    
    breakpoints: {
      320: { slidesPerView: 1 },
      768: { slidesPerView: 1.5 },
      1024: { slidesPerView: 2 }
    }
  });