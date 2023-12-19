$(function () {

 function loginDialog() {
  let loginId = $('.input-id');
  let loginpw = $('.input-pw');
  let infoNone = $('.info-none');
  let infoInput = $('.info-input');
  let btnClose = $('.btn-close');
  let btnLogin = $('.btn_login');
  let dimed = $('.dimed');
  let btnCheck = $('.btn-yellow');

  function loginEvent() {
   btnLogin.on('click', openDialog)
   btnClose.on('click', closeDialog)
   btnCheck.on('click', closeDialog)
   function openDialog() {
    infoInput.show();
    dimed.show();
   }
   function closeDialog() {
    infoInput.hide();
    dimed.hide();
   }
  }
  loginEvent();
 }
 loginDialog();

 function mobile() {

  let select =$('.select > button');
  let select2 =$('.select-detail > button');
  let selectList =$('.depth1');
  let selectList2 =$('.depth2');

  select.on('click', otherHide);
  select2.on('click', otherHide);
  select.on('click', toggleMenu);
  select2.on('click', toggleMenu2);

  function toggleMenu(){
   selectList.stop().slideToggle();
  }
  function toggleMenu2(){
   selectList2.stop().slideToggle();
  }
  function otherHide(){
   // $(this).parent().sibling().children('button').slideToggle();
   $(this).parent().siblings().children('ul').slideUp();
  }
 };
 mobile();

 function diaLog(){
  const diaLog = $('.dialog');
  const dimed = $('.dimed');
  const btnDelete = $('.btn-delete');
  const btnClose = $('.btn-close');
  const btnCancle = $('.btn-cancle');


  btnDelete.on('click', openDialog);
  btnClose.on('click', closeDialog);
  btnCancle.on('click', closeDialog);

  function openDialog(){
   diaLog.show();
   dimed.show();
  }
  function closeDialog(){
   diaLog.hide();
   dimed.hide();
  }
 }
 diaLog();



 function gnb(){
const bg =$('.drop-menu__bg');
const nav = $('.header__gnb');
const navList = $('.header__gnb li');
const gnbLast= $('.header__gnb li:last-child li:last-child a')
const gnbFirst= $('.header__gnb > li:first-child  a')

nav.on('mouseleave',hideNav);
navList.on('mouseenter keyup', showNav);


function showNav(){
 $(this).children('div').stop().fadeIn();
 $(this).siblings('li').children('div').hide();
 bg.stop().fadeIn();
}
function hideNav(){
 bg.stop().fadeOut();
 nav.find('div').stop().fadeOut();
}


 }
 gnb();
});