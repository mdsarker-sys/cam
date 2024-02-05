
const searchInput = document.querySelector(".search-input");
const searchIcon = document.querySelector("#search-icon")


searchIcon.addEventListener('click', () => {
  if (searchInput.style.display === "none" || searchInput.style.display === "") {
    searchInput.style.display = "block";
    searchInput.classList.add(".smooth-transition");
  } else {
    searchInput.style.display = "none";
  }
});



var mainSlider = new Swiper(".mySwiper2", {
	parallax: true,
	speed: 1200,
	effect: 'slide',
    direction: "vertical",
    autoplay: true,
	navigation: {
	  nextEl: '.upk-button-next',
	  prevEl: '.upk-button-prev',
	},
    pagination: {
         el: '.swiper-pagination',
         clickable: true,
         renderBullet: function(index, className) {
             return '<span class="' + className + ' swiper-pagination-bullet--svg-animation"><svg width="28" height="28" viewBox="0 0 28 28"><circle class="svg__circle" cx="14" cy="14" r="10" fill="none" stroke-width="2"></circle><circle class="svg__circle-inner" cx="14" cy="14" r="2" stroke-width="3"></circle></svg></span>';
         },
     },
  });
  
  // ------------------------------
  // Initialize all timeline values
  // ------------------------------
  
  var gotoSection = function(target) {
    $('html, body').animate({
        scrollTop: $('#' + target).offset().top
    }, 1000);
}

  $("#search-icon").click(function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
  });
  
  $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });
  


  function getSpacing(elementId) {
    var element = document.getElementById(elementId);
    if (!element) {
        console.error("Element not found");
        return;
    }

    var style = window.getComputedStyle(element);

    return {
        marginTop: style.marginTop,
        marginRight: style.marginRight,
        marginBottom: style.marginBottom,
        marginLeft: style.marginLeft,
        paddingTop: style.paddingTop,
        paddingRight: style.paddingRight,
        paddingBottom: style.paddingBottom,
        paddingLeft: style.paddingLeft
    };
}

// Example usage
var spacing = getSpacing("myElementId"); // Replace with your element's ID
console.log(spacing);












