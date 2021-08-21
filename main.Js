$(function () {
  $(".toggle-btn").on("click", function () {
    if (!$("#header").hasClass("open")) {
      $("#header").addClass("open");
    } else {
      $("#header").removeClass("open");
    }
  });

  $(".slider").slick({
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<div class=slick-prev></div>",
    nextArrow: "<div class=slick-next></div>",
    centerMode: true,
    variableWidth: true,
    dots: true,
  });

  $("#mask").on("click", function () {
    $("#header").removeClass("open");
  });

  $("#navi a").on("click", function () {
    $("#header").removeClass("open");
  });

  $('a[href^="#"]').click(function () {
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    return false;
  });

  $(window).scroll(function () {
    $(".fade-in").each(function () {
      let scroll = $(window).scrollTop();
      let target = $(this).offset().top;
      let windowHeight = $(window).height();
      if (scroll > target - windowHeight + 200) {
        $(this).css("opacity", "1");
        $(this).css("transform", "translateY(0)");
      }
    });
  });

  $("#page-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });
});
