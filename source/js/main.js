
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


$(document).ready(function () {
  $(".audio-aside__box .audio-aside__item")
    .click(function () {
      // Проверяем, не имеет ли элемент уже класс "active"
      if (!$(this).hasClass("active")) {
        // Удаляем класс "active" у всех элементов и добавляем его только к текущему
        $(".audio-aside__box .audio-aside__item").removeClass("active");
        $(this).addClass("active");

        // Скрываем все элементы и показываем только текущий с плавным появлением
        $(".audio-aside__content .audio-aside__field--item")
          .addClass("active")
          .hide()
          .eq($(this).index())
          .fadeIn(200);
      }
    })
    .eq(0)
    .addClass("active");
  $(".audio-expirience-pages-btn__next").click(function () {
    var nextButton = $(this);

    nextButton.addClass("hover-effect");

    setTimeout(function () {
      nextButton.removeClass("hover-effect");
    }, 500); // Удаление класса через 1 секунду (1000 миллисекунд)
  });

  $(".audio-expirience-pages-btn-back").click(function () {
	var nextButton = $(this);

	nextButton.addClass("hover-effect");

	setTimeout(function () {
	  nextButton.removeClass("hover-effect");
	}, 500); // Удаление класса через 1 секунду (1000 миллисекунд)
 });
 $(".mliqr-reset").click(function() {
	var spanElement = $(this).find("span");
	var mliqlBox = $(".mliql__box");
	var textareaValue = mliqlBox.find("textarea").val();

	// Проверяем, что класс "active" отсутствует и поле textarea не пустое
	if (!mliqlBox.hasClass("active") && textareaValue.trim() !== "") {
		 mliqlBox.addClass("active");
		 spanElement.text("Очистити");
		 setTimeout(function() {
			  $(".mliql__gpt").addClass("active");
		 }, 300);
	} else {
		 mliqlBox.removeClass("active");
		 $(".mliql__gpt").removeClass("active");
		 spanElement.text("Запитати у Chat GPT");
	}
});
$(".mliqr-send").click(function() {
	var spanElement = $(this).find("span");
	var mliqlBox = $(".mliql__box");
	var textareaValue = mliqlBox.find("textarea").val();

	// Проверяем, что класс "active" отсутствует и поле textarea не пустое
	if (!mliqlBox.hasClass("active") && textareaValue.trim() !== "") {
		 mliqlBox.addClass("active");
		 spanElement.text("Скинути");
		 setTimeout(function() {
			  $(".mliql__gpt").addClass("active");
		 }, 300);
	} else {
		 mliqlBox.removeClass("active");
		 $(".mliql__gpt").removeClass("active");
		 spanElement.text("Запитати у Chat GPT");
	}
});





  $(".audio-tab, .audio-tabs-mob-dropdown-item")
    .click(function () {
      if (!$(this).hasClass("active")) {
        // Удаляем класс "active" у всех элементов
        $(".audio-tab, .audio-tabs-mob-dropdown-item").removeClass("active");

        // Добавляем класс "active" к текущему элементу
        $(this).addClass("active");

        // Получаем индекс текущего элемента
        var index = $(this).index();

        // Находим соответствующий элемент с классом "audio-tab fw-bold" и добавляем ему класс "active"
        $(".audio-tab.fw-bold").eq(index).addClass("active");

        // Скрываем все элементы с классом "audio__exercise" и показываем только текущий
        $(".audio__exercise")
          .removeClass("active")
          .hide()
          .eq(index)
          .addClass("active")
          .fadeIn();
      }
    })
    .eq(0)
    .addClass("active");

  // Назначаем класс "active" и показываем соответствующий элемент .audio__exercise при загрузке страницы
  $(".audio__exercise").eq(0).addClass("active").show();

  $(
    ".audio-expirience-liste-right__box .audio-expirience-listen-right__item"
  ).each(function () {
    $(this).click(function () {
      // Удаляем класс "active" у всех элементов внутри текущего контейнера
      $(this).siblings().removeClass("active");

      // Добавляем класс "active" только к текущему элементу
      $(this).addClass("active");
    });
  });

  $(
    ".audio-expirience-listen-left__start, .audio-expirience-voice-left__start"
  ).click(function () {
    // Добавляем класс "active" только к текущему элементу
    $(this).toggleClass("active");
  });

  $(".audio__exercise").each(function () {
    var slider = $(this).find(".audio-exercise__slider");
    var pagesList = $(this).find(".audio-expirience-pages-list");
    var navItems = $(this).find(".audio-expirience-pages-nav__item");

    slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      prevArrow: $(this).find(".audio-expirience-pages-btn-back"),
      nextArrow: $(this).find(".audio-expirience-pages-btn__next"),
    });

    slider.on("afterChange", function (event, slick, currentSlide) {
      pagesList.text(currentSlide + 1 + "/");
      navItems.removeClass("active");
      navItems.eq(currentSlide).addClass("active");
    });
  });

  $(".audio-tabs-mob-choise").click(function () {
    // Добавляем класс "active" к элементу с классом audio-tabs-mob-dropdown
    $(this).toggleClass("active");
    $(".audio-tabs-mob-dropdown").toggleClass("active");
  });
  // Добавляем обработчик клика ко всем элементам с классом audio-tabs-mob-dropdown-item
  $(".audio-tabs-mob-dropdown-item").click(function () {
    // Получаем текст элемента, на который произошел клик
    var selectedText = $(this).text();

    // Вставляем текст внутрь span в элементе с классом audio-tabs-mob-choise
    $(".audio-tabs-mob-choise span").text(selectedText);
    $(".audio-tabs-mob-choise").removeClass("active");
    $(".audio-tabs-mob-dropdown").removeClass("active");
  });
  $(document).on("click", function (e) {
    var $audioTabsMobChoise = $(".audio-tabs-mob-choise");
    var $audioTabsMobDropdown = $(".audio-tabs-mob-dropdown");

    if (
      !$audioTabsMobChoise.is(e.target) &&
      !$audioTabsMobDropdown.is(e.target) &&
      $audioTabsMobChoise.has(e.target).length === 0 &&
      $audioTabsMobDropdown.has(e.target).length === 0
    ) {
      $audioTabsMobChoise.removeClass("active");
      $audioTabsMobDropdown.removeClass("active");
    }
  });

  // Находим все блоки .aafdli__box
  var $aafdliBoxes = $(".aafdli__box");

  $(
    ".main-lessons-correct-item__left .main-lessons-correct-item-left__item"
  ).click(function () {
    // Удаляем класс "active" у всех элементов внутри блока
    $(this).siblings().removeClass("active");
    // Добавляем класс "active" только к текущему элементу
    $(this).addClass("active");
  });
  $(".main-lessons-item__excess-point__box .mliep__text").click(function () {
    // Удаляем класс "active" у всех элементов с классом "mliep__text" внутри коробки
    $(this).siblings().removeClass("active");

    // Добавляем класс "active" к текущему элементу
    $(this).addClass("active");
  });
  $(".main-lessons-correct-send__btn--correct").click(function () {
    // Находим все элементы с классом "main-lessons-correct__item"
    const items = $(".main-lessons-correct__item");

    // Добавляем классы к соответствующим элементам
    items.eq(0).addClass("default");
    items.eq(1).addClass("correct");
    items.eq(2).addClass("incorrectly");
  });

  $(".main-lessons-correct-send__btn--mliep").click(function () {
    // Находим все элементы с классом "main-lessons-correct__item"
    const items = $(".main-lessons-item__excess-point");

    // Добавляем классы к соответствующим элементам
    items.eq(0).addClass("wrong");
    items.eq(1).addClass("right");
  });

  // Навешиваем обработчик события на каждый .aafdli-left__icon
  $aafdliBoxes.each(function () {
    var $thisBox = $(this);
    var $translateItem = $thisBox.find(
      ".audio-aside-field-dictionary-list__item--translate"
    );
    var $leftIcon = $thisBox.find(".aafdli-left__icon--unsee");
    var $leftIcon2 = $thisBox.find(".aafdli-left__icon-see");

    $leftIcon.click(function () {
      $translateItem.removeClass("active");
    });
    $leftIcon2.click(function () {
      $translateItem.addClass("active");
    });
  });
  $(".audio-aside-field-dictionary__btn").click(function () {
    $(".audio-aside-field-dictionary__add input").toggleClass("active");
    $(this).toggleClass("active");
  });
  $(".audio__aside__back, .audio-aside__field--dictionary-close").click(
    function () {
      $(
        ".audio__aside, .audio-aside__field--dictionary-lessons--box"
      ).removeClass("active");
    }
  );
  $(".audio-top-dp").click(function () {
    $(".audio__aside, .audio-aside__field--dictionary-lessons--box").addClass(
      "active"
    );
  });
  $(".listen-item__top").click(function () {
	// Закрываем все активные элементы, кроме текущего
	$(".listen-item__top.active").not(this).removeClass("active");

	// Переключаем активность текущего элемента
	$(this).toggleClass("active");
});
  $(".keys__top").click(function () {
	// Сохраняем ссылку на текущий элемент .keys__top
	var $this = $(this);

	// Находим соседний элемент .keys__content
	var content = $this.siblings(".keys__content");

	// Проверяем, есть ли у текущего .keys__top класс "active"
	if ($this.hasClass("active")) {
	  // Если класс "active" уже есть, то убираем его
	  content.removeClass("active");

	  // Плавно устанавливаем высоту .keys__content в 0
	  content.animate({ height: "0px" }, 350, function () {
		 // Через 350ms удаляем класс "active" у .keys__top
		 setTimeout(function () {
			$this.removeClass("active");
		 }, 350);
	  });
	} else {
	  // Скрываем все .keys__content и удаляем класс "active" у всех .keys__top
	  $(".keys__content").removeClass("active").animate({ height: "0px" }, 350);
	  $(".keys__top").removeClass("active");

	  // Если класс "active" отсутствует, то добавляем его
	  $this.addClass("active");
	  content.addClass("active");

	  // Получаем вычисленную высоту .keys__content
	  var contentHeight = content[0].scrollHeight;

	  // Плавно устанавливаем высоту .keys__content в вычисленную высоту
	  content.animate({ height: contentHeight + "px" }, 350);
	}
 });
  $(".main-lessons-item__yourself").click(function () {
    // Сохраняем ссылку на текущий элемент .keys__top
    var $this = $(this);

    // Находим соседний элемент .keys__content
    var content = $this.siblings(".main-lessons-item__yourself__content");

    // Проверяем, есть ли у текущего .keys__top класс "active"
    if ($this.hasClass("active")) {
      // Если класс "active" уже есть, то убираем его
      content.removeClass("active");

      // Плавно устанавливаем высоту .keys__content в 0
      content.animate({ height: "0px" }, 1000, function () {
        // Через 350ms удаляем класс "active" у .keys__top
        setTimeout(function () {
          $this.removeClass("active");
        }, 350);
      });
    } else {
      // Если класс "active" отсутствует, то добавляем его
      $this.addClass("active");
      content.addClass("active");

      // Получаем вычисленную высоту .keys__content
      var contentHeight = content[0].scrollHeight;

      // Плавно устанавливаем высоту .keys__content в вычисленную высоту
      content.animate({ height: contentHeight + "px" }, 350);
    }
  });

  $(".js-selectCustom").each(function () {
    const $elSelectCustom = $(this);
    const $elSelectCustomValue = $elSelectCustom.children().eq(0);
    const $elSelectCustomOptions = $elSelectCustom.children().eq(1);
    const defaultLabel = $elSelectCustomValue.data("value");

    // Listen for each custom option click
    $elSelectCustomOptions.children().each(function () {
      $(this).on("click", function (e) {
        // Update custom select text too
        $elSelectCustomValue.text($(this).text());
        // Close select
        $elSelectCustom.removeClass("isActive");
      });
    });

    // Toggle select on label click
    $elSelectCustomValue.on("click", function (e) {
      $elSelectCustom.toggleClass("isActive");
    });

    // Close the custom select when clicking outside
    $(document).on("click", function (e) {
      const didClickedOutside =
        !$elSelectCustom.is(e.target) &&
        $elSelectCustom.has(e.target).length === 0;
      if (didClickedOutside) {
        $elSelectCustom.removeClass("isActive");
      }
    });
  });

  $(".login-content-see__icon").click(function () {
    var passwordInput = $(".login-content-password__input");

    if (passwordInput.attr("type") === "password") {
      passwordInput.attr("type", "text");
      $(this).addClass("active");
    } else {
      passwordInput.attr("type", "password");
      $(this).removeClass("active");
    }
  });
  $(".login-content-see__icon--repeat").click(function () {
    var passwordInput = $(".login-content-password__input--repeat");

    if (passwordInput.attr("type") === "password") {
      passwordInput.attr("type", "text");
      $(this).addClass("active");
    } else {
      passwordInput.attr("type", "password");
      $(this).removeClass("active");
    }
  });

  let count = 1; // Начальное значение для цифр

  // Добавьте обработчик события для всех чекбоксов с классом "check-highload"
  $(".mlioc .check-highload").change(function () {
    const highload2 = $(this).parent().find(".highload2");

    if ($(this).is(":checked")) {
      // Если чекбокс выбран, установите значение цифры в элемент с классом "highload2" и увеличьте счетчик
      highload2.text(count++);
    } else {
      // Если чекбокс снят, удалите значение внутри элемента с классом "highload2" и уменьшите счетчик
      highload2.text("");
      count--;
      updateNumbers();
    }
  });

  // Функция для обновления значений цифр в элементах с классом "highload2"
  function updateNumbers() {
    let currentCount = 1;
    $(".check-highload:checked").each(function () {
      $(this).parent().find(".highload2").text(currentCount++);
    });
  }
  $(".mlil-item-text__item").click(function () {
    // Удаляем класс 'active' у всех элементов с классом 'mlil-item-text__item'
    $(".mlil-item-text__item").removeClass("active");

    // Добавляем класс 'active' к элементу, на котором произошел клик
    $(this).addClass("active");
  });
  $(".main-lessons-item-record-voice").click(function () {
    // Добавляем класс 'active' к текущему элементу
    $(this).addClass("active");

    // Добавляем класс 'active' ко всем элементам с классами .main-lessons-item__record и .audio-expirience__voice
    $(".main-lessons-item__record .audio-expirience__voice").addClass("active");
  });
  // Дублируем контент внутри .content
  var $content = $(".error-illustation__camels--black");
  var $originalContent = $content.html();
  $content.append($originalContent).append($originalContent);

  // Запускаем анимацию движения для <picture class="error-illustation__camels--black">
  function startBlackCamelsAnimation() {
    $content
      .find(".error-illustation__camels--black img")
      .css("animation-play-state", "running");
  }

  // Запускаем анимации
});



if (Swiper) {
  const quotersSlider = new Swiper('.lessons-swiper', {
		slidesPerView: 1,
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