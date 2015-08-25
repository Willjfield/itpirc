$('document').ready(function(){
	$(window).scroll(function(){
	console.log($(window).scrollTop());
	if($(window).scrollTop()>0){
		$("#topBar").stop().animate({height:"50px"},100);
		$("h1").stop().animate({"padding-top":"5px","font-size":"30px"},100);
	}else{
		$("h1").stop().animate({"padding-top":"10px","font-size":"60px"},500);
		$("#topBar").stop().animate({height:"100px"},500);
	}

	})
})
