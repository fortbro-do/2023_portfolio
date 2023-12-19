$(function () {
  let btnAlram = $('.alram');
  btnAlram.on('click', toggleAlram);

  function toggleAlram() {
    let popup = $('.alram-popup');
    popup.slideToggle();
  }

  //팝업버튼 누르면 팝업 열린다.
  //팝업버튼 누르면 딤드 열린다.
  let btnOpenPopup = $('.btn-open-popup')
  btnOpenPopup.on('click', openPopup);
  function openPopup() {
    $('.popup').show();
    $('.dimmed').show();
  }
  //팝업 닫기 누르면 팝업 닫힌다.
  //팝업 닫기 누르면 딤드 닫힌다.
  let btnClosePopup = $('.btn-close-popup')
  btnClosePopup.on('click', closePopup);
  function closePopup() {
    $('.popup').hide();
    $('.dimmed').hide();
  }

  function fixed() {
    const header = $('.header.index');
    const header2 = $('.header.sub');
    $(window).on('scroll', headerFixed);
    function headerFixed() {
      let scroll = $(this).scrollTop();

      console.log(scroll);
      if (scroll > 200) {
        header.addClass('fixed');
        if (scroll > 800) {
          header.addClass('bg');
          $('.idp').addClass('opacity');
          if (scroll > 1000) {
            $('.learning-lounge').addClass('opacity');
          }
        } else {
          header.removeClass('bg');
        }
      } else {
        header.removeClass('fixed');
      }

      if (scroll > 50) {
        header2.addClass('fixed');
        if (scroll > 100) {
          header2.addClass('bg');
          if (scroll > 200) {
            $('.contents-list').addClass('opacity');
          }
        }
        else {
          header2.removeClass('bg');
        }
      } else {
        header2.removeClass('fixed');
      }
    }
  }
    fixed();

    function addList() {
      const btnMore = $('.btn-more');
      const loungeList = $('.lounge-list');

      btnMore.on('click', moreList);

      function moreList() {
        let listCount = loungeList.children().length;

        if (listCount < 20) {
          loungeList.append(`<li>
      <a href="#none">
          <div class="thumb">
              <img src="images/img_thumb.png" alt="">
          </div>
          <div class="badge-group">
              <span class="badge orange">경영</span>
              <span class="badge white">100</span>
          </div>
          <div class="title">상급 매니저 MI 워크숍 (과정명)</div>
          <div class="hashtag">#상급매니저과정 #팀장이상 #리더십 </div>
          <ul class="information">
              <li>
                  <pre>형         태</pre> : 온라인/오프라인/온+오프라인
              </li>
              <li>
                  <pre>일         정</pre> : 2021.04.20 ~ 2021.04.25
              </li>
          </ul>
          <div class="schedule">신청기간 : 2021.04.10 ~ 2021.04.15</div>
      </a>
  </li>`);
          loungeList.append(`<li>
      <a href="#none">
          <div class="thumb">
              <img src="images/img_thumb2.png" alt="">
          </div>
          <div class="badge-group">
              <span class="badge green">경영</span>
              <span class="badge white">100</span>
          </div>
          <div class="title">상급 매니저 MI 워크숍 (과정명)</div>
          <div class="hashtag">#상급매니저과정 #팀장이상 #리더십 </div>
          <ul class="information">
              <li>
                  <pre>형         태</pre> : 온라인/오프라인/온+오프라인
              </li>
              <li>
                  <pre>일         정</pre> : 2021.04.20 ~ 2021.04.25
              </li>
          </ul>
          <div class="schedule">신청기간 : 2021.04.10 ~ 2021.04.15</div>
      </a>
  </li>`);
          loungeList.append(` <li>
      <a href="#none">
          <div class="thumb">
              <img src="images/img_thumb3.png" alt="">
          </div>
          <div class="badge-group">
              <span class="badge blue">경영</span>
              <span class="badge white">100</span>
          </div>
          <div class="title">상급 매니저 MI 워크숍 (과정명)</div>
          <div class="hashtag">#상급매니저과정 #팀장이상 #리더십 </div>
          <ul class="information">
              <li>
                  <pre>형         태</pre> : 온라인/오프라인/온+오프라인
              </li>
              <li>
                  <pre>일         정</pre> : 2021.04.20 ~ 2021.04.25
              </li>
          </ul>
          <div class="schedule">신청기간 : 2021.04.10 ~ 2021.04.15</div>
      </a>
  </li>`);
          loungeList.append(` <li>
      <a href="#none">
          <div class="thumb">
              <img src="images/img_thumb4.png" alt="">
          </div>
          <div class="badge-group">
              <span class="badge purple">경영</span>
              <span class="badge white">100</span>
          </div>
          <div class="title">상급 매니저 MI 워크숍 (과정명)</div>
          <div class="hashtag">#상급매니저과정 #팀장이상 #리더십 </div>
          <ul class="information">
              <li>
                  <pre>형         태</pre> : 온라인/오프라인/온+오프라인
              </li>
              <li>
                  <pre>일         정</pre> : 2021.04.20 ~ 2021.04.25
              </li>
          </ul>
          <div class="schedule">신청기간 : 2021.04.10 ~ 2021.04.15</div>
      </a>
  </li>`);
        } else {
          alert('더이상 게시물이 없습니다.');
        }
      }
    }
    addList();



  });