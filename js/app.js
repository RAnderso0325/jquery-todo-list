var uniqueId = 0;

$(document).ready(function(){
	 $('.form1').submit(function(e){
      e.preventDefault();
      $('#create-item').click();
    });
});

$('#create-item').click(function(){
	uniqueId++;
	$('.list').append($('<li>', {
		id : uniqueId,
		text: $('#GET-NEW-ITEM').val()
	}));
	$('#GET-NEW-ITEM').val("");
});

$('.list').on('click', 'li', function(e){
	$('.comp-list').append(this).append($('<input type="button" value="Remove">').addClass("buttonRemove"));
	var el = $(this);
	$('.buttonRemove').click(function(){
		el.remove();
		this.remove();
	});
});