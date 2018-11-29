$(function(){

	kakao.header();

});


var kakao = {
	header : function(){
		$(window).on("scroll", function(){
			var nScrl = $(this).scrollTop();
			var $header = $("#header_container");
			if( nScrl > 500 ){
				$header.addClass("scrollOn");
			} else {
				$header.removeClass("scrollOn");
			}
		});
	}
}