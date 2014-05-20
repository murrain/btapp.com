(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-44268213-1', 'bottlestonightapp.com');
ga('send', 'pageview');

$(".phone_change").on("mouseover",function() {
	$("#screenshot").attr("src","img/"+$(this).attr("id")+".jpg");
	$(".phone_change").each(function(){
		$(this).removeClass("active");
	});
	$(this).addClass("active");
});

$(".phone_change").on("click",function() {
	$("#screenshot").attr("src","img/"+$(this).attr("id")+".jpg");
	$(".phone_change").each(function(){
		$(this).removeClass("active");
		$(this).addClass("inactive");
	});
	$(this).addClass("active");
});

$("body").on('click','#download_cover.closed #cover_button', function(event) {
	event.preventDefault();
	open_download_cover();
});

$("body").on('click','#download_cover.open #cover_button', function(event) {
	event.preventDefault();
	close_download_cover();
});

function open_download_cover() {
	$("#download_cover").removeClass('closed');
	$("#download_cover").addClass('open');
  	$("#download_cover").animate({ "top": "-=56px" }, "slow" );
}
function close_download_cover(){
	$("#download_cover").removeClass('open');
	$("#download_cover").addClass('closed');
	$("#download_cover").animate({ "top": "+=56px" }, "slow" );
}


$("#text_link").on('submit', function(event){
	event.preventDefault();

	$.ajaxSetup({
	    url: "download/text",
	    global: false,
	    type: "POST"
	});

	var post = $.ajax({
	    data: $(this).serialize(),
	    statusCode: {
			200: function(data) 
			{
				close_download_cover();
				$("#cover_button").html("Text sent");
			}
		}
	});
});

$("#merchant_interest").on('submit', function(event){
	event.preventDefault();
	$("#merchant_interest").hide('fast');
	$("#merchant_loading").show('fast');

	$.ajaxSetup({
	    url: "api/v1/merchants/merchant_request",
	    global: false,
	    type: "POST"
	});

	var post = $.ajax({
	    data: $(this).serialize(),
	    statusCode: {
			200: function(data) 
			{
				$("#merchant_loading").hide('fast');
				$("#merchant_submitted").show('fast');
			}
		}
	});
});

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function download_for_mobile() {
	$("#download_cover.closed").removeClass("closed");
}