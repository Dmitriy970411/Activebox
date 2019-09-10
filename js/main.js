$('.single-item').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 762,
      settings: {
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000
      }
    }
  ]
});

$(function() {
   let jsheader = $("#jsheader");
   let header = $("#header");
   let headerH = header.innerHeight();
   var scrollOffset = $(window).scrollTop();
   let nav = $("#nav");
   let navToggle = $("#navToggle");
   let burger = $("#burger");

   checkScroll(scrollOffset);

   $(window).on("scroll download resize", function() {
   
    scrollOffset = $(this).scrollTop();
      checkScroll(scrollOffset);
   });

   function checkScroll(scrollOffset) {
    if (scrollOffset > headerH) {
      jsheader.addClass("fixed");
    } else {
      jsheader.removeClass("fixed");
    }
  }



$("[data-scroll]").on("click", function(event) {
      event.preventDefault();

      let elementId = $(this).data('scroll');
      let elementOffset = $(elementId).offset().top;

      nav.removeClass("show");
      $("body").removeClass("modal-open");
      burger.removeClass("nav-drop");
      navToggle.removeClass("nav-active");


      $("html, body").animate({
        scrollTop: elementOffset -20
      }, 700);
});
   


  navToggle.on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("nav-active");
        nav.toggleClass("show");
        $('body').toggleClass('modal-open');
        burger.toggleClass("nav-drop");

  });





});