"use strict";
$(document).on('ready', function() {

      
      $(".x").slick({
        dots: true,
        arrows:false,
        infinite: false,
        autoplay:true,
        centerMode:false,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        centerPadding: '60px',
    	cssEase: 'linear',
    	responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 576,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  	]
      });
      $(".screenshot").slick({
        dots: true,
        arrows:false,
        infinite: true,
        autoplay:true,
        centerMode:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        fade: true,
        cssEase: 'linear'
      });
      
      $(".slideit").slick({
        dots: true,
        arrows:false,
        infinite: true,
        autoplay:true,
        centerMode:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
    	fade: true,
    	cssEase: 'linear'
      });

    });