
$(function () {

  function burgerMenu() {
    const btnOpenMenu = $('.btn_burger');
    const btnCloseMenu = $('.btn-menu-close');
    const menuBurger = $('.mega-menu');
    const activeMenu = $('.btn_mega-menu__title');
    const menuDepth1 = $('.mega-menu__depth1 > li');



    btnOpenMenu.on('click', openMenu);
    btnCloseMenu.on('click', closeMenu);
    activeMenu.on('click', navActive);
    menuDepth1.on('click', depthActive);
    $(window).on('resize load', webNav);
    $('.mega-menu__depth2 > li > a').on('click', movePage);

    function webNav() {
      let windowSize = $(window).width();

      if (windowSize > 1200) {
        menuDepth1.next().removeAttr('style');
        $('.mega-menu__link-list > li').eq(0).children().addClass('active');
      }
      if (windowSize < 1200) {
        activeMenu.removeClass('active').next().removeClass('active');
      }
    }

    function movePage() {
      let windowSize = $(window).width();
      if (windowSize < 1200)
        menuBurger.hide();
    }
    function navActive() {
      let windowSize = $(window).width();
      if (windowSize > 1200) {
        $(this).addClass('active').next().addClass('active').parent().siblings().children().removeClass('active');
      }
      if (windowSize < 1200) {
        $(this).toggleClass('active').next().toggleClass('active').parent().siblings().children().removeClass('active');
      }
    }
    function depthActive() {
      let windowSize = $(window).width();

      if (windowSize < 1200) {
        // e.preventDefault(); 링크 막는 코드
        $(this).toggleClass('active').siblings().removeClass('active');
      }
    }

    function openMenu() {

      menuBurger.show();
      $('body').addClass('active');
    }

    function closeMenu() {
      menuBurger.hide();
      $('body').removeClass('active');
    }
  }
  burgerMenu();

  function select() {
    const siteBtn = $('.family-site button');

    siteBtn.on('click', toggleList);


    function toggleList() {
      siteBtn.next().stop().slideToggle();
    }
  }
  select();


  function gnbWeb() {
    const gnb = $('.header1__middle nav');
    const menuBg = $('.gnb> li');
    const menuLine = $('.gnb__detail > li');
    const bg = $('.drop-bg');
    const menuImg = $('.img-box');
    const gnbLast = $('.gnb li:last-child li:last-child a')
    const gnbFirst = $('.gnb > li:first-child > a')

    gnb.on('mouseenter keyup', showNav);
    gnb.on('mouseleave', hideNav);
    menuBg.on('mouseenter keyup', showbg);
    menuBg.on('mouseleave ', hidebg);
    menuLine.on('mouseenter keyup', showLine);
    menuLine.on('mouseleave keydown', hideLine);
    gnbLast.on('keydown', hideNavLast);
    gnbFirst.on('keydown', hideNavFirst);

    function showLine() {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    }

    function showNav() {
      gnb.find('.gnb ul').stop().slideDown();
      gnb.find('.header1__bottom').stop().fadeIn();
      bg.stop().slideDown();
      menuImg.stop().slideDown();
    }

    function showbg() {
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    }

    function hideLine() {
      menuLine.removeClass('active')
    }

    function hidebg() {
      menuBg.removeClass('active');
    }
    function hideNav() {
      gnb.find('.gnb ul').stop().slideUp();
      gnb.find('.header1__bottom').stop().fadeOut();
      bg.stop().slideUp();
      menuImg.stop().slideUp();
    }


    function hideNavLast(e) {
      if (e.keyCode == 9) {
        hideNav();
      }
    }

    function hideNavFirst(e) {
      if (e.keyCode == 9 && e.shiftKey) {
        hideNav();
      }
    }

  }
  gnbWeb();





  $(window).on('resize load',getResize);
  function getResize(){
    let windowSize = $(window).width();
    console.log(windowSize);
     if(windowSize > 501){
      const swiper = new Swiper('.quick-menu__slide',{
        slidesPerView: 5,
        spaceBetween: 20,
        navigation: {
          nextEl: ".btn-right",
          prevEl: ".btn-left",
        },
       });
     }else  if(windowSize < 501){
       const swiper1 = new Swiper('.quick-menu__slide',{
         slidesPerView: 4,
         spaceBetween: 20,
         navigation: {
           nextEl: ".btn-right",
           prevEl: ".btn-left",
         },
        });
     }
   };
  const swiper2 = new Swiper('.quick-site',{
    slidesPerView: 5,
    spaceBetween: 10,
    navigation: {
      nextEl: ".btn-next2",
      prevEl: ".btn-prev2",
    },
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    }
   });
   $('.btn-pause2').click(function(){
     swiper2.autoplay.stop();
    });
    $('.btn-next2').click(function(){
       swiper2.autoplay.start();
      });


      const btnSearch = $(".btn_quick-search");
      const btnTop = $(".btn_move-top");
      const btnFixed =$('.btn-fixed');
      
      btnTop.on('click',moveTop);
      btnSearch.on('click', openSearchBar)
      $(window).on('scroll',hideBtnTop);

     function openSearchBar(){
      $('.search-fixed').toggleClass('active');
     }

      function hideBtnTop(){
        let scroll =$(this).scrollTop();
        if (scroll>200) {
          btnFixed.addClass('active');
        }else{
          btnFixed.removeClass('active');
        }
      }

      function moveTop(){
        window.scrollTo({
          top: 0,
          behavior: "smooth",
      });
     
      }

});