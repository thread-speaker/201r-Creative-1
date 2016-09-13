$('#filter-form').change(filterChange).keyup(filterChange);

function filterChange(e) {
	var queryName = $('#map_name').val().toLowerCase();
	//get all checkboxes that are checked, return the "map-type" data attribute's value for each element. Will be an array of strings.
	var queryTypes = $('input[type=checkbox]:checked').map(function() { return $(this).data("map-type"); }).get(); 
	if(queryName != "" || queryTypes.length > 0) {
		$('.card.filterable').hide();
		var obj = $('.card.filterable').filter(function(){ console.log(queryTypes, $(this).data("map-type"));
					 	   var isSameMapType = queryTypes.length == 0 || queryTypes.indexOf($(this).data("map-type")) >= 0 ;
							return isSameMapType 
					}).filter(function() {
						var hasSubstringInName = queryName == "" || $(this).data("map-name").toLowerCase().indexOf(queryName) >= 0;
						return hasSubstringInName;
					});
		obj.show();
		unfocusOnFirst();

		var first = obj.first();
		if(first != null){
			console.log(first,"first");
			focusOnFirst(first);
		}
	} else {
		unfocusOnFirst();
		$('.card.filterable').show();
	}
	refreshMasonry();
}

function unfocusOnFirst(e){
	$(".m12 .card.filterable").parent().removeClass("m12").addClass("m6");
}

function focusOnFirst(e){
	console.log()
	e.parent().removeClass("m6").addClass("m12");
}

function refreshMasonry() {
	$('#parentMason').masonry({
	  itemSelector: '.col',percentPosition: true, columnWidth: '.m6'
	});
}


$('.card.filterable .under-card-image').each(function() {
	var url = $(this).find("img").data("map-overlay");
	$(this).css({
		'background-image':"url('" + url + "')",
		'background-size':'cover'
	})
})





$( document ).ready(function() {
	refreshMasonry();
	setTimeout(refreshMasonry, 2000);
});

$(window).on("load",function() {
	refreshMasonry();
}); 