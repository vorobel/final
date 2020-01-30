"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

console.log('test');
new WOW().init();

var test = function test(x) {
  return x * 2;
};

var User =
/*#__PURE__*/
function () {
  function User(name) {
    _classCallCheck(this, User);

    this.name = name;
  }

  _createClass(User, [{
    key: "sayHi",
    value: function sayHi() {
      alert(this.name);
    }
  }]);

  return User;
}();

var user = new User("Вася"); // user.sayHi(); // Вася

$('.mobile-menu').on('click', function (e) {
  e.preventDefault();
  $('.menu-btn').toggleClass('menu-active');
  $('.ba-header__container nav').toggleClass('menu-active');
});
/*$('.know-more-btn').on('click', function(e) {
 e.preventDefault();
 $('.hidden-item').toggleClass('hidden');
 if (document.querySelector('.hidden')) {
   let element = document.getElementsByClassName('know-more-btn');
   console.log(element);
   element.innerHTML = 'w[emfw';
}
})
*/

$('.know-more-btn').on('click', function (e) {
  e.preventDefault();
  $('.hidden-item').toggleClass('hidden');

  if (!$('.hidden-item').hasClass('hidden')) {
    var element = document.querySelector('.know-more-btn');
    element.innerHTML = 'KNOW LESS';
  } else {
    var element = document.querySelector('.know-more-btn');
    element.innerHTML = 'KNOW MORE';
  }
});
$(document).ready(function () {
  $('.testing').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  });
});
$('.hero-wrapper').slick({
  infinite: true,
  accessibility: false,
  autoplay: true,
  arrows: false,
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: false
});
$('.testimonials-wrapper').slick({
  infinite: true,
  accessibility: false,
  autoplay: true,
  arrows: false,
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: false
}); // ================================ BA-MODAL =======================================

$('.portfolio-img').on('click', function (e) {
  var $imgSrc = $(this).attr('src');
  var $modalImage = $('<img>');
  $modalImage.attr('src', $imgSrc).addClass('ba-modal__image');
  $('.ba-modal-content-wrapper').append($modalImage);
  openModal();
});

var openModal = function openModal() {
  $('.ba-modal').addClass('ba-modal--open');
  $('body').addClass('ba-modal-is-open');
  $(document).on('keydown', function (e) {
    if (e.keyCode == 27) {
      closeModal();
    }
  });
};

var closeModal = function closeModal() {
  $('.ba-modal').removeClass('ba-modal--open');
  $('.ba-modal-content-wrapper').empty();
  $('body').removeClass('ba-modal-is-open');
};

$('.ba-modal-close').on('click', closeModal);
$('.ba-modal').on('click', function (e) {
  var modalContent = $('.ba-modal-content'); // указываем элемент в котором хранится контент

  if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) // проверяем что клик был не по блоку с контентом
    {
      closeModal(); // и не по дочерним элементам блока с контентом
    }
}); // =================================================================================//