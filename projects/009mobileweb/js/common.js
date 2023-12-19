$(function(){

 function megaMenu(){
  const body =$('body');
  const menuBox =$('.mega-menu');
  const btnBurger=$('.btn-menu');
  const btnCancle = $('.btn-cancle');

 btnBurger.on('click', openMenu);
 btnCancle.on('click', closeMenu);
   function openMenu(){
    menuBox.show();
    body.addClass('active');
   }
   function closeMenu(){
    menuBox.hide();
    body.removeClass('active');
   }

 }
 megaMenu();


 function sort (){
const input = $('.sort input');
const content = $('.sort-content');

input.on('click', radioTab);

function radioTab(){
  let index = $(this).index();
  let result = index /2;

  content.removeClass('active');
  content.eq(result).addClass('active');

}
}
 sort();

function tab(){
  const tab1 = $('.tab-type1 li button');

  tab1.on('click', moveTab);

  function moveTab(){
    $(this).parents('li').addClass('active').siblings().removeClass('active');
    if($(this).parents('li').hasClass('table1')){
      $('.table1-1').show()
      $('.table2-1').hide()
      $('.table3-1').hide()
    }else if($(this).parents('li').hasClass('table2')){
      $('.table1-1').hide()
      $('.table2-1').show()
      $('.table3-1').hide()
    }else if($(this).parents('li').hasClass('table3')){
      $('.table1-1').hide()
      $('.table2-1').hide()
      $('.table3-1').show()
    }
  }
}
tab();


});