$(document).ready(function () {

  const mb = new Swiper(".mb", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });


  $(".play").hide();
  // .pause를 클릭했을 때
  // mb슬라이드의 자동재생(autoplay)을 멈춰라(stop)
  $(".pause").click(function () {
    mb.autoplay.stop();
    $(".pause").hide();
    $(".play").show();
  });
  $(".play").click(function () {
    mb.autoplay.start();
    $(".pause").show();
    $(".play").hide();
  });

  // news
  const news = new Swiper(".news", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,
    loop: true,
    direction: "vertical", // 수직 슬라이드
  });

  // prd
  const prd_list = new Swiper(".prd_list", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 20, // 슬라이드 사이 여백
    breakpoints: {
      768: {
        // 가로해상도가 768px 이상일 경우
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1400: {
        // 가로해상도가 1024px 이상일 경우
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      dragSize: 200,
      draggable: true,
    },
  });

  $(".prd_list li a img:nth-child(2)").hide();
  $(".prd_list li").hover(function () {
    $(this).find("img:nth-child(2)").stop().fadeToggle();
  });


  // .tab_btn li 1,2,3,4를 클릭했을 때
  // .tab_img li 1,2,3,4를 보여라(형제들은 숨겨라)
  // $(".tab_img li:not(:first-child)").hide();
  // $(".tab_btn li:nth-child(1)").click(function () {
  //   $(this).addClass("on").siblings().removeClass("on");
  //   $(".tab_img li:nth-child(1)").fadeIn().siblings().fadeOut();
  // });
  // $(".tab_btn li:nth-child(2)").click(function () {
  //   $(this).addClass("on").siblings().removeClass("on");
  //   $(".tab_img li:nth-child(2)").fadeIn().siblings().fadeOut();
  // });
  // $(".tab_btn li:nth-child(3)").click(function () {
  //   $(this).addClass("on").siblings().removeClass("on");
  //   $(".tab_img li:nth-child(3)").fadeIn().siblings().fadeOut();
  // });
  // $(".tab_btn li:nth-child(4)").click(function () {
  //   $(this).addClass("on").siblings().removeClass("on");
  //   $(".tab_img li:nth-child(4)").fadeIn().siblings().fadeOut();
  // });


  $(".tab_btn li").click(function () {
    let idx = $(this).index(); //.tab_btn li 클릭한 요소 번호 찾기
    $(this).addClass("on").siblings().removeClass("on");
    $(".tab_img li").eq(idx).fadeIn().siblings().fadeOut();
  });

  $(".museum_list li:nth-child(1)").addClass("active");
  $(".museum_list li").mouseenter(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });


});