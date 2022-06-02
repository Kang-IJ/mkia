$(function(){
	
	var nav=$('.header_menu');
	var navoffset=$('.header_menu').offset();
	$(window).scroll(function(){
		if ($(this).scrollTop()>=navoffset.top) { 
			nav.css('position','fixed').css('top',0);
			$(".logo").css("margin-top","10px");
			}else{
				nav.css('position','absolute').css('top',92);
				$(".logo").css("margin-top","0");		
				}
		});

//메뉴
	$(".ic_menu").on("click", function() { 
		$(".left_menu").animate({marginLeft:"280px"},500);
		$(".black_back").css("display","block");
	});	
		
	
	$(".close, .black_back").on("click", function() {
		$(".left_menu").animate({marginLeft:"-280px"},500);
		$(".black_back").css("display","none");
	
	});	
	
//menu gnb
$(".gnb>li").on("click",function(){
    $(this).find(".sub").stop().slideToggle();
});

//오른쪽 메뉴
	$(".mymenu").on("click", function() { 
		$(".right_menu").animate({marginRight:"280px"},500);
		$(".black_back2").css("display","block");
	});	
		
	
	$(".close2, .black_back2").on("click", function() {
		$(".right_menu").animate({marginRight:"-280px"},500);
		$(".black_back2").css("display","none");
	
	});	
	
$(document).ready(function(){
		$('.top').click(function(e){
			$.scrollTo(this.hash || 0, 300);
			e.preventDefault();
	   });
	});




/*
	$(".join").on("click", function() {
		$(".right_menu").animate({marginRight:"280px"},500);
		$(".black_back").css("display","block");
	});	
		
	
	$(".close2, .black_back").on("click", function() {
		$(".right_menu").animate({marginRight:"-280px"},500);
		$(".black_back").css("display","none");
	
	});	
*/
	
	
}); //function end

//top
	$(window).scroll(function(){  // 화면 스크롤시 아래코드실행....
      var num = $(this).scrollTop();  // 스크롤값을 가져온다.
      if( num > 100 ){  // 스크롤을 200 이상했을시 보이고 이하는 감추기
          $(".top").fadeIn();
      }else{
          $(".top").fadeOut();
      }
 });






