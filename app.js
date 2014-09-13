(function () {

	var setSectionHeight;

	setSectionHeight = function () {
		var windowHeight, paragraphHeight, headerHeight, newbiggyHeight;

		windowHeight = $(window).height();
		paragraphHeight = $(".biggy > p").height();
		headerHeight = $("header").height();
		newbiggyHeight = windowHeight - paragraphHeight;

		// example 1 - super easy solution to set section height
		$(".biggy").height(windowHeight - headerHeight);
		$(".biggy > p").css("padding-top", newbiggyHeight/2 - paragraphHeight/2);
		console.log("cat");
	};

	$(window).on("load resize", setSectionHeight); 

	$(window).scroll(function() {
	    var height = $(window).scrollTop();

	    if(height  > 200) {
	        $("nav").removeClass("offset"); 
	        $("nav").addClass("notoffset");
	    } else {
	    	$("nav").addClass("offset");
	    	$("nav").removeClass("notoffset");
	    }
	});

})();