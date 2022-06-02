$(function(){


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
              $AutoPlay: true,
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


