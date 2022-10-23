(() => {
  document.addEventListener('DOMContentLoaded', () => {

    const body = document.querySelector(".body");
    const searchBtn = document.querySelector('.searchBtn');
    const searchBlock = document.querySelector('.searchBlock');

    const burger = document.querySelector(".burger");
    const headerNav = document.querySelector(".headerNav");

    burger.addEventListener('click', () => {
        body.classList.toggle('unscrolled');
        burger.classList.toggle('opened');
        headerNav.classList.toggle('mobile-active');
        searchBtn.classList.toggle('hidden');
    });


    // прокрутка при клике
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(navLink => {
      navLink.addEventListener('click', (e) => {
        e.preventDefault();

        const linkTo = document.querySelector(navLink.getAttribute('href'));
        const linkToPixels = linkTo.getBoundingClientRect().top + window.pageYOffset;

        body.classList.remove('unscrolled');
        burger.classList.remove('opened');
        headerNav.classList.remove('mobile-active');
        searchBtn.classList.remove('hidden');

        window.scrollTo({
          top: linkToPixels,
          behavior: "smooth"
        });
      });
    });

    // поиск
    searchBtn.addEventListener('click', (e) => {
      e.preventDefault();
      searchBtn.classList.toggle('searchDisabled');
      searchBlock.classList.toggle('searchDisabled');
    })

    tippy('#tooltip1', {
      theme: 'violet',
      content: 'Пример современных тенденций - современная методология разработки',
    });
    tippy('#tooltip2', {
      theme: 'violet',
      content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    });
    tippy('#tooltip3', {
      theme: 'violet',
      content: 'В стремлении повысить качество ',
    });

    // top slider
    const swiper = new Swiper('.header-slider', {
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
      },
      scrollbar: {
        hide: true,
      },
    });

    // select
    const element = document.querySelector('select');
    const choices = new Choices(element, {
      searchEnabled: false,
      itemSelectText: '',
    });

    // hiding double option in select
    const choicesElem = document.querySelector('.gallery__select');
    choicesElem.addEventListener('click', () => {
      const choicesListSin = document.querySelector(".choices__list--single");
      const choice = choicesListSin.querySelector(".choices__item");
      const choicesListDrop = document.querySelector(".choices__list--dropdown");
      choicesListDrop.querySelectorAll(".choices__item").forEach(ch => {
        if (choice.attributes['data-value'].value === ch.attributes['data-value'].value) {
          ch.style.display = 'none';
        };
      });
    });

    // menu artist
    const stylesMenu = document.querySelectorAll(".styles__link");
    stylesMenu.forEach(menuItem => {
      menuItem.addEventListener('click', () => {
        const list = menuItem.parentNode.querySelector(".styles__artist");
        list.classList.toggle('styles-menu-opened');
      });
    });

    // gallery slider
    const gallerySlider = new Swiper('.slider-container', {
      loop: true,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
      navigation: {
        nextEl: '.nav-right',
        prevEl: '.nav-left',
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1
        },
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 35,
        },
        1025: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        },
      }
    });

    // gallery counter
    const galleryCounter = document.querySelector("#gallery-counter");
    const galleryTotal = document.querySelector("#gallery-total");
    let something = galleryDigits ();
    galleryTotal.innerHTML = something.total;
    let countOfSlides = something.slides;

    function galleryDigits () {
      let width = window.screen.width;

      if (width > 1024) {
        total = 2;
        slides = 2;
        // 3 slides | 2 pages
      } else if ((width < 1025) && (width > 601)) {
        // 2 slides | 3 pages
        total = 3;
        slides = 3;
      } else if (width < 600) {
        // 1 slide | 6 pages
        total = 6;
        slides = 6;
      }

      return {
        total,
        slides
      }
    }

    window.addEventListener('resize', () => {
      something = galleryDigits ();
      galleryTotal.innerHTML = something.total;
      countOfSlides = something.slides;
    });

    const gallyryNavLeft = document.querySelector(".nav-left");
    gallyryNavLeft.addEventListener('click', () => {
      galleryCounter.innerHTML-=1;
      if (galleryCounter.innerHTML == 0) galleryCounter.innerHTML = countOfSlides;
    });

    const gallyryNavRight = document.querySelector(".nav-right");
    gallyryNavRight.addEventListener('click', () => {
      galleryCounter.innerHTML = Number(galleryCounter.innerHTML) +1;
      if (galleryCounter.innerHTML == (countOfSlides+1)) galleryCounter.innerHTML = 1;
    });


    $(".js-accordion").accordion({
      collapsible: true,
      active: false,
      icons: false,
      heightStyle: 'content'
    });


    // events slider
    const eventsSlider = new Swiper('.events__slider', {
      slidesPerView: 3,
      spaceBetween: 50,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      a11y: {
        paginationBulletMessage: 'Перейти к слайду номер {{index}}'
      },
      navigation: {
        nextEl: '.cards-nav-right',
        prevEl: '.cards-nav-left'
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 27,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 27,
        },
        1300: {
          slidesPerView: 3,
          spaceBetween: 50,
        }
      }
    });


    // partners slider
    const partnersSlider = new Swiper('.partner-slider', {
      slidesPerView: 3,
      navigation: {
        nextEl: '.partner-right',
        prevEl: '.partner-left'
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          slidesPerGroup: 1
        },
        600: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 34,
        },
        1000: {
          spaceBetween: 34,
        },
        1324: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 50,
        },
      }
    });


    // artist card
    let artistKey;
    const artistList = document.querySelector(".artists__list");
    const artisticCard = document.querySelector(".artist-card");
    const noArtist = document.querySelector(".no-artist-card");

    artistList.addEventListener('click', (e) => {
      artistKey = e.target.closest('.artist__button').attributes['data-name'].value;
      if (artistDB[artistKey]) {
        noArtist.style.display = "none";
        artisticCard.style.display = "block";
        const artistImg = document.querySelector(".artist-card__img");
        const artistHeader = document.querySelector(".artist-card__header");
        const artistYears = document.querySelector(".artist-card__years");
        const artistText = document.querySelector(".artist-card__text");
        artistImg.src = artistDB[artistKey]?.path;
        artistImg.alt = artistDB[artistKey]?.name;
        artistHeader.innerText = artistDB[artistKey]?.name;
        artistYears.innerText = artistDB[artistKey]?.date;
        artistText.innerHTML = artistDB[artistKey]?.text;
        artisticCard.scrollIntoView(true);
      } else {
        // console.log("такого нет: " + artistKey);
        artisticCard.style.display = "none";
        noArtist.style.display = "block";
        noArtist.scrollIntoView(true);
      }
    });

    // map
    ymaps.ready(init);
    function init(){
      var myMap = new ymaps.Map("map", {
        center: [55.75846806898367,37.60108849999989],
        zoom: 14,
        controls: []
      },
      {
        suppressMapOpenBlock: true
      });

      var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
        iconLayout: 'default#image',
        iconImageHref: "../img/geo.svg",
        iconImageSize: [20, 20],
      });
      myMap.geoObjects.add(myPlacemark);
    }

    // modals
    modal = document.querySelector('.modal');
    galleryImages = document.querySelectorAll('.gallery__img');

    galleryImages.forEach(item => item.addEventListener('click', () => {
        modal.classList.add('showed');
      modalClose = document.querySelector('.modalClose').addEventListener('click', () => {
        modal.classList.remove('showed');
      });
    }));

    // form checking and sending
    const selector = document.querySelector("input[type='tel']");
    const im = new Inputmask("+7 (999)-999-99-99");
    im.mask(selector);

    function isNumberValid(num) {
      return /(\d?)(\d{10})/g.test(num);
    }

    const form = document.querySelector('.form-call');
    const inputTel =document.querySelector('.tel-input');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
      e.preventDefault();
      let num = selector.inputmask.unmaskedvalue();

      if (isNumberValid(num)) {
        // console.log('valid');
        let formData = new FormData(form);

        let response = await fetch('php/sendmail.php', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          // console.log('ok send');
          let result = await response;
          form.reset();

          const modalForm = document.querySelector('.modal-form');
          modalForm.classList.add('showed');
          setTimeout(() => {
            modalForm.classList.remove('showed');
          }, 2000);

        } else {
          // console.log(response);
        }

      } else {
        // console.log('form is not valid');
        inputTel.classList.add('wrongInput');
        inputTel.addEventListener('input', () => {
          inputTel.classList.remove('wrongInput');
        });
      }
    }
  });
})();
