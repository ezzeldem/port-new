(function () {
  // tab toggle
  $(".nav_box nav ul li a").click(function (e) {
    if (!$(this).hasClass('active')) {
      idName = $(this).attr("data-tab");
      $(this).addClass("active");
      $(this).parents("li").siblings().children("a").removeClass("active");
      $(".tab_min_box .tab_box").removeClass("active");
      $(".tab_min_box .tab_box#" + idName).addClass("active");
      $(".tab_min_box .tab_box .login_layOut").removeClass("active");
      setTimeout(function () {
        $(".tab_min_box .tab_box.active .login_layOut").addClass("active");
      }, 800);
      $("html, body").animate({
        scrollTop: $('body').offset().top,
      }
        , 0);
    }


  });

  // fillter

  if ($(".filter-content").length) {
    var mixer = mixitup(".filter-content");
  }
})();




var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");

document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText = "left:" + e.clientX + "px; top:" + e.clientY + "px;"
});
