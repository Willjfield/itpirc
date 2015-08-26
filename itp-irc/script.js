$('document').ready(function(){
	var isOpen = false;
	var browserHTML = "<p class='btn'>The quickest and easiest way to connect is in the browser.<br><br><b>Step 1:</b> <a href='https://kiwiirc.com/client' target='_blank'>Visit kiwiirc</a><br><br><b>Step 2:</b> Enter any nickname you'd like.<br><br><b>Step 3:</b> Enter #ITP in the channel.</p>";
	var osxHTML = "<p class='btn'>Colloquy is the recommended OSX IRC client.<br><br><b>Step 1: </b><a href='http://colloquy.info/downloads/colloquy-latest.zip'>Download Colloquy</a><br><br><b>Step 2: </b>Open Colloquy. Go to <br> File->New Connection... (&#8984; + N) <br><br><b>Step 3: </b> Match these settings:<br> (pick any username and nickname you'd like)<br><img src='images/colConnection.png'></p>";
	var windowsHTML = "<p class='btn'>Instructions pending...</p>";
	var cliHTML = "<p class='btn'>Clone the BitchX repo and compile!<br><br><b>Step 1: </b>git clone https://github.com/BitchX/BitchX1.2 BitchX<br><br><b>Step 2: </b>cd BitchX<br><br><b>Step 3: </b>./configure --with-ssl --with-plugins --enable-ipv6<br><br><b>Step 4: </b>make<br><br><b>Step 5: </b>sudo make install<br><br><a href='http://www.tc.umn.edu/~hick0088/files/BitchX.txt' target='_blank'>BITCHX USER GUIDE</a> for commands and help.</p>";
	var iosHTML ="<p class='btn'>Instructions pending...</p>";
	var androidHTML = "<p class='btn'>AndChat is the recommended Android client for IRC. <br><br><b>Step 1: </b> <a href='https://play.google.com/store/apps/details?id=net.andchat&hl=en' target='_blank'><br><br> <img src='images/gplay.svg' width=200px></a><br><br><b>Step 2: </b> Click to create a new server connection. <br><br> <img src='images/mainAnd_h.png' width=250px> <br><br><b>Step 3: </b> Enter the following settings: <br><br>Name: Freenode<br>Address: chat.freenode.net<br>Port: 6667<br>Nick: [PICK A NICKNAME]<br>Username: [PICK A USERNAME]<br>Autojoin List: #itp</p>";


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
