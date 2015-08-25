$('document').ready(function(){
	var isOpen = false;
	var browserHTML = "<p class='btn'>The quickest and easiest way to connect is in the browser.<br><br><b>Step 1:</b> <a href='https://kiwiirc.com/client' target='_blank'>Visit kiwiirc</a><br><br><b>Step 2:</b> Enter any nickname you'd like.<br><br><b>Step 3:</b> Enter #ITP in the channel.</p>";
	var osxHTML = "<p class='btn'>This is a full paragraph about how you install an irc client for mac osx. Step 1: Step2: Step 3: Step4:Anuthah what a cahd paypuh bowee gummah If you can't stand the wintah you don't deserve the summah numb dingy gettin' ugly over t'.</p>";
	var windowsHTML = "<p class='btn'>This is a full paragraph about how you install an irc client for windows.Step 1: Step2: Step 3: Step4:Over t' muckle riyht on'ta her You is sum wicked suhmart kid.</p>";
	var cliHTML = "<p class='btn'>Clone the BitchX repo and compile!<br><br><b>Step 1: </b>git clone https://github.com/BitchX/BitchX1.2 BitchX<br><br><b>Step 2: </b>cd BitchX<br><br><b>Step 3: </b>./configure --with-ssl --with-plugins --enable-ipv6<br><br><b>Step 4: </b>make<br><br><b>Step 5: </b>sudo make install<br><br><a href='http://www.tc.umn.edu/~hick0088/files/BitchX.txt' target='_blank'>BITCHX USER GUIDE</a> for commands and help.</p>";
	var iosHTML ="<p class='btn'>This is a full paragraph about how you install an irc client for ios.Step 1: Step2: Step 3: Step4:Over t' muckle riyht on'ta her You is sum wicked suhmart kid.</p>";
	var androidHTML = "<p class='btn'>This is a full paragraph about how you install an irc client for android.Step 1: Step2: Step 3: Step4:Over t' muckle riyht on'ta her You is sum wicked suhmart kid.</p>";


	$(window).scroll(function(){
	//console.log($(window).scrollTop());
	if($(window).scrollTop()>0){
		if($(window).scrollTop()<50){
			var barHeight = 100-$(window).scrollTop();
			var h1Pad = barHeight/10;
			var hSize = 60-($(window).scrollTop()*.6);
			$("#topBar").css("height", barHeight+"px");
			$("h1").css({"padding-top":h1Pad+"px","font-size":hSize+"px"});
		}else{
			$("#topBar").css("height","50px");
			$("h1").css({"padding-top":"5px","font-size":"30px"});
		}
		
	}else{
		$("h1").stop().animate({"padding-top":"10px","font-size":"60px"},500);
		$("#topBar").stop().animate({height:"100px"},500);
	}

	})

	$(".anOption").click(function(){
		
			var id = $(this).attr('id');
			console.log(id);
		if(!isOpen){
			isOpen=true;
			switch(id){
				case "1":
					$("#"+id).html(browserHTML);
				break;
				case "2":
					$("#"+id).html(osxHTML);
				break;
				case "3":
					$("#"+id).html(windowsHTML);
				break;
				case "4":
					$("#"+id).html(cliHTML);
				break;
				case "5":
					$("#"+id).html(iosHTML);
				break;
				case "6":
					$("#"+id).html(androidHTML);
				break;
			}
		}else{
			isOpen=false;

					$("#1").html("<p class='btn'>In Browser</p>");

					$("#2").html("<p class='btn'>Mac OSX</p>");

					$("#3").html("<p class='btn'>Windows</p>");

					$("#4").html("<p class='btn'>CLI</p>");

					$("#5").html("<p class='btn'>iOS</p>");

					$("#6").html("<p class='btn'>Android</p>");

		}
	});
})
