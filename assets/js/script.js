(function () {
  $(".sochile_box,.nav_box nav ul li a,.buttom_link.port_box a").hover(
    function () {
      $(".cursor").addClass("white-box");
      $(".cursor2").addClass("big-box");
    },
    function () {
      $(".cursor2").removeClass("big-box");
      $(".cursor").removeClass("white-box");
    }
  );
  $(".portfolio_tab .filter-content .portfolio_box .link_box").hover(
    function () {
      $(".cursor2").addClass("big-box");
    },
    function () {
      $(".cursor2").removeClass("big-box");
    }
  );
  $(".portfolio_tab .portfolio_filter_button_box button").hover(
    function () {
      $(".cursor2").addClass("gold-box");
    },
    function () {
      $(".cursor2").removeClass("gold-box");
    }
  );

  // tab toggle
  $(".nav_box nav ul li a").click(function (e) {
    if (!$(this).hasClass("active")) {
      idName = $(this).attr("data-tab");
      $(this).addClass("active");
      $(this).parents("li").siblings().children("a").removeClass("active");
      $(".tab_min_box .tab_box").removeClass("active");
      $(".tab_min_box .tab_box#" + idName).addClass("active");
      $(".tab_min_box .tab_box .login_layOut").removeClass("active");
      setTimeout(function () {
        $(".tab_min_box .tab_box.active .login_layOut").addClass("active");
      }, 800);
      $("html, body").animate(
        {
          scrollTop: $("body").offset().top,
        },
        0
      );
    }
  });

  // fillter

  if ($(".filter-content").length) {
    var mixer = mixitup(".filter-content");
  }

  $(".curserBox").addClass("show-cursor");
  var cursor = document.querySelector(".cursor");
  var cursor2 = document.querySelector(".cursor2");

  document.addEventListener("mousemove", function (e) {
    cursor.style.cssText = cursor2.style.cssText =
      "left:" + e.clientX + "px; top:" + e.clientY + "px;";
  });
})();
