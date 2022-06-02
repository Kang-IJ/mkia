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
		
	//left slide menu
	/*$(".ic_menu").on("click", function() {
		$(".left_menu").fadeToggle("fast");
		$(".black_back").fadeToggle("fast");
	});	
	$(".close, .black_back").on("click",function(){
		$(".left_menu").fadeOut("fast");
		$(".black_back").fadeOut("fast");
		});*/
		
		//right_menu
	$(".ic_menu").on("click",function(){
		$(".left_menu").stop().fadeIn(300);
		$(this).find(".left_menu_in").stop().fadeIn(300);
		//$(".menu_icon img").attr("src","")
		$(".black_back").css("display","block");
		});
	$(".close, .black_back").on("click",function(){
		$(".left_menu").stop().fadeOut(300);
		$(this).find(".left_menu_in").stop().fadeOut(300);
		$(".black_back").css("display","none");
		//$(".ic_menu img").attr("src","common/images/menu_icon_back.png")
	});
            
        
        /* 차량 슬라이더 */
  var mySlider=$("#cars ul").bxSlider({
      mode:"horizontal",
        speed:500,
        pager:false,
        moveSlides:1,
        slideWidth:500,
        minSlides:1,
        maxSlides:1,
        slideMargin:30,
        auto:false,
        autoHover:true,
        controls:false
  });

  $(".prev_btn").on("click",function(){
  mySlider.goToPrevSlide();
  return false;
  });

  $(".next_btn").on("click",function(){
  mySlider.goToNextSlide();
  return false;
  });

            
//메뉴
	$(".ic_menu").on("click", function() {
		$(".left_menu").fadeIn(500);
		$(".black_back").css("display","block");
	});	
		
	
	$(".close, .black_back").on("click", function() {
		$(".left_menu").fadeOut(500);
		$(".black_back").css("display","none");
	
	});	

	$(".join").on("click", function() {
		$(".right_menu").fadeIn(500);
		$(".black_back").css("display","block");
	});	
		
	
	$(".close2, .black_back").on("click", function() {
		$(".right_menu").fadeOut(500);
		$(".black_back").css("display","none");
	
	});	

 /* 기아 뉴스 */
  var mySlider2=$("#cont4-1 ul").bxSlider({
      mode:"horizontal",
        speed:500,
        pager:false,
        moveSlides:1,
        slideWidth:500,
        minSlides:1,
        maxSlides:1,
        slideMargin:30,
        auto:false,
        autoHover:true,
        controls:false
  });

  $(".prev_btn").on("click",function(){
  mySlider2.goToPrevSlide();
  return false;
  });

  $(".next_btn").on("click",function(){
  mySlider2.goToNextSlide();
  return false;
  });


//visual
     var jssor_1_options = {
              $AutoPlay: false,
              $SlideDuration: 1000,
              $SlideEasing: $Jease$.$OutQuint,
              $ArrowNavigatorOptions: {
                $Class: $JssorArrowNavigator$
              },
              $BulletNavigatorOptions: {
                $Class: $JssorBulletNavigator$
              }
            };

            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            /*responsive code begin*/
            /*you can remove responsive code if you don't want the slider scales while window resizing*/
            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 1920);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 80);
                }
            }
            ScaleSlider();
            $(window).bind("load", ScaleSlider);
            $(window).bind("resize", ScaleSlider);
            $(window).bind("orientationchange", ScaleSlider);
            /*responsive code end*/   



         
	}); //function end


