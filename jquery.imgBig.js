;(function($){
	$.fn.imgBig=function(boxO,imgO){
		//console.log("this:",this);
		var box={
			width: "300px",
			height: "300px",
			border: "1px solid red",
			borderRadius: "100%"
		}
		var img={
			speed:2,
			scale:1.5
		}
		var boxSet=$.extend(true,{},box, boxO);
		var imgSet=$.extend(true,{},img, imgO);
		
		this.css(boxSet).children("img").css({
				"transition":imgSet.speed+"s"
		})
		this.hover(function(){
			$(this).children("img").css({
				transform:"scale("+imgSet.scale+")",
				cursor:"pointer"
			});
		},function(){
			$(this).children("img").css("transform","scale(1)");
		})
		return this;
	}
}(jQuery));
