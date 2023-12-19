$(function(){


function dropMenu(){
const bg = $('.menu-bg');
const dimed = $('.dimed');
const gnb =$('.header nav');
const gnbList =$('.header .gnb li');
const gnbLast= $('.gnb li:last-child li:last-child a')
const gnbFirst= $('.gnb > li:first-child  a')

gnbList.on('mouseenter keyup', showNav);
gnb.on('mouseleave', hideNav);
gnbLast.on('keydown', hideNavLast);
gnbFirst.on('keydown', hideNavFirst);

function showNav() {
    $(this).children('div').stop().fadeIn();
    $(this).siblings('li').children('div').stop().fadeOut();
    bg.stop().slideDown();
    dimed.stop().fadeIn();
}
function hideNav() {
    gnb.find('.gnb li div').stop().slideUp();
    bg.stop().slideUp();
    dimed.stop().fadeOut();
  }
  function hideNavLast(e){
    if(e.keyCode == 9){
      hideNav();
    }
    }
  function hideNavFirst(e){
    if(e.keyCode == 9 && e.shiftKey){
      hideNav();
    }
  }
}
dropMenu();

function allMenuBt(){
const btnAllMenu = $('.btn-allmenu-open');
const viewAllMenu = $('.view-allmenu-open');

btnAllMenu.on('click',addClass);
btnAllMenu.on('click',toggleMenu);
btnAllMenu.on('click',changeText);

function addClass(){
 $(this).toggleClass('active')
}
function toggleMenu (){
 viewAllMenu.stop().slideToggle();
}
function changeText(){
 let text = $('.btn-allmenu-open span').text();

if(text == '전체보기'){
 $('.btn-allmenu-open span').text('접기')
}else{
 $('.btn-allmenu-open span').text('전체보기')
}
}

}
allMenuBt();

function familySite(){
 const btnFamily = $('.btn-family-site button');
 const listFamily = $('.family-site');

 btnFamily.on('click', toggleList);
 btnFamily.on('click', arrowRotate);

 function toggleList(){
  listFamily.stop().slideToggle();
 }
 function arrowRotate(){
  $(this).toggleClass('active')
 }
}
familySite();


function addList (){

 const btnMore =$('.view-more');
 const productList =$('.product-list .detail-list');

 btnMore.on('click', moreList);

 function moreList(){
  let listCount = productList.children().length;
  console.log(listCount);

  if(listCount < 20){
   productList.append(`<li class="product_1">
   <div>
       <a href="">
           <div>
               <p class="product-info">LG SIGNATURE <br>얼음정수기냉장고</p>
               <p class="product-code">J842ND79</p>
           </div>
       </a>
       <div class="visit-cycle">
           <p>방문주기</p>
           <select name="방문주기" disabled title="방문주기">
               <option value="">3개월</option>
           </select>
       </div>
       <div class="usefee">
           <p>이용 요금</p>
           <p class="monthly-fee">월 15,900원</p>
       </div>
   </div>
</li>`);
   productList.append(`<li class="product_2">
   <div>
       <a href="">
           <div>
               <p class="product-info">LG 디오스 오브제컬렉션 <br>얼음정수기냉장고</p>
               <p class="product-code">W823GKB472S</p>
           </div>
       </a>
       <div class="visit-cycle">
           <p>방문주기</p>
           <select name="방문주기" disabled title="방문주기">
               <option value="">3개월</option>
           </select>
       </div>
       <div class="usefee">
           <p>이용 요금</p>
           <p class="monthly-fee">월 17,900원</p>
       </div>
   </div>
</li>`);
   productList.append(`<li class="product_3">
   <div>
       <a href="">
           <div>
               <p class="product-info">LG 디오스 오브제컬렉션 <br>얼음정수기냉장고</p>
               <p class="product-code">W823GPB472S</p>
           </div>
       </a>
       <div class="visit-cycle">
           <p>방문주기</p>
           <select name="방문주기" disabled title="방문주기">
               <option value="">3개월</option>
           </select>
       </div>
       <div class="usefee">
           <p>이용 요금</p>
           <p class="monthly-fee">월 17,900원</p>
       </div>
   </div>
</li>`);
   productList.append(` <li class="product_4">
   <div>
       <a href="">
           <div>
               <p class="product-info">LG 디오스 오브제컬렉션 <br>얼음정수기냉장고</p>
               <p class="product-code">W823SMS472S</p>
           </div>
       </a>
       <div class="visit-cycle">
           <p>방문주기</p>
           <select name="방문주기" disabled title="방문주기">
               <option value="">3개월</option>
           </select>
       </div>
       <div class="usefee">
           <p>이용 요금</p>
           <p class="monthly-fee">월 17,900원</p>
       </div>
   </div>
</li>`);
  }else{
   alert('더이상 게시물이 없습니다.');
  }
 }
}
addList();


$('.move-top').on('click', function(){
    window.scrollTo({top:0, behavior:"smooth"})
})


     const swiper = new Swiper(".story-list", {
        slidesPerView: 3,
      spaceBetween: 20,
      centeredSlides: true,
      loop: true,
      pagination: {
        el: ".story-pagination",
        clickable: true,
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      });
      $('.btn-pause').click(function(){
        swiper.autoplay.stop();
       });
       $('.btn-start').click(function(){
          swiper.autoplay.start();
         });


     const swiper2 = new Swiper(".banner-swiper", {
        slidesPerView: 1.5,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
});

