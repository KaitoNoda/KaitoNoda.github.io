$(function(){



var $ja = $('.Japanese');
var $en = $('.English');


$('.switch').click(function(){
    if($en.hasClass('open')){
        $en.fadeOut( 1000, function(){
            $ja.fadeIn();
          });
        $en.removeClass('open');
        $ja.addClass('open');
    }else{
        $ja.fadeOut( 1000, function(){
            $en.fadeIn();
          });
        $ja.removeClass('open');
        $en.addClass('open');
    }
});



function addClass(){
    $('.checkbtn img').attr('src','pictures/close.png');
    $('.checkbtn img').addClass('show');
}
function removeClass(){
    $('.checkbtn img').attr('src','pictures/menu.png');
    $('.checkbtn img').removeClass('show');
}


$('.checkbtn img').click(function(){
    if($('.checkbtn img').hasClass('show')){
        removeClass();
        $('.header-contents ul').hide(100);
    }else{
        addClass();
        $('.header-contents ul').show(100);
    }
});

$('.main').on('click', function(){
    if($('.checkbtn img').hasClass('show')){
        removeClass();
        $('.header-contents ul').hide(100);
    }
});


$('.header-contents li a').click(function(){
    if (window.matchMedia("(max-width: 1000px)").matches) {
        removeClass();
        $('.header-contents ul').fadeOut(1200);
        $(this).css({
            'color':'#0082e6',
            'font-size':'20px',
            'font-weight':'bold',
            });
      }else {
        removeClass();
        $('.header-contents ul').fadeOut(200);
      };
});

$('.header-contents li a').hover(
    function(){
        $(this).css({
        'color':'#0082e6',
        'font-size':'15px',
        'font-weight':'bold'
        });
    },
    function(){
        $(this).css({
        'color':'white',
        'font-size':'13px',
        'font-weight':'normal'
    });
});




$('.typed').typed({
    strings: ["Kaito Noda"],
    typeSpeed: 50,
    loop: false,
    showCursor: false,
  });

$('.typed-second').typed({
  strings: [" Learning is the best investment ","This is my favorite motto"],
  typeSpeed: 80,
  backSpeed: 40,
  backDelay:5000,
  startDelay: 1400,
  loop: true,
  loopCount: Infinity,
  showCursor: false,
});

$('.typed-ja').typed({
    strings: ["野田海斗"],
    typeSpeed: 50,
    loop: false,
    showCursor: false,
  });

$('.typed-second-ja').typed({
  strings: ["『学びは最高の投資だ』","これは私の好きなモットーです"],
  typeSpeed: 80,
  backSpeed: 40,
  backDelay:3000,
  startDelay: 1400,
  loop: true,
  loopCount: Infinity,
  showCursor: false,
});


$('.tab').click(function(){
    const group = $(this).parents('.warpper'); 
    group.find('.is-active').removeClass('is-active');
    $(this).addClass('is-active');
    group.find('.is-show').removeClass('is-show');
    var index = $(this).index();
    group.find(".panel").eq(index).addClass('is-show');
});



$('.social-media-icon img').hover(
    function(){
        $(this).parent().parent().find('.social-media-name').show();
    },function(){
        $(this).parent().parent().find('.social-media-name').hide();
});


$('.Github img').on("click",function(){
    location.href="https://github.com/KaitoNoda";
});
$('.Twitter img').on("click",function(){
    location.href="https://twitter.com/Username_Kaito";
});
$('.Linkdin img').on("click",function(){
    location.href="https://www.linkedin.com/in/kaitonoda/";
});
$('.instagram img').on("click",function(){
    location.href="https://www.instagram.com/Kaito.jpn";
});
$('.VSCO img').on("click",function(){
    location.href="https://vsco.co/kaito-jp/gallery";
});




if (window.matchMedia("(max-width: 1000px)").matches){
    $(".English .portfolios .tabs .cs").text('Comp Science');
    $(".English .portfolios .tabs .web").text('Web Dev');
    $(".Japanese .portfolios .tabs .cs").text('コンピューター科学');
}
});
