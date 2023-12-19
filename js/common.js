$(function () {



  const icoMenu = $('.menu-icon')
  icoMenu.on('click', toggleMenu);
  function toggleMenu() {
    $(this).toggleClass('active');
    $('.header').toggleClass('active');
    $('main').toggleClass('active');
  }

  // tab/nav

  function activeBtn() {

    let tabBtn = $('.experience-box > li');
    let tabCont = $('.experience-list > div');
    tabCont.hide().eq(0).show();

    tabBtn.on('click', changeTab);
    function changeTab() {
      const index = $(this).index();

      $(this).addClass('select').siblings().removeClass('select');
      tabCont.eq(index).stop().fadeIn(1000).siblings().hide();
    }
  }
  activeBtn();

  function activeNav() {
    const navBtn = $('.nav li')
    navBtn.on('click', moveNav);
    function moveNav() {
      $(this).addClass('active').siblings().removeClass('active');
    }
  }
  activeNav();




  //project

  function iframeCont() {
    let btnVali = $('.web-validation > .btn__box .btn_validation');
    let valiIframe = $('.web-validation > .web-validation__box div')
    const btnClose = $('.web-validation > .web-validation__box .btn_close')
    valiIframe.hide();

    btnVali.on('click', showPdf);
    btnClose.on('click', hideCont);
    function showPdf() {
      const index = $(this).index();
      valiIframe.eq(index).stop().fadeIn(1000);
    }
    function hideCont() {
      valiIframe.hide()
    }
  }
  iframeCont();

  // popup
  function openPopup() {
    let projectList = $('.project-list > li');
    let detailPage = $('.detail-page > div');
    projectList.on('click', openProject);
    function openProject() {
      const index = $(this).index();
      console.log(index);
      $(window).scroll(function () {
        let scrollValue = $(document).scrollTop();
        console.log(scrollValue);
        $(window).scrollTop(scrollValue);

      });
      // 클릭 시 스크롤 고정 

      $('.detail-page').stop().fadeIn();
      $('.detail-bg').stop().fadeIn();
      detailPage.eq(index).addClass('active').stop().fadeIn(1000).siblings().hide();
      if ($(this).hasClass('soon')) {
        $('.detail-page').stop().fadeOut();
        $('.detail-bg').stop().fadeOut();
        alert(["준비중입니다."])

      }

    }
  }
  openPopup();

  function closePopup() {
    const btnPrev = $('.btn_prev');
    btnPrev.on('click', hideDetail);
    function hideDetail() {
      $('.detail-page >div').scrollTop(0);
      $(this).parents('.detail-page').stop().fadeOut(1000);
      $('.detail-bg').stop().fadeOut(1000);
    }
  }
  closePopup();







  // device popup

  function popupDevice() {
    $('.btn4').on('click', popupClose);
    $('.btn__kogas').on('click', openKogas);
    $('.btn__millie').on('click', openMillie);
    $('.btn__lgbest').on('click', openLgbest);
    $('.btn__practice').on('click', function () {
      $('.practice__box').fadeIn();
    });
    $('.btn5').on('click', function () {
      $('.project__cont').fadeOut();
      $('.practice__box').fadeOut();
    });
    $('.btn6').on('click', function () {
      $('.detail-dimmed').fadeOut();
      $('.project__cont').fadeOut();
      $('.device-popup').fadeOut();
      $('.btn-group > div> button:last-child').addClass('active').siblings().removeClass('active');
    });

    $('.project__practice > li > button').on('click', function () {
      if ($(this).hasClass('content4')) {
        $('.detail-dimmed').fadeIn();
        $('.project__cont').fadeIn();
        $('.web-popup').fadeIn();
        $('.device').css('width', '1500');
        $('.device').css('height', '720');
        $(' .frame iframe').css('height', '650');
        $('.device').attr('name', 'btn3');
        $('.top, .mac, .btm ').show();
        $('.device').removeClass('device2 , device2-iphone-14-pro , device3 ,device3-ipad-pro ');
        $('.frame').removeClass('device2-screen , device3-screen')
        $('.d-stripe ,.d-header, .d-sensors, .d-btns, .d-power, .d-home ').hide();
      } else if ($(this).hasClass('content5')) {
        $('.detail-dimmed').fadeIn();
        $('.project__cont').fadeIn();
        $('.mobile-popup').fadeIn();
        $('.device').css('width', '398');
        $('.device').css('height', '746');
        $(' .frame iframe').css('height', '650');
        $('.device').attr('name', 'btn1');
        $('.top, .mac, .btm ').hide();
        $('.device').removeClass('device3 , device3-ipad-pro ');
        $('.box').removeClass('device3-frame')
        $('.frame').removeClass('device3-screen')
        $('.device').removeClass('device3 , device3-ipad-pro ');
        $('.frame').removeClass('device3-screen')
        $('.d-stripe').removeClass('device3-stripe')
        $('.d-header').removeClass('device3-header')
        $('.d-sensors').removeClass('device3-sensors')
        $('.d-btns').removeClass('device3-btns')
        $('.d-power').removeClass('device3-power')
        $('.d-home').removeClass('device3-home')
        $('.device').addClass('device2 , device2-iphone-14-pro ');
        $('.frame').addClass('device2-screen')
        $('.d-stripe').addClass('device2-stripe')
        $('.d-header').addClass('device2-header')
        $('.d-sensors').addClass('device2-sensors')
        $('.d-btns').addClass('device2-btns')
        $('.d-power').addClass('device2-power')
        $('.d-home').addClass('device2-home')
        $('.d-stripe ,.d-header, .d-sensors, .d-btns, .d-power, .d-home ').show();
      } else if ($(this).hasClass('content6')) {
        $('.detail-dimmed').fadeIn();
        $('.project__cont').fadeIn();
        $('.responsive-popup').fadeIn();
        $('.device').css('width', '1500');
        $('.device').css('height', '720');
        $(' .frame iframe').css('height', '650');
        $('.device').attr('name', 'btn3');
        $('.top, .mac, .btm ').show();
        $('.device').removeClass('device2 , device2-iphone-14-pro , device3 ,device3-ipad-pro ');
        $('.frame').removeClass('device2-screen , device3-screen')
        $('.d-stripe ,.d-header, .d-sensors, .d-btns, .d-power, .d-home ').hide();
      } else if ($(this).hasClass('content7')) {
        $('.detail-dimmed').fadeIn();
        $('.project__cont').fadeIn();
        $('.responsive-b-popup').fadeIn();
        $('.device').css('width', '1500');
        $('.device').css('height', '720');
        $(' .frame iframe').css('height', '650');
        $('.device').attr('name', 'btn3');
        $('.top, .mac, .btm ').show();
        $('.device').removeClass('device2 , device2-iphone-14-pro , device3 ,device3-ipad-pro ');
        $('.frame').removeClass('device2-screen , device3-screen')
        $('.d-stripe ,.d-header, .d-sensors, .d-btns, .d-power, .d-home ').hide();
      } else if ($(this).hasClass('content8')) {
        $('.detail-dimmed').fadeIn();
        $('.project__cont').fadeIn();
        $('.other-popup').fadeIn();
        $('.device').css('width', '1330');
        $('.device').css('height', '718');
        $(' .frame iframe').css('height', '630');
        $('.device').attr('name', 'btn3');
        $('.top, .mac, .btm ').show();
        $('.device').removeClass('device2 , device2-iphone-14-pro , device3 ,device3-ipad-pro ');
        $('.frame').removeClass('device2-screen , device3-screen')
        $('.d-stripe ,.d-header, .d-sensors, .d-btns, .d-power, .d-home ').hide();
      }
    });

    function popupClose() {
      $('.detail-dimmed').fadeOut();
      $('.device-popup').fadeOut();
      $('.project__cont').fadeOut();
      $('.btn-group > div> button:last-child').addClass('active').siblings().removeClass('active');
    }

    $('.file-list > ul > li > a').on('click', fileListOpen);
    function fileListOpen() {
      if ($(this).hasClass('index-file')) {
        $('.device').attr('name', 'btn3');
        $('.device').css('width', '1330');
        $('.device').css('height', '718');
        $(' .frame iframe').css('height', '630');
        $('.top, .mac, .btm ').show();
        $('.device').removeClass('device2 , device2-iphone-14-pro , device3 ,device3-ipad-pro ');
        $('.frame').removeClass('device2-screen , device3-screen')
        $('.d-stripe ,.d-header, .d-sensors, .d-btns, .d-power, .d-home ').hide();
        $('.btn-group > div> button:last-child').addClass('active').siblings().removeClass('active');
      } else if ($(this).hasClass('index-file-big')) {
        $('.device').attr('name', 'btn3');
        $('.device').css('width', '1500');
        $('.device').css('height', '720');
        $(' .frame iframe').css('height', '650');
        $('.top, .mac, .btm ').show();
        $('.device').removeClass('device2 , device2-iphone-14-pro , device3 ,device3-ipad-pro ');
        $('.frame').removeClass('device2-screen , device3-screen')
        $('.d-stripe ,.d-header, .d-sensors, .d-btns, .d-power, .d-home ').hide();
        $('.btn-group > div> button:last-child').addClass('active').siblings().removeClass('active');
      } else if ($(this).hasClass('device-m')) {
        $('.device').attr('name', 'btn1');
        $('.device').css('width', '398');
        $('.device').css('height', '746');
        $(' .frame iframe').css('height', '650');
        $('.top, .mac, .btm ').hide();
        $('.device').removeClass('device3 , device3-ipad-pro ');
        $('.box').removeClass('device3-frame')
        $('.frame').removeClass('device3-screen')
        $('.device').removeClass('device3 , device3-ipad-pro ');
        $('.frame').removeClass('device3-screen')
        $('.d-stripe').removeClass('device3-stripe')
        $('.d-header').removeClass('device3-header')
        $('.d-sensors').removeClass('device3-sensors')
        $('.d-btns').removeClass('device3-btns')
        $('.d-power').removeClass('device3-power')
        $('.d-home').removeClass('device3-home')
        $('.device').addClass('device2 , device2-iphone-14-pro ');
        $('.frame').addClass('device2-screen')
        $('.d-stripe').addClass('device2-stripe')
        $('.d-header').addClass('device2-header')
        $('.d-sensors').addClass('device2-sensors')
        $('.d-btns').addClass('device2-btns')
        $('.d-power').addClass('device2-power')
        $('.d-home').addClass('device2-home')
        $('.d-stripe ,.d-header, .d-sensors, .d-btns, .d-power, .d-home ').show();
        $('.btn-group > div> button:first-child').addClass('active').siblings().removeClass('active');
      }
    }



    function openKogas() {
      $('.detail-dimmed').fadeIn();
      $('.project__cont').fadeIn();
      $('.device-popup.kogas__box').fadeIn();
      $('.device').css('width', '1330');
      $('.device').css('height', '718');
      $('.frame iframe').css('height', '630');
      $('.device').attr('name', 'btn3');
      $('.top, .mac, .btm ').show();
      $('.device').removeClass('device2 , device2-iphone-14-pro , device3 ,device3-ipad-pro ');
      $('.frame').removeClass('device2-screen , device3-screen')
      $('.d-stripe ,.d-header, .d-sensors, .d-btns, .d-power, .d-home ').hide();
    }
    function openLgbest() {
      $('.detail-dimmed').fadeIn();
      $('.project__cont').fadeIn();
      $('.device-popup.lgbestshop__box').fadeIn();
      $('.device').css('width', '1500');
      $('.device').css('height', '720');
      $(' .frame iframe').css('height', '650');
      $('.device').attr('name', 'btn3');
      $('.top, .mac, .btm ').show();
      $('.device').removeClass('device2 , device2-iphone-14-pro , device3 ,device3-ipad-pro ');
      $('.frame').removeClass('device2-screen , device3-screen')
      $('.d-stripe ,.d-header, .d-sensors, .d-btns, .d-power, .d-home ').hide();
    }
    function openMillie() {
      $('.detail-dimmed').fadeIn();
      $('.project__cont').fadeIn();
      $('.device-popup.millie__box').fadeIn();
      $('.device').css('width', '398');
      $('.device').css('height', '746');
      $(' .frame iframe').css('height', '650');
      $('.device').attr('name', 'btn1');
      $('.top, .mac, .btm ').hide();
      $('.device').removeClass('device3 , device3-ipad-pro ');
      $('.box').removeClass('device3-frame')
      $('.frame').removeClass('device3-screen')
      $('.device').removeClass('device3 , device3-ipad-pro ');
      $('.frame').removeClass('device3-screen')
      $('.d-stripe').removeClass('device3-stripe')
      $('.d-header').removeClass('device3-header')
      $('.d-sensors').removeClass('device3-sensors')
      $('.d-btns').removeClass('device3-btns')
      $('.d-power').removeClass('device3-power')
      $('.d-home').removeClass('device3-home')
      $('.device').addClass('device2 , device2-iphone-14-pro ');
      $('.frame').addClass('device2-screen')
      $('.d-stripe').addClass('device2-stripe')
      $('.d-header').addClass('device2-header')
      $('.d-sensors').addClass('device2-sensors')
      $('.d-btns').addClass('device2-btns')
      $('.d-power').addClass('device2-power')
      $('.d-home').addClass('device2-home')
      $('.d-stripe ,.d-header, .d-sensors, .d-btns, .d-power, .d-home ').show();
    }




    $('.btn-group button').on('click', function () {
      const largeDevice = $('.lgbestshop__box .device , .web-popup .device , .responsive-popup .device , .responsive-b-popup .device');
      const largeFrame = $('.lgbestshop__box .frame iframe , .web-popup .frame iframe  , .responsive-popup .frame iframe , .responsive-b-popup .frame iframe');
      if ($(this).hasClass('btn1')) {
        $(this).addClass('active').siblings().removeClass('active');
        $('.device').css('width', '398');
        $('.device').css('height', '746');
        $(' .frame iframe').css('height', '650');
        $('.device').attr('name', 'btn1');
        $('.top, .mac, .btm ').hide();
        $('.device').removeClass('device3 , device3-ipad-pro ');
        $('.box').removeClass('device3-frame')
        $('.frame').removeClass('device3-screen')
        $('.device').removeClass('device3 , device3-ipad-pro ');
        $('.frame').removeClass('device3-screen')
        $('.d-stripe').removeClass('device3-stripe')
        $('.d-header').removeClass('device3-header')
        $('.d-sensors').removeClass('device3-sensors')
        $('.d-btns').removeClass('device3-btns')
        $('.d-power').removeClass('device3-power')
        $('.d-home').removeClass('device3-home')
        $('.device').addClass('device2 , device2-iphone-14-pro ');
        $('.frame').addClass('device2-screen')
        $('.d-stripe').addClass('device2-stripe')
        $('.d-header').addClass('device2-header')
        $('.d-sensors').addClass('device2-sensors')
        $('.d-btns').addClass('device2-btns')
        $('.d-power').addClass('device2-power')
        $('.d-home').addClass('device2-home')
        $('.d-stripe ,.d-header, .d-sensors, .d-btns, .d-power, .d-home ').show();
      } else if ($(this).hasClass('btn2')) {
        $(this).addClass('active').siblings().removeClass('active');
        $('.device').css('width', '1008');
        $('.device').css('height', '658');
        $(' .frame iframe').css('height', '600');
        $('.device').attr('name', 'btn2');
        $('.top, .mac, .btm ').hide();
        $('.device').removeClass('device2 , device2-iphone-14-pro ');
        $('.frame').removeClass('device2-screen')
        $('.box').removeClass('device2-frame')
        $('.frame').removeClass('device2-screen')
        $('.d-stripe').removeClass('device2-stripe')
        $('.d-header').removeClass('device2-header')
        $('.d-sensors').removeClass('device2-sensors')
        $('.d-btns').removeClass('device2-btns')
        $('.d-power').removeClass('device2-power')
        $('.d-home').removeClass('device2-home')
        $('.device').addClass('device3 , device3-ipad-pro ');
        $('.frame').addClass('device3-screen')
        $('.d-stripe').addClass('device3-stripe')
        $('.d-header').addClass('device3-header')
        $('.d-sensors').addClass('device3-sensors')
        $('.d-btns').addClass('device3-btns')
        $('.d-power').addClass('device3-power')
        $('.d-home').addClass('device3-home')
        $('.d-stripe ,.d-header, .d-sensors, .d-btns, .d-power, .d-home ').show();

      } else if ($(this).hasClass('btn3')) {
        $(this).addClass('active').siblings().removeClass('active');
        $('.device').css('width', '1330');
        $('.device').css('height', '718');
        $(' .frame iframe').css('height', '630');
        $('.device').attr('name', 'btn3');
        $('.top, .mac, .btm ').show();
        $('.device').removeClass('device2 , device2-iphone-14-pro , device3 ,device3-ipad-pro ');
        $('.frame').removeClass('device2-screen , device3-screen')
        $('.d-stripe ,.d-header, .d-sensors, .d-btns, .d-power, .d-home ').hide();
        largeDevice.css('width', '1500');
        largeDevice.css('height', '720');
        largeFrame.css('height', '650');
      }
    });
    function clickEffect() {
      const btnTitle = $('.project__nav li');

      btnTitle.on('click', changeTxt);

      function changeTxt() {

        $(this).addClass('active').siblings().removeClass('active');
      }

    };
    clickEffect();

    let listTab = $('.file-list li');

    listTab.on('click', addClass)


    function addClass() {

      $(this).addClass('active').siblings().removeClass('active')
      $(this).children().addClass('active').parents('li').siblings().children().removeClass('active')

    }
  }
  popupDevice();


  function btnActive() {
    const btn1 = $('.btn__nav1')
    const btn2 = $('.btn__nav2')
    const btn3 = $('.btn__nav3')
    const btn4 = $('.btn__nav4')
    const btn5 = $('.btn__nav5')
    const projectNav = $('.gnb .nav li')

    projectNav.on('keyup', moveScroll);
    projectNav.on('click', moveScroll);

    $(window).on('scroll', addClass);

    function moveScroll() {
      $(this).addClass('active').siblings().removeClass('active');
      if ($(this).hasClass('btn__nav1')) {
        $(window).scrollTop(0);
      }
      if ($(this).hasClass('btn__nav2')) {
        $(window).scrollTop(881);
      }
      if ($(this).hasClass('btn__nav3')) {
        $(window).scrollTop(3000);
      }
      if ($(this).hasClass('btn__nav4')) {
        $(window).scrollTop(3600);
      }
      if ($(this).hasClass('btn__nav5')) {
        $(window).scrollTop(4273);
      }
    }



    function addClass() {
      // $(window).on('scroll' , function(){
      //   console.log(window.scrollY)
      // });
      let scroll = $(this).scrollTop();

      if (scroll < 500) {
        btn1.addClass('active').siblings().removeClass('active');
      }

      if (scroll > 501) {
        btn2.addClass('active').siblings().removeClass('active');


      }
      if (scroll > 2700) {
        btn3.addClass('active').siblings().removeClass('active');


      }
      if (scroll > 3022) {
        btn4.addClass('active').siblings().removeClass('active');


      }
      if (scroll > 4272) {
        btn5.addClass('active').siblings().removeClass('active');


      }
    }
  };
  btnActive();
});