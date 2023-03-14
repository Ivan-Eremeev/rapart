window.onload = function () {

  // // Липкое меню.
  // function stikyMenu(header) {
  //   let headerTop = header.offset().top;
  //   headerToggleClass();
  //   $(window).scroll(function () {
  //     headerToggleClass();
  //   });
  //   function headerToggleClass() {
  //     if ($(window).scrollTop() > headerTop + 130) {
  //       header.addClass('sticky');
  //     } else if ($(window).scrollTop() <= headerTop) {
  //       header.removeClass('sticky');
  //     }
  //   }
  // };
  // stikyMenu($('#headerSticky'));

  // // Swiper | Слайдер
  // if ($('#swiper').length) {
  //   const swiper = new Swiper('#swiper', {
  //     slidesPerView: 1,
  //     simulateTouch: false,
  //     pagination: {
  //       el: '.swiper-pagination',
  //       clickable: true,
  //     },
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //     scrollbar: {
  //       el: '.swiper-scrollbar',
  //     },
  //   });
  // }

  // Swiper | Слайдер "сотрудники"
  // if ($('#sliderStaffHead').length) {

  //   const sliderStaffHead = new Swiper('#sliderStaffHead', {
  //     slidesPerView: 'auto',
  //     spaceBetween: 100,
  //     freeMode: true,
  //   });

  //   const sliderStaffBody = new Swiper('#sliderStaffBody', {
  //     slidesPerView: 1,
  //     spaceBetween: 30,
  //     allowTouchMove: false,
  //     effect: 'fade',
  //     thumbs: {
  //       swiper: sliderStaffHead,
  //     },
  //     // breakpoints: {
  //     //   769: {
  //     //     effect: 'fade',
  //     //     allowTouchMove: false,
  //     //   }
  //     // }
  //   });
    
  //   let sliderStaff;
  //   let init = false;
  //   function sliderToggle() {
  //     if ($(window).width() <= 768 && !init) {
  //       init = true;
  //       sliderStaff = new Swiper('#sliderStaff', {
  //         slidesPerView: 2,
  //         spaceBetween: 30,
  //       });
  //     } else if ($(window).width() > 768 && init) {
  //       init = false;
  //       sliderStaff.destroy(true, true);
  //     }
  //   };
  //   sliderToggle();
  //   $(window).resize(function () { 
  //     sliderToggle();
  //   });

  //   // const sliderStaff = new Swiper('#sliderStaff', {
  //   //   slidesPerView: 1,
  //   //   spaceBetween: 30,
  //   // });
  //   // sliderToggle(sliderStaff);
  //   // function sliderToggle(slider) {
  //   //   console.log(slider);
  //   //   if ($(window) <= 768) {
  //   //     slider.init();
  //   //   } else {
  //   //     swiper.destroy(slider);
  //   //   }
  //   // }
  // }

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

  // // Air Datepicker | Календарь
  // new AirDatepicker('#airDatepicker', {
  //   position: 'right top',
  // });

  // // Magnific Popup | Попап окна
  // $('.open-popup-link').magnificPopup({
  //   mainClass: 'mfp-fade'
  // });

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

  // // Аккордеон
  // function accordion(accordion, settings) {
  //   if (accordion.length) {
  //     $('.js-accordion').each(function () {
  //       let currentAccordion = $(this);
  //       let trigger = currentAccordion.find('.js-accordion-trigger');
  //       let content = $('.js-accordion-content');
  //       let time = 300;
  //       trigger.on('click', function () {
  //         let currentTrigger = $(this);
  //         let data = currentTrigger.data('content');
  //         if (!currentTrigger.hasClass('active')) {
  //           if (settings) {
  //             content.stop().slideUp(
  //               time,
  //               function () {
  //                 $(this).removeClass('open');
  //               }
  //             )
  //             trigger.removeClass('active');
  //           };
  //           currentTrigger.addClass('active');
  //           currentAccordion.find('#' + data).stop().slideDown(
  //             time,
  //             function () {
  //               $(this).addClass('open')
  //             }
  //           );
  //         } else {
  //           currentTrigger.removeClass('active');
  //           currentAccordion.find('#' + data).stop().slideUp(
  //             time,
  //             function () {
  //               $(this).removeClass('open')
  //             }
  //           );
  //         }
  //       })
  //     })
  //   }
  // }
  // accordion($('.js-accordion'), true);

  // // Sticky Sidebar | Липкий сайдбар
  // if ($('.js-sticky').length) {
  //   var stickySidebar = new StickySidebar('.js-sticky', {
  //     topSpacing: 65,
  //     bottomSpacing: 10,
  //     containerSelector: false,
  //     innerWrapperSelector: '.sidebar__inner',
  //     resizeSensor: true,
  //     stickyClass: 'is-affixed',
  //     minWidth: 0
  //   });
  // }

  // // Кнопка скролла вверх страницы
  // function scrollUp() {
  //   const btn = $('.js-scrollup');
  //   $(window).scroll(function () {
  //     btnShowFade();
  //   });
  //   function btnShowFade() {
  //     if ($(this).scrollTop() > 200) {
  //       btn.addClass('show');
  //     } else {
  //       btn.removeClass('show');
  //     }
  //   }
  //   btnShowFade();
  //   btn.click(function () {
  //     $('body,html').animate({
  //       scrollTop: 0
  //     }, 500);
  //     return false;
  //   });
  // }
  // scrollUp();

  // // Показать еще в фильтрах
  // function showMoreFilters() {
  //   const list = $('.js-more-list');
  //   const btn = $('.js-more-btn');
  //   const count = 4;
  //   list.each(function () {
  //     $(this).find('li').each(function (index) {
  //       if (index > count - 1) {
  //         $(this).fadeOut();
  //       }
  //     })
  //   })
  //   btn.on('click', function () {
  //     $(this).fadeOut();
  //     $(this).parent().find($('.js-more-list li')).fadeIn();
  //   })
  // }
  // showMoreFilters();

  // // Очистить фильтр 
  // function clearFilter() {
  //   let clearBnt = $('.js-filters-clear');
  //   clearBnt.on('click', function () {
  //     $(this).closest('.filters').find('input').prop('checked', false);
  //   })
  // }
  // clearFilter();

  // // Изменение количества товара (плюс минус)
  // function counter(block) {
  //   const counter = document.querySelectorAll(block);
  //   if (counter) {
  //     counter.forEach(element => {
  //       const minus = element.querySelector('.js-counter-minus');
  //       const plus = element.querySelector('.js-counter-plus');
  //       const inputWrap = element.querySelector('.js-counter-input');
  //       const input = inputWrap.querySelector('input');
  //       plus.addEventListener('click', () => {
  //         if (Number(input.value) < 999) {
  //           input.value = Number(input.value) + 1;
  //         }
  //       })
  //       minus.addEventListener('click', () => {
  //         if (Number(input.value) > 1) {
  //           input.value = Number(input.value) - 1;
  //         }
  //       })
  //       input.addEventListener('keyup', () => {
  //         input.value = input.value.replace(/[^\d]/g, '');
  //       })
  //       input.addEventListener('blur', () => {
  //         if (input.value == '' || input.value == 0) {
  //           input.value = 1;
  //         }
  //       })
  //     });
  //   }
  // }
  // counter('.js-counter');

  // // noUiSlider || Ползунок выбора
  // if (document.getElementById('noUiSlider')) {
  //   const rangeSlider = document.getElementById('noUiSlider');
  //   const inputMin = document.getElementById('noUiSliderMin');
  //   const inputMax = document.getElementById('noUiSliderMax');
  //   let min = Number(rangeSlider.dataset.min);
  //   let max = Number(rangeSlider.dataset.max);
  //   let nowMin = Number(rangeSlider.dataset.nowmin);
  //   let nowMax = Number(rangeSlider.dataset.nowmax);
  //   console.log(nowMin,nowMax);
  //   noUiSlider.create(rangeSlider, {
  //     start: [nowMin, nowMax],
  //     connect: true,
  //     step: 10,
  //     range: {
  //       'min': min,
  //       'max': max
  //     }
  //   });
  //   rangeSlider.noUiSlider.on('update', function (values, handle) {
  //     if (handle) {
  //       inputMax.value = values[handle];
  //     } else {
  //       inputMin.value = values[handle];
  //     }
  //   });
  //   inputMin.addEventListener('change', function () {
  //     rangeSlider.noUiSlider.set([this.value, null]);
  //   });
  //   inputMax.addEventListener('change', function () {
  //     rangeSlider.noUiSlider.set([null, this.value]);
  //   });
  // };

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

}