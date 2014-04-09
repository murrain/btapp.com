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