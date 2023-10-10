
const tabButtons = document.querySelectorAll('.tab-toggle'),
      tabContents = document.querySelectorAll('.tab-content')

if (tabButtons.length > 0) {
  tabContents[0].classList.add('tab-content--active');
  tabButtons[0].classList.add('tab-toggle--active');

  tabButtons.forEach(tabButton => {
    tabButton.addEventListener('click', () => {
      const tabId = tabButton.getAttribute('data-tab');

      tabContents.forEach(content => {
        if (content.id === tabId) {
          content.classList.add('tab-content--active');
        } else {
          content.classList.remove('tab-content--active');
        }
      });

      tabButtons.forEach(button => {
        if (button === tabButton) {
          button.classList.add('tab-toggle--active');
        } else {
          button.classList.remove('tab-toggle--active');
        }
      });
    });
  });
}

const shineButton = document.querySelector('.button-primary--effect');

if (shineButton) {
  const shineEffectHandle = () => {
    shineButton.classList.add('show-shine')
    setTimeout(() => {
      shineButton.classList.remove('show-shine');
    }, 1250)
  }

  setInterval(shineEffectHandle, 3000);

  window.addEventListener('DOMContentLoaded', shineEffectHandle);
}

// shineButton.addEventListener('transitionend', () => {
//   setTimeout(() => {
//     shineButton.classList.remove('show-shine');
//   }, 1250)
// });


globalModals.forEach(modal => {
  const modalContainer = modal.querySelector('.modal__container');

  modal.addEventListener('click', (e) => {
    if (e.target === modalContainer) {
      modal.classList.remove('show-modal');
      body.style.overflow = ''
    }
  })
})
if (Swiper) {
  const quotersSlider = new Swiper('.lessons-swiper', {
		slidesPerView: 1,
    autoHeight: true,
    breakpoints: {
      992: {
        slidesPerView: 2
      }
    },
    spaceBetween: 20,
    speed: 500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    }
  })
}
