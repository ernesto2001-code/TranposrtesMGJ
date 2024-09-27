(function ($) {
	"use strict";
	var windowOn = $(window);

	/*======================================
	Preloader activation
	========================================*/
	$(window).on('load', function (event) {
		$('#preloader').delay(500).fadeOut(500);
	});

	/*======================================
	button hover
	========================================*/
	$('.btn-hover').on('mouseenter', function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({
            top: 0,
            left: 0
        })
        $(this).find('span').css({
            top: relY,
            left: relX
        })
    }).on('mouseout', function(e) {
        var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
        $(this).find('span').css({
            top: 0,
            left: 0
        })
        $(this).find('span').css({
            top: relY,
            left: relX
        })
    });


	/*======================================
	Mobile Menu Js
	========================================*/
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

	$("#mobile-menu-2").meanmenu({
		meanMenuContainer: ".mobile-menu-2",
		meanScreenWidth: "4000",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

	/*======================================
	Sidebar Toggle
	========================================*/
	$(".offcanvas__close,.offcanvas__overlay").on("click", function () {
		$(".offcanvas__info").removeClass("info-open");
		$(".offcanvas__overlay").removeClass("overlay-open");
	});
	$(".sidebar__toggle").on("click", function () {
		$(".offcanvas__info").addClass("info-open");
		$(".offcanvas__overlay").addClass("overlay-open");
	});

	/*======================================
	Body overlay Js
	========================================*/
	$(".body-overlay").on("click", function () {
		$(".offcanvas__area").removeClass("offcanvas-opened");
		$(".vw-search-area").removeClass("opened");;
		$(".body-overlay").removeClass("opened");
	});

	/*======================================
	Search Header Js
	========================================*/
	$(".search-toggle-open").on("click", function () {
		$(".vw-search-area").addClass("opened");
		$(".body-overlay").addClass("opened");
	});
	$(".tp-search-close-btn").on("click", function () {
		$(".vw-search-area").removeClass("opened");
		$(".body-overlay").removeClass("opened");
	});

  	/*======================================
	Sticky Header Js
	========================================*/

	$(window).scroll(function () {
		if ($(this).scrollTop() > 250) {
		  $("#header-sticky").addClass("sticky");
		} else {
		  $("#header-sticky").removeClass("sticky");
		}
	});

	/*======================================
	Data Css js
	========================================*/
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});

	$("[data-width]").each(function () {
		$(this).css("width", $(this).attr("data-width"));
	});

	$("[data-bg-color]").each(function () {
		$(this).css("background-color", $(this).attr("data-bg-color"));
	});
	
	/*======================================
	 Project Options Click
	========================================*/
	
	$(".option").hover(function(){
		$(".option").removeClass("active");
		$(this).addClass("active").animate({opacity: '0.8'}, "slow").animate({opacity: '1'}, "slow");
	});
	

	/*======================================
	 Nice Select
	========================================*/
	 $(document).ready(function() {
		$('select:not(.ignore)').niceSelect();
	  });


	/*======================================
	Range Slider 1
	========================================*/

	if ($(".range-slider-1").length) {
	var priceRange1 = document.getElementById("range-slider-1");
	noUiSlider.create(priceRange1, {
		start: [50, 300],
		limit: 500,
		behaviour: "drag",
		connect: true,
		range: {
			min: 50,
			max: 500,
		},
	});

	var limitFieldMin1 = document.getElementById("min-value-rangeslider-1");
	var limitFieldMax1 = document.getElementById("max-value-rangeslider-1");

	priceRange1.noUiSlider.on("update", function (values, handle) {
		(handle ? $(limitFieldMax1) : $(limitFieldMin1)).text(values[handle]);
	});
}

	/*======================================
	Range Slider 2
	========================================*/

	if ($(".range-slider-2").length) {
		var priceRange2 = document.getElementById("range-slider-2");
		noUiSlider.create(priceRange2, {
			start: [50, 500],
			limit: 1500,
			behaviour: "drag",
			connect: true,
			range: {
				min: 50,
				max: 1500,
			},
		});

		var limitFieldMin2 = document.getElementById("min-value-rangeslider-2");
		var limitFieldMax2 = document.getElementById("max-value-rangeslider-2");

		priceRange2.noUiSlider.on("update", function (values, handle) {
			(handle ? $(limitFieldMax2) : $(limitFieldMin2)).text(values[handle]);
		});
	}

	/*======================================
	Range Slider 3
	========================================*/

	if ($(".range-slider-3").length) {
		var priceRange3 = document.getElementById("range-slider-3");
		noUiSlider.create(priceRange3, {
			start: [50, 700],
			limit: 2500,
			behaviour: "drag",
			connect: true,
			range: {
				min: 50,
				max: 2500,
			},
		});

		var limitFieldMin3 = document.getElementById("min-value-rangeslider-3");
		var limitFieldMax3 = document.getElementById("max-value-rangeslider-3");

		priceRange3.noUiSlider.on("update", function (values, handle) {
			(handle ? $(limitFieldMax3) : $(limitFieldMin3)).text(values[handle]);
		});
	}

	/*======================================
	MagnificPopup image view
	========================================*/

	$('.popup-image').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});



	$(window).on("load", function () {
  
		if ($(".post-filter").length) {
		  var postFilterList = $(".post-filter li");
		  // for first init
		  $(".filter-layout").isotope({
			filter: ".filter-item",
			animationOptions: {
			  duration: 500,
			  easing: "linear",
			  queue: false
			}
		  });
	
		  // on click filter links
		  postFilterList.on("click", function () {
			var Self = $(this);
			var selector = Self.attr("data-filter");
			postFilterList.removeClass("active");
			Self.addClass("active");
	
			$(".filter-layout").isotope({
			  filter: selector,
			  animationOptions: {
				duration: 500,
				easing: "linear",
				queue: false
			  }
			});
			return false;
		  });
		}
	
	  });

	/*======================================
	MagnificPopup video view
	========================================*/
	$(".popup-video").magnificPopup({
		type: "iframe",
	});

	/*======================================
	Counter Js
	========================================*/
	$(".counter").counterUp({
		delay: 10,
		time: 1000,
	});

	/*======================================
	Wow Js
	========================================*/
	new WOW().init();

	/*======================================
	Back To Top Js
	========================================*/
	var progressPath = document.querySelector('.backtotop-wrap path');
	var pathLength = progressPath.getTotalLength();
	progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
	progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
	progressPath.style.strokeDashoffset = pathLength;
	progressPath.getBoundingClientRect();
	progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
	var updateProgress = function () {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var progress = pathLength - (scroll * pathLength / height);
		progressPath.style.strokeDashoffset = progress;
	}
	updateProgress();
	$(window).scroll(updateProgress);
	var offset = 150;
	var duration = 550;
	jQuery(window).on('scroll', function () {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.backtotop-wrap').addClass('active-progress');
		} else {
			jQuery('.backtotop-wrap').removeClass('active-progress');
		}
	});
	jQuery('.backtotop-wrap').on('click', function (event) {
		event.preventDefault();
		jQuery('html, body').animate({ scrollTop: 0 }, duration);
		return false;
	})
	
	/*======================================
	Team slider Js used
	========================================*/
	var teamOne = new Swiper('.team-1-active', {
		slidesPerView: 4,
		spaceBetween: 30,
		loop: true,
		roundLengths: true,
		autoplay: {
			delay: 3000,
		},
		navigation: {
			nextEl: ".team-1-button-next",
			prevEl: ".team-1-button-prev",
		},
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		speed: 3000,
	});

	
	/*======================================
	Projects slider Js used
	========================================*/
	var projectsOne = new Swiper('.projects-1-active', {
		slidesPerView: 4,
		spaceBetween: 0,
		loop: true,
		roundLengths: true,
		autoplay: {
			delay: 3000,
		},
		navigation: {
			nextEl: ".projects-1-next",
			prevEl: ".projects-1-prev",
		},
		breakpoints: {
			'1400': {
				slidesPerView: 4,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		speed: 3000,
	});

	/*======================================
	Testimonial slider Js used
	========================================*/

	var testimonialOne = new Swiper('.testimonial-1-active', {
		slidesPerView: 2,
		spaceBetween: 20,
		loop: true,
		roundLengths: true,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: ".testimonial-1-swiper-dot",
			clickable: true,
		},
		navigation: {
			nextEl: ".testimonial-1-button-next",
			prevEl: ".testimonial-1-button-prev",
		},
		breakpoints: {
			'1400': {
				slidesPerView: 2,
			},
			'1200': {
				slidesPerView: 2,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		speed: 3000,
		
	});
	
	var testimonialTwo = new Swiper('.testimonial-2-active', {
		slidesPerView: 2,
		spaceBetween: 20,
		loop: true,
		roundLengths: true,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: ".testimonial-2-swiper-dot",
			clickable: true,
		},
		navigation: {
			nextEl: ".testimonial-2-button-next",
			prevEl: ".testimonial-2-button-prev",
		},
		breakpoints: {
			'1400': {
				slidesPerView: 1,
			},
			'1200': {
				slidesPerView: 1,
			},
			'992': {
				slidesPerView: 1,
			},
			'768': {
				slidesPerView: 1,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		speed: 2000,
		
	});


	/*======================================
	Blog slider Js used
	========================================*/

	var blogOne = new Swiper('.blog-1-active', {
		slidesPerView: 3,
		spaceBetween: 20,
		loop: true,
		roundLengths: true,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: ".blog-1-swiper-dot",
			clickable: true,
		},
		navigation: {
			nextEl: ".blog-1-button-next",
			prevEl: ".blog-1-button-prev",
		},
		breakpoints: {
			'1400': {
				slidesPerView: 3,
			},
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 2,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		speed: 3000,
		
	});

	/*======================================
	brand slider Js
	========================================*/
	var brand = new Swiper('.brand-active', {
		slidesPerView: 5,
		spaceBetween: 70,
		loop: true,
		autoplay: {
			delay: 3000,
		},
		breakpoints: {
			'1400': {
				slidesPerView: 5,
			},
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 4,
			},
			'768': {
				slidesPerView: 3,
			},
			'576': {
				slidesPerView: 2,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		speed: 3000,
	});

	/*======================================
	service slider Js used//
	========================================*/
	var serviceOne = new Swiper('.service-active-1', {
		slidesPerView: 4,
		spaceBetween: 20,
		loop: true,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: ".service-swiper-dot",
			clickable: true,
		},
		navigation: {
			nextEl: ".service-active-1-button-next",
			prevEl: ".service-active-1-button-prev",
		},
		breakpoints: {
			'1200': {
				slidesPerView: 4,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		speed: 3000,
		on: {
			init: function () {
				var slides = this.slides;
				if (slides.length > 0) {
					slides[slides.length - 1].style.opacity = 0.5; // Adjust opacity as needed
				}
			},
		},
	});
	

	var serviceTwo = new Swiper('.service-active-2', {
		slidesPerView: 3,
		spaceBetween: 20,
		loop: true,
		autoplay: {
			delay: 3000,
		},
		pagination: {
			el: ".service-swiper-dot",
			clickable: true,
		},
		navigation: {
			nextEl: ".service-active-2-button-next",
			prevEl: ".service-active-2-button-prev",
		},
		breakpoints: {
			'1200': {
				slidesPerView: 3,
			},
			'992': {
				slidesPerView: 3,
			},
			'768': {
				slidesPerView: 2,
			},
			'576': {
				slidesPerView: 1,
			},
			'0': {
				slidesPerView: 1,
			},
		},
		speed: 3000,
	});


	/*======================================
	Banner slider Js used//
	========================================*/
	var banner = new Swiper(".banner-slider", {
		// Optional parameters
		loop: true,
		autoplay: {
			delay: 3000,
		},
		spaceBetween: 0,
		effect: "fade",
		// If we need pagination
		pagination: {
		  el: ".banner-custom-pagination",
		  clickable: true,
		  renderBullet: function (index, className) {
			return `<span class=${className}>${index+1}</span>`;
		  },
		},
		// Navigation arrows
		navigation: {
		  nextEl: ".banner-button-custom-next",
		  prevEl: ".banner-button-custom-prev"
		},
		speed: 3000,
	  });


	/*======================================
	22. TEAM ACTIVE
	========================================*/
	$(document).on('mouseover', '.why-choose-item', function () {
		$('.why-choose-item').removeClass('active');
		$(this).addClass('active');
	});

	/*======================================
	Countdown slider Js
	========================================*/
	if ($(".countdown-wrapper").length > 0) {
        // Function to update the countdown timer
        function updateCountdown() {
            const second = 1000,
                minute = second * 60,
                hour = minute * 60,
                day = hour * 24;

            let today = new Date();
            let dd = String(today.getDate()).padStart(2, "0");
            let mm = String(today.getMonth() + 1).padStart(2, "0");
            let yyyy = today.getFullYear();
            let nextYear = yyyy + 1;
            let dayMonth = "12/30/";
            let birthday = dayMonth + yyyy;

            today = mm + "/" + dd + "/" + yyyy;
            if (today > birthday) {
                birthday = dayMonth + nextYear;
            }

            const countDownDate = new Date(birthday).getTime();

            const x = setInterval(function () {
                const now = new Date().getTime();
                const distance = countDownDate - now;

                const days = Math.floor(distance / day);
                const hours = Math.floor((distance % day) / hour);
                const minutes = Math.floor((distance % hour) / minute);
                const seconds = Math.floor((distance % minute) / second);

                // Update the HTML elements
                document.getElementById("days").innerText = days;
                document.getElementById("hours").innerText = hours;
                document.getElementById("minutes").innerText = minutes;
                document.getElementById("seconds").innerText = seconds;

                // Check if the countdown is over
                if (distance < 0) {
                    clearInterval(x);
                    document.getElementById("headline").innerText = "It's my birthday!";
                    document.getElementById("countdown").style.display = "none";
                }
            }, 1000); // Update every 1 second
        }

        // Call the updateCountdown function when the page loads
        window.onload = updateCountdown;
	}

})(jQuery);



