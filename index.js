$(document).ready(function () {
  //$("nav,#mainImg,#abouta,#portfolio").remove();
  welcome();
  $(window).resize(function () {
    photo();
  });
  photo();
  scroll();
  imgflip();
  mail();
  projectHover();
});

var welcome = function () {
  $("button").addClass("animated rotateIn");
  $("nav").addClass("animated fadeInDown");

  $("#welcome").addClass("animated fadeInLeft");
  var delayimg = 1;
  while (delayimg < 100) {
    $("#welcome").delay(4000).hide(3000);
    $("#welcome").delay(4000).show(3000);

    $("#smile").addClass("animated pulse");
    delayimg++;
  }
  $("#homehead").addClass("animated fadeInUpBig");
  $("#homehead").addClass("animated fadeInUpBig");
};

var photo = function () {
  var wid = $(window).width();
  var high = $(window).height();
  //$("#mainImg").css("height",high+70);
  //$("#abouta").css("height",high+700);
  //$("#portfolio").css("height",high+70);
};

var scroll = function () {
  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop();
    var scrollBottom =
      $(document).height() - $(window).height() - $(window).scrollTop();
    var top = $("#portfolio").offset().top - 50;
    //var bottom= $('#portfolio').outerHeight(true);
    //console.log(scrollTop+" scrollTop "+top+" top "  +scrollBottom+" scrollBottom "+bottom+"   bottom");

    if (scrollTop > top) {
      $(".project").removeClass("animated flipOutY");
      $(".project").addClass("animated flipInY");
    } else {
      $(".project").addClass("animated flipOutY");
      if ($(".project").hasClass("animated flipInY")) {
        $(".project").removeClass("animated flipInY");
      }
    }
  });
  (function (i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    (i[r] =
      i[r] ||
      function () {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(
    window,
    document,
    "script",
    "//www.google-analytics.com/analytics.js",
    "ga"
  );
  ga("create", "UA-70799120-1", "auto");
  ga("send", "pageview");

  /*
      $(document).ready(function(){
        $("#home").addClass("animated fadeInLeft")
              $("#about-lang").addClass("animated fadeInUp");
      $(window).scroll(function() {
        
        if ($(document).scrollTop() > 350) {
          $("#home").addClass("animated fadeOutLeft");
          $("#about-lang,#about-title").fadeIn();
          
        }
        else if ($(document).scrollTop() < 350) {
          $("#home").removeClass("animated fadeOutLeft");
          $("#home").addClass("animated fadeInLeft");
                $("#about-lang,#about-title").fadeOut()
          
        }
       
           });
        });   */
};

var imgflip = function () {
  $(".hover").hover(
    function () {
      $(this).addClass("animated flip ");
    },
    function () {
      $(this).removeClass("animated flip ");
    }
  );
};

var mail = function () {
  console.log(
    "Hey Devloper.. Thanks for opening console .. :) if you want to develop something with me .. Mail me .. "
  );
  $("#mail-id").hide();
  $("#mail").click(function () {
    $("#mail").addClass("animated hinge");
    $("#mail-id")
      .delay(1500)
      .toggle("slow", function () {});
  });
};

var projectHover = function () {
  $(".project").hover(
    function () {
      $(this).animate(
        {
          width: "265px",
          height: "310px",
          opacity: 0.8,
        },
        100
      );

      $(this).removeClass("flipInY flipOutY");
      $(this).addClass("animated pulse codehover");
    },
    function () {
      $(this).animate(
        {
          width: "260px",
          height: "300px",
          opacity: 1,
        },
        100
      );
      $(this).removeClass("pulse codehover");
    }
  );
};
