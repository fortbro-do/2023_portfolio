$(function () {

    function openDetail() {
        const btnDetail = $('.book-rank__btn-detail');

        btnDetail.on('click', contentView);
        btnDetail.on('click', btnClass);

        function contentView() {
            $(this).prev().children('.book-rank__detail-view').toggleClass('active');
            $(this).parent('li').siblings().children().children('.book-rank__detail-view').removeClass('active');
            $(this).parent('li').siblings().children('button').removeClass('active');
        };
        function btnClass() {
            $(this).toggleClass('active');
        };
    }
    openDetail();

    function rank() {
        const rankList = $('.rank-view');
        const btnRankMore = $('.more-rank');

        btnRankMore.on('click', toggleList);

        function toggleList() {
            rankList.slideToggle();
        };

    }
    rank();

    function addList() {
        const btnPlus = $('.btn-more-view');
        const bestList = $('.best-week-list');

        btnPlus.on('click', moreList);

        function moreList() {
            let listCount = bestList.children().length;

            console.log(listCount);
            if (listCount < 10) {
                bestList.append(`<li>
                    <a href="">
                        <div class="card-list-type3__img1"></div>
                        <div class="card-list-type3__txt-box">
                            <div class="txt-box__info">
                                <div>
                                    <span>연재</span>
                                    <span>총 8화</span>
                                    <span class="yellow-box"><b>42명</b>이 밀어줌</span>
                                </div>
                                <b class="txt-type1 mt9">
                                    지금 귀여운 우주에 있어
                                </b>
                                <p class="book-info txt-type2 mt11">독서를 통해 자신을 발견해온 과정을 필사, 독서기록 등으로 촘촘하게 쌓아온 작가'ㄴㄴㄴㄴ
                                </p>
                                <p class="txt-type2 mt11">하루의책상</p>
                            </div>
                            <div class="view-count mt16">
                                <span>1.0천</span>
                                <span>16</span>
                            </div>
                        </div>
                    </a>
                </li>`);
                bestList.append(`<li>
                    <a href="">
                        <div class="card-list-type3__img1"></div>
                        <div class="card-list-type3__txt-box">
                            <div class="txt-box__info">
                                <div>
                                    <span>연재</span>
                                    <span>총 8화</span>
                                    <span class="yellow-box"><b>42명</b>이 밀어줌</span>
                                </div>
                                <b class="txt-type1 mt9">
                                    지금 귀여운 우주에 있어
                                </b>
                                <p class="book-info txt-type2 mt11">독서를 통해 자신을 발견해온 과정을 필사, 독서기록 등으로 촘촘하게 쌓아온 작가'ㄴㄴㄴㄴ
                                </p>
                                <p class="txt-type2 mt11">하루의책상</p>
                            </div>
                            <div class="view-count mt16">
                                <span>1.0천</span>
                                <span>16</span>
                            </div>
                        </div>
                    </a>
                </li>`);
            } else {
                alert('더이상 게시물이 없습니다.');
            }
        }
    }
    addList();

    function moreInfo(){
        const moreInfo = $('.footer-box > button');
        const dropInfo = $('.footer-drop');

        moreInfo.on('click', openInfo);

        function openInfo(){
            dropInfo.slideToggle();
            moreInfo.toggleClass('active')
        }


    }
    moreInfo();
    function sortUI() {

        const tabButton = $('.btn-sort button');
        const popup = $('.sort-popup, .sort-date');
        const dimed = $('.dimed');
        const sortList = $('.sort-list');
        const sortListBtn = sortList.find('button');
        const closeBtn = $('.cancel');
        const confirm = $('.check');

        const btnDate =$('.btn-sort-date');

        tabButton.on('click', openPop);
        sortListBtn.on('click', activeBtn);
        closeBtn.on('click', closePop);

        btnDate.on('click', opendate);

        function opendate() {
            popup.show();
            dimed.show();
            confirm.on('click', sendText);
            $('body').addClass('over-hidden');
        }

        function openPop() {
            let idx = $(this).index();
            popup.show();
            dimed.show();
            changeTitle(idx);
            changeButton(idx);
            confirm.on('click', sendText);
            $('body').addClass('over-hidden');
        }
        function changeTitle(index) {
            if (index == 0) {
                $('.sort-popup__title').text('정렬 순서');
            } else {
                $('.sort-popup__title').text('필터');
            }
        }
  
        function changeButton(index) {
            if (index == 0) {
                sortListBtn.eq(0).text('최신순');
                sortListBtn.eq(1).text('밀어주리순');
                sortListBtn.eq(2).text('조회순');
            } else {
                sortListBtn.eq(0).text('전체');
                sortListBtn.eq(1).text('완결');
                sortListBtn.eq(2).text('연재');
            }
        }
        function activeBtn() {
            $(this).addClass('select');
            $(this).parent().siblings().children('button').removeClass('select');
        }

        function closePop() {
            $('body').removeClass('over-hidden');
            popup.hide();
            dimed.hide();
        }

        function sendText() {
            sortListBtn.each(searching);
            $('.sort-list-date').find('button').each(searching2);
        }

        function searching2() {
            if ($(this).hasClass('select')) {
                let txt = $(this).text();
                if ($('.sort-popup__title').text() == '조회기간') {
                    btnDate.eq(0).text(txt);
                }
                closePop();
            }
        }
        function searching() {
            if ($(this).hasClass('select')) {
                let txt = $(this).text();
                if ($('.sort-popup__title').text() == '정렬 순서') {
                    tabButton.eq(0).text(txt);
                } else {
                    tabButton.eq(1).text(txt);
                }
                closePop();
            }
        }
    }
        sortUI();


        function search() {
            function searchRank() {
                const clickOff = $('.click-off button');
                const clickOn = $('.click-on button');
                const rnakHide = $('.click-off');
                const rnakShow = $('.click-on');

                clickOff.on('click', addToggleClass);
                clickOn.on('click', removeToggleClass);

                function addToggleClass() {
                    clickOff.parent().removeClass('active');
                    rnakHide.addClass('active');
                    rnakShow.addClass('active');
                }
                function removeToggleClass() {
                    clickOn.parent().removeClass('active');
                    rnakHide.removeClass('active');
                    rnakShow.removeClass('active');
                }
            }
            searchRank();
        }
        search();

        function  scrollFixed(){
            const header = $('header');
            $(window).on('scroll',fixHeader);

            function fixHeader(){
                let scroll =$(this).scrollTop();
                if (scroll>100) {
                    header.addClass('bg');
                }else{
                    header.removeClass('bg');
                }
            }
        }
        scrollFixed();

        function chkbox(){
            const chkGroup = $('.chk-group');
            const chkbox = chkGroup.find('input');

            chkbox.on('click', check);
            
            function check(){
                let idx = $(this).parents('li').index();
                console.log(idx);
                if(chkbox.is(':checked') == true) {
                   $(this).parents(idx).toggleClass('checked');
                }
            }
        }
        chkbox();
        const progressLine = document.querySelector(".autoplay-progress svg");
        var swiper7 = new Swiper(".story-banner", {
            loop: true,
            autoplay: {
                delay: 5500,
                disableOnInteraction: false,
              },
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 0,
            pagination: {
                el: ".swiper-pagination.banner__num",
                type: "fraction",
            },
              on: {
                autoplayTimeLeft(s, time, progress) {
                    progressLine.style.setProperty("--progress", 1 - progress)
                }
            }
          });
          
          $('.btn-play').click(function(){
            swiper7.autoplay.stop();
            $('.btn-pause').show();
            $('.btn-play').hide();
           });
        $('.btn-pause').click(function(){
            swiper7.autoplay.start();
            $('.btn-pause').hide();
            $('.btn-play').show();
           });

        const swiper = new Swiper('.slide1',{
            
            slidesPerView: 2.2,
            spaceBetween: 15,
           
           });
        const swiper2 = new Swiper('.follow-feed',{
            
            slidesPerView: 1.1,
            spaceBetween: 20,
           
           });
        const swiper3 = new Swiper('.swiper-list',{
            loop: true,
            slidesPerView: 3,
            centeredSlides: true,
            spaceBetween: 30,
            navigation: {
                nextEl: ".arrow-right",
                prevEl: ".arrow-left",
              },           
           });

        const swiper4 = new Swiper('.rank-view-slide',{
            slidesPerView: 1,
            grid: {
              rows: 5,
            },
            spaceBetween: 10,
            pagination: {
              el: ".swiper-pagination.dot",
              clickable: true,
            },   
           });

        const swiper5 = new Swiper('.story-rank__list',{
            slidesPerView: 1.5,
      grid: {
        rows: 2,
      },
      spaceBetween: 0,      
           });
        const swiper6 = new Swiper('.coming-book',{
            slidesPerView: 2.5,
            spaceBetween: 30,    
           });
           
           const swiper9 = new Swiper('.content-slide2',{
               slidesPerView: 1.2,
               spaceBetween: 20, 
            });
           const swiper10 = new Swiper('.millie-road, .content-slide, .basic-slide2, .basic-slide',{
               slidesPerView: "auto",
               spaceBetween: 30, 
            });
            
        
    });


      