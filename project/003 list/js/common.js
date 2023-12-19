<<<<<<< HEAD
$(function(){


 function tab(){

  let tabNav = $('.list-type1 a');
  tabNav.on('click',tabNavActive);

  function tabNavActive(){
   let tabIndex= $(this).parent().index(); //사용자가 클릭한 링크의 부모요소가 몇번째 형제인지 알려줌

   console.log(tabIndex);

   tabNav.removeClass('active'); //모든 탭에 있는 클래스를 제거한다.
   $(this).addClass('active');//사용자가 클릭한 링크에 클래스 추가

   // $(this) 사용자가 클릭한 링크
   // .parents('.tab') 조상부모중에 .tab
   // .children('.tab-content') 자식중에 .tab-content
   // .removeClass('active'); active클래스만 삭제
   //.eq(tabIndex) 몇번째 있는지 확인 / tabIndex (변수명)
   //addClass('active) active 클래스 추가
   // 방법1
   $(this).parents('.tab').children('.tab-content').removeClass('active');
   $(this).parents('.tab').children('.tab-content').eq(tabIndex).addClass('active');
   
   //방법2
   // 체이닝 메서드 - 문장처럼 연결해서 사용할 수 있다. 반응하는 순서대로 작성한다.
   $(this).parents('.tab').children('.tab-content').removeClass('active').eq(tabIndex).addClass('active');
  }

  let list2Tab = $('.list-type2 a')

  list2Tab.on('click', tabActive);

  function tabActive(){
   let list2Index =$(this).parent().index();

   list2Tab.removeClass('active');
   $(this).addClass('active')

   $(this).parents('.list-type2tab').children('.tab-content').removeClass('active').eq(list2Index).addClass('active');

  }
}
tab();
 
//FAQ----------------------------------------------------------------------

// function list13 (){
//  let listQuestion = $('.list-question button')
 
//  listQuestion.on('click', openAnswer);
//  function openAnswer(){
//   $(this).next().slideToggle();
//   $(this).toggleClass('active');
//  }
// }
// list13();

function faq(){

 const btn =$('.list-type13 .btn-question')
 
 btn.on('click',otherHide);
 btn.on('click',arrowToggle);
 btn.on('click',answerToggle);
 
 function arrowToggle(){
  $(this).toggleClass('active');
 }
function answerToggle(){
$(this).next().stop().slideToggle();
}
function otherHide(){
 // btn.removeClass('active').next().slideUp();
 $(this).parent().siblings().children('button').removeClass('active');
 $(this).parent().siblings().children('p').slideUp();
}

}
faq();
=======
$(function(){


 function tab(){

  let tabNav = $('.list-type1 a');
  tabNav.on('click',tabNavActive);

  function tabNavActive(){
   let tabIndex= $(this).parent().index(); //사용자가 클릭한 링크의 부모요소가 몇번째 형제인지 알려줌

   console.log(tabIndex);

   tabNav.removeClass('active'); //모든 탭에 있는 클래스를 제거한다.
   $(this).addClass('active');//사용자가 클릭한 링크에 클래스 추가

   // $(this) 사용자가 클릭한 링크
   // .parents('.tab') 조상부모중에 .tab
   // .children('.tab-content') 자식중에 .tab-content
   // .removeClass('active'); active클래스만 삭제
   //.eq(tabIndex) 몇번째 있는지 확인 / tabIndex (변수명)
   //addClass('active) active 클래스 추가
   // 방법1
   $(this).parents('.tab').children('.tab-content').removeClass('active');
   $(this).parents('.tab').children('.tab-content').eq(tabIndex).addClass('active');
   
   //방법2
   // 체이닝 메서드 - 문장처럼 연결해서 사용할 수 있다. 반응하는 순서대로 작성한다.
   $(this).parents('.tab').children('.tab-content').removeClass('active').eq(tabIndex).addClass('active');
  }

  let list2Tab = $('.list-type2 a')

  list2Tab.on('click', tabActive);

  function tabActive(){
   let list2Index =$(this).parent().index();

   list2Tab.removeClass('active');
   $(this).addClass('active')

   $(this).parents('.list-type2tab').children('.tab-content').removeClass('active').eq(list2Index).addClass('active');

  }
}
tab();
 
//FAQ----------------------------------------------------------------------

// function list13 (){
//  let listQuestion = $('.list-question button')
 
//  listQuestion.on('click', openAnswer);
//  function openAnswer(){
//   $(this).next().slideToggle();
//   $(this).toggleClass('active');
//  }
// }
// list13();

function faq(){

 const btn =$('.list-type13 .btn-question')
 
 btn.on('click',otherHide);
 btn.on('click',arrowToggle);
 btn.on('click',answerToggle);
 
 function arrowToggle(){
  $(this).toggleClass('active');
 }
function answerToggle(){
$(this).next().stop().slideToggle();
}
function otherHide(){
 // btn.removeClass('active').next().slideUp();
 $(this).parent().siblings().children('button').removeClass('active');
 $(this).parent().siblings().children('p').slideUp();
}

}
faq();
>>>>>>> 66eac879000d0e436a5378bb666aaea6938dad1a
});