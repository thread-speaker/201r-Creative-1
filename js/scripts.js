$('#filter-form').change(filterChange).keyup(filterChange);

function filterChange(e) {
	var queryName = $('#map_name').val().toLowerCase();
	//get all checkboxes that are checked, return the "map-type" data attribute's value for each element. Will be an array of strings.
	var queryTypes = $('input[type=checkbox]:checked').map(function() { return $(this).data("map-type"); }).get(); 
	if(queryName != "" || queryTypes.length > 0) {
		$('.card.filterable').hide();
		$('.card.filterable').filter(function(){ console.log(queryTypes, $(this).data("map-type"));
					 	   var isSameMapType = queryTypes.length > 0 && queryTypes.indexOf($(this).data("map-type")) >= 0 ;
							return isSameMapType 
					}).filter(function() {
						var hasSubstringInName = queryName == "" || $(this).data("map-name").toLowerCase().indexOf(queryName) >= 0;
						return hasSubstringInName;
					}).show();
	} else {
		$('.card.filterable').show();
	}
}



$('.card.filterable .under-card-image').each(function() {
	var url = $(this).find("img").data("map-overlay");
	$(this).css({
		'background-image':"url('" + url + "')",
		'background-size':'cover'
	})
})
