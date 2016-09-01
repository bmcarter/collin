$(document).ready(function(){
	var score = 0;
	var isMouthOpen = true;
	$("#collin").click(function(){
		if(isMouthOpen)
		{
			$("#ass").css({'width' : '426px' , 'height' : '332px'});
			isMouthOpen = false;
			$("#ass").animate({
				height: '0px',
				width: '0px',
				top: '360px',
			}, 1000);
			setTimeout(function(){
				$("#collin").attr("src", "close.png");

				score += 1;
				$("#score").html(score);
				setTimeout(function(){
					$("#collin").attr("src", "open.png");
					isMouthOpen = true;
				}, 300);
			}, 800);
		}
		

	});
});

