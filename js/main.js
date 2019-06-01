$(function(){
	var _window = $(window),
		_top_img = $('.nuito'),
		_header = $('.site-header'),
		_bg = $('.cd-bg-1'),
		heroBottom,
		startPos,
		winScrollTop,
		op;
	$('html,body').animate({ scrollTop: 0 }, '1');	
	_window.on('scroll',function(){
		winScrollTop = $(this).scrollTop();
		heroBottom = $('.cd-bg-1').height()/2;
		//if (winScrollTop > startPos) {
			if(winScrollTop >= heroBottom){
				_top_img.addClass('hide');
				_top_img.addClass('move');

				_header.removeClass('hide');
				//_bg.addClass('hide');
		//	}	
		} else {
		//	_top_img.removeClass('hide');
		//	_top_img.removeClass('move');
			_header.addClass('hide');
			//_bg.removeClass('hide');
		}
		startPos = winScrollTop;
		
		if(winScrollTop > (heroBottom-300)){
		      op = (heroBottom - winScrollTop)/300.0;
			  _bg.css({opacity: op});
		}
	});

		_window.trigger('scroll');	
});	
/*
$(function(){
var beforeBg = '';
	$(window).on('load scroll touchmove', function() {
          $scrollTop = $(window).scrollTop();
          $changePoint = $('.cd-bg-none').offset().top;
          if($scrollTop < $changePoint){
            if(beforeBg !== 'bgA'){
              $('.cd-bg-1').removeClass('bgB');
              $('.cd-bg-1').addClass('bgA');
              beforeBg = 'bgA';
            }
          } else {
            if(beforeBg !== 'bgB'){
              $('.cd-bg-1').removeClass('bgA');
              $('.cd-bg-1').addClass('bgB');
              beforeBg = 'bgB';
            }
          }
      });
	
});*/
