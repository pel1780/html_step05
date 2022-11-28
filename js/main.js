// document.querySelector('h1').style.display = 'none';
$(function () {
    $('button').on('click', function () {
        $('h1').toggleClass('on')
    });
    $('.mainSlide').slick();
})

//     $('.tabMenu .tit>li').on('click', function () {
//         var num = $(this).index();
//         console.log(num);
//         $('.tabMenu .tit>li').removeClass('on');
//         $(this).addClass('on');

//         $('.tabMenu .con>li').removeClass('on');
//         $('.tabMenu .con>li').eq(num).addClass('on');
//     })
// })
// 탭메뉴

// $(function () {
//     $('button{선택자}').on('click{이벤트}', function (){할일} {
//         $('h1{선택자}').toggleClass{클래스를 붙였다 땠다 하는것}('on')
//     });
// })
// jquery 명령어


// window.addEventListener('DOMContentLoaded', function(){
//     this.document.querySelector('button').addEventListener('click',function(){
//         document.querySelector('h1').classList.toggle('on')
//     })
// })
// js 명령어
