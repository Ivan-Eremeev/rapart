window.onload = function () {

  // Липкое меню.
  function stikyMenu(header) {
    let headerTop = header.offset().top;
    headerToggleClass();
    $(window).scroll(function () {
      headerToggleClass();
    });
    function headerToggleClass() {
      if ($(window).scrollTop() > headerTop + 130) {
        header.addClass('sticky');
      } else if ($(window).scrollTop() <= headerTop) {
        header.removeClass('sticky');
      }
    }
  };
  stikyMenu($('#headerSticky'));

  // Swiper | Слайдер "сотрудники"
  if ($('.js-sliderStaff').length) {

    let sliderStaff;
    let init = false;
    function sliderToggle() {
      if ($(window).width() <= 768 && !init) {
        init = true;
        sliderStaff = new Swiper('.js-sliderStaff', {
          slidesPerView: 1.2,
          spaceBetween: 30,
          speed: 1000,
          pagination: false,
          navigation: false,
          breakpoints: {
          576: {
            slidesPerView: 2,
          }
        }
        });
      } else if ($(window).width() > 768 && init) {
        init = false;
        sliderStaff.forEach(function (e) {
          e.destroy();
        })
      }
    };
    sliderToggle();
    $(window).resize(function () {
      sliderToggle();
    });

  }

  // Swiper | Слайдер "галерея"
  if ($('#sliderGallery').length) {
    const sliderGallery = new Swiper('#sliderGallery', {
      slidesPerView: 1,
      spaceBetween: 30,
      speed: 1000,
      pagination: {
        el: '.sliderGallery__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.sliderGallery__button--next',
        prevEl: '.sliderGallery__button--prev',
      },
    });
  }

  // Swiper | Слайдер "сертифиикаты"
  if ($('#sliderSertificates').length) {

    let sliderSertificates;
    let init = false;
    function sliderToggle() {
      if ($(window).width() <= 1024 && !init) {
        init = true;
        sliderSertificates = new Swiper('#sliderSertificates', {
          slidesPerView: 2.3,
          spaceBetween: 30,
          navigation: false,
          speed: 1000,
          pagination: {
            el: '.sliderSertificates__pagination',
            clickable: true,
          },
          breakpoints: {
            576: {
              slidesPerView: 3,
            },
          }
        });
      } else if ($(window).width() > 1024 && init) {
        init = false;
        sliderSertificates.destroy();
      }
    };
    sliderToggle();
    $(window).resize(function () {
      sliderToggle();
    });

  }

  // Swiper | Слайдер в статье
  if ($('#sliderPost').length) {
    const sliderPost = new Swiper('#sliderPost', {
      slidesPerView: 1.1,
      spaceBetween: 10,
      speed: 1000,
      autoHeight: true,
      pagination: {
        el: '.post__pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.post__slider-btn--next',
        prevEl: '.post__slider-btn--prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
        },
      }
    });
  }

  // Swiper | Слайдер "другие события"
  if ($('#sliderMoreNews').length) {

    let sliderMoreNews;
    let init = false;
    function sliderToggle() {
      if ($(window).width() <= 1024 && !init) {
        init = true;
        sliderMoreNews = new Swiper('#sliderMoreNews', {
          slidesPerView: 1.1,
          spaceBetween: 10,
          pagination: false,
          navigation: false,
          speed: 1000,
          breakpoints: {
            576: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
          }
        });
      } else if ($(window).width() > 1024 && init) {
        init = false;
        sliderMoreNews.destroy();
      }
    };
    sliderToggle();
    $(window).resize(function () {
      sliderToggle();
    });

  }

  // Табы
	function tabs() {
    const tabs = $('.js-tabs');
		if (tabs.length) {
			tabs.each( function () {
        let triggers = $(this).find('.js-tabs-trigger');
        let contents = $(this).find('.js-tabs-content');
        let time = 300;
        triggers.on('click', function (e) {
          e.preventDefault();
          let trigger = $(this);
          let content = $('.js-tabs-content[data-href="' + trigger.attr('href') +'"]');
          if (!trigger.hasClass('active')) {
            triggers.removeClass('active');
            trigger.addClass('active');
            contents.hide();
            contents.removeClass('open');
            content.fadeIn(time, function () {
              $(this).addClass('open');
            });
          }else {
            return false;
          }
        })
      });
		}
	}
	tabs();

  // Выпадайки при клике по кнопке
  // Задать блокам выпадайкам айдишник совпадающий с data-drop="" в кнопке для этого блока
  // Задать кнопкам .js-drop-btn и data-drop="" с айдишником блока выпадайки
  function dropBlock(btn, lock = false) {
    let $this = undefined,
        drop = undefined,
        close = $('.js-drop-close'),
        body = $('body');
    btn.on('click', function () {
      let $this = $(this);
      let drop = $('#' + $this.data('drop'));
      let scrollWidth = (window.innerWidth - $(window).width());
      if (!$this.hasClass('is-active')) {
        $this.addClass('is-active');
        drop.addClass('open');
        if (lock) {
          body.toggleClass('lock');
          body.css('padding-right', scrollWidth);
        }
      } else {
        $this.removeClass('is-active');
        drop.removeClass('open');
        body.removeClass('lock');
        body.css('padding-right', 0);
      }
      $(document).mouseup(function (e) {
        if (!$this.is(e.target)
          && $this.has(e.target).length === 0
          && !drop.is(e.target)
          && drop.has(e.target).length === 0) {
          $this.removeClass('is-active');
          drop.removeClass('open');
          body.removeClass('lock');
          body.css('padding-right', 0);
        }
      });
    })
    close.on('click', function () {
      $('[data-drop="' + $(this).data('drop') +'"]').removeClass('is-active');
      $('#' + $(this).data('drop')).removeClass('open');
      body.removeClass('lock');
      body.css('padding-right', 0);
    })
  }
  dropBlock($('.js-drop-btn'));
  dropBlock($('.js-drop-menu'), true);

  function textShow() {
    let link = $('.js-link-text-hide');
    link.on('click', function () {
      let linkCurrent = $(this);
      let data = linkCurrent.data('textshow');
      let text = $('[data-textshow= "' + data + '"]');
      text.removeClass('hide');
      linkCurrent.hide();
    })
  }
  textShow();

  // Фильтр поиска
  function filterSearch() {
    let input = $('.sort__search input');
    let drop = $('.sort__search-drop');
    let li = drop.find('li');
    input.on('focus', function () {
      drop.addClass('open');
    });
    $(document).mouseup(function (e) {
      if (!input.is(e.target)
        && input.has(e.target).length === 0
        && !drop.is(e.target)
        && drop.has(e.target).length === 0) {
        drop.removeClass('open');
      }
    });
    li.on('click', function () {
      input.val($(this).text());
      drop.removeClass('open');
    });
    input.on("keyup", function () {
      var value = $(this).val().toUpperCase();
      li.filter(function () {
        $(this).toggle($(this).text().toUpperCase().indexOf(value) > -1)
      });
    });
  }
  filterSearch();

  // Смена положения блока при изменении ширины окна
	// function(блок, куда переместить, куда вернуть)
	function replace(block, to, from, mediaBreak) {
		function replaceToggle() {
			if ($(window).width() <= mediaBreak) { // условие на ширину окна
				block.appendTo(to); // Переместить блок
			} else {
				block.appendTo(from); // Вернуть блок обратно
			}
		}
		replaceToggle();
		$(window).resize(function () {
			replaceToggle();
		})

	}
  replace($('#items'), $('#itemsTo'), $('#itemsFrom'), 1024);

  // Оборачивание инфы в каталоге списком на мобилке
  function wrapTextItemMobile() {
    let init = false;
    toggleWrap()
    $(window).resize(toggleWrap);
    function toggleWrap() {
      $('.catalog-list__item').each(function () {
        let itemCurrent = $(this);
        let content = itemCurrent.find('.catalog-list__content');
        let wrapper = $('<div class="catalog-list__content-wrapper"></div>')
        if ($(window).width() < 576 && !itemCurrent.hasClass('item-mobile')) {
          content.wrapAll(wrapper);
          itemCurrent.addClass('item-mobile');
        }
        else if ($(window).width() >= 576 && itemCurrent.hasClass('item-mobile')) {
          content.unwrap(wrapper);
          itemCurrent.removeClass('item-mobile');
        }
      })
    }
  }
  wrapTextItemMobile();

  // Открыть закрыть меню выбора языка в мобильном меню
  function langMobileToggle() {
    let item = $('.header__lang-mobile-item');
    let drop = $('.header__lang-mobile-drop');
    item.on('click', function () {
      drop.stop().slideToggle();
    })
  }
  langMobileToggle();

  // Карта
  if ($('#map').length) {
    ymaps.ready(initMap);
  }

  function initMap() {
    myMap = new ymaps.Map('map', {
      center: [55.97944653410656, 37.372367338623036],
      zoom: 15,
      controls: ['zoomControl']
    }, {
      searchControlProvider: 'yandex#search'
    });
    myMap.geoObjects
      .add(new ymaps.Placemark([55.97779306877145, 37.37212549999999], {
        iconCaption: 'Офис'
      }, {
        preset: 'islands#icon',
        iconColor: '#1550A2'
      }))
      .add(new ymaps.Placemark([55.98064356874894, 37.37253899999998], {
        iconCaption: 'Склад'
      }, {
        preset: 'islands#icon',
        iconColor: '#1550A2'
      }));
  };

}