// data table
$(document).ready(function() {
    if($('#postList').length > 0){
    	$('#postList').DataTable();
    }
});

// collapse show/hide
$('.has-submenu .nav-item-main-link').click(function(e){
	e.preventDefault();
	var thisSubmenu = $(this).closest('.nav-item-main').find('.nav-item-submenu');

	$('.nav-item-main-link').not(this).removeClass('active');
	$(this).toggleClass('active');

	$('.nav-item-submenu').not(thisSubmenu).collapse('hide');
	thisSubmenu.collapse('toggle');
});

$('.has-submenu .nav-item-main-link').each(function(e){
	if($(this).hasClass('active')){
		var thisSubmenu = $(this).closest('.nav-item-main').find('.nav-item-submenu');

		thisSubmenu.collapse('show');
	}else{
		var thisSubmenu = $(this).closest('.nav-item-main').find('.nav-item-submenu');

		thisSubmenu.collapse('hide');
	}
})