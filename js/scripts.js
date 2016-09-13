$('#filter-form').change(filterChange).keyup(filterChange);

function filterChange(e) {
	var queryName = $('#map_name').val().toLowerCase();
	//get all checkboxes that are checked, return the "map-type" data attribute's value for each element. Will be an array of strings.
	var queryTypes = $('input[type=checkbox]:checked').map(function() { return $(this).data("map-type"); }).get(); 
	if(queryName != "" || queryTypes.length > 0) {
		$('.card.filterable').hide();
		$('.card.filterable').filter(function()
					 {   return queryTypes.indexOf($(this).data("map-type")) >= 0 
								|| $(this).data("map-name").toLowerCase().indexOf(queryName) >= 0
					}).show();
	} else {
		$('.card.filterable').show();
	}
}



$('.card.filterable img').hover(hoverOver, hoverOut);


function hoverOver(e) {
	$(this).attr('src', function() {
		return $(this).data('map-overlay');
	});
}

function hoverOut(e) {
	$(this).attr('src', function() {
		return $(this).data('map-original-image');
	});
}


$('.card.filterable img').each( function() {
	console.log("Original image:", $(this).attr('src'));
	$(this).data('map-original-image', $(this).attr('src'));
	console.log("After image:", $(this).data('map-overlay'));
});