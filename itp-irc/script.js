$('document').ready(function(){
	var isOpen = false;
	var browserHTML = "<p>This is a full paragraph about how you get irc up and running in a browserDingy cah up t' Saddee noseeum aht what a cahd cah queeah what a cahd, Yessah door-yahd You is sum wicked suhmart blizzahd ankle biteah Moody's wreckah, railed 'em Up in thah county wreckah rig up tube steak potatoes Katahdin scrod bang a left, tunk from away tunk railed 'em kid, bookin' it gawmy yut from away Jeesum Crow aht puff, crunchah Bean's tunk nummah than a faht puff door-yahd yut huck kife, back woods Hammah Gohd Dammah, feeder' the beans rig up.</p>";
	var osxHTML = "<p>This is a full paragraph about how you install an irc client for mac osx. Step 1: Step2: Step 3: Step4:Anuthah what a cahd paypuh bowee gummah If you can't stand the wintah you don't deserve the summah numb dingy gettin' ugly over t'. Ayuhpawt Bangah some cunnin The County, potatoes wicked pissah yahd Mount Dessuht leaf peepahs some wicked crunchah wee bit nippy from away.</p>";
	var windowsHTML = "<p>This is a full paragraph about how you install an irc client for windows. Step 1: Step2: Step 3: Step4:Over t' muckle riyht on'ta her You is sum wicked suhmart kid. Can't get theyah from heeyah Allen's Coffee Brandy native Katahdin gawmy suppah, lobstah paut hawsun around no-see-um batrees up t' camp junkah potatoes, crittah railed 'em Mount Dessuht, ankle biteah Jo-Jeezly crunchah yow uns chimbly lobstah hahd tellin' not knowin' native leaf peepahs junkah.</p>";
	var cliHTML = "<p>This is a full paragraph about how you install an irc client for cli. Step 1: Step2: Step 3: Step4:Ayuhpawt Mount Dessuht well theyah. Junkah fish chowdah I'm tellin' you wee bit nippy owt ayuh suppah well theyah cubboard, sumpin' fierce some wicked rhubaahb N'Hampshah Powrtland Museum of Aht podunk Auguster ankle biteah. </p>";
	var iosHTML = "<p>This is a full paragraph about how you install an irc client for ios. Step 1: Step2: Step 3: Step4:Slower than molasses going uphill in January bean suppah way up north Bah Hahbah, up t' camp Shit the bed. Feed 'uh the hot suppah. geez bud cunnin', yahd I'm tellin' you rhubaahb noseeum.</p>";
	var androidHTML = "<p>This is a full paragraph about how you install an irc client for android. Step 1: Step2: Step 3: Step4:Idear Moosetown huntin' deeah out in th' willie-wacks pig fat huntin' deeah Loyston-Ahban justa smidgin up t' dooryahd, from away ayuh Saddee can't get theyah from heeyah fish chowdah mugup Moosetown crunchah Sundee alkie, naw clam chowdah out in th' willie-wacks Powrtland Museum of Aht some cunnin native lobstah hoppa, down east mummah bogan,</p>";

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

					$("#1").html("<p>In Browser</p>");

					$("#2").html("<p>Mac OSX</p>");

					$("#3").html("<p>Windows</p>");

					$("#4").html("<p>CLI</p>");

					$("#5").html("<p>iOS</p>");

					$("#6").html("<p>Android</p>");

		}
	});
})
