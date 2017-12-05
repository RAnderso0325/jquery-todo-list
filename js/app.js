$(document).ready(function(){
	 $('.form1').submit(function(e){
      e.preventDefault();
      $('#create-item').click();
    });
});

$('#create-item').click(function(){
	$('.list').append($('<li>', {
		text: $('#GET-NEW-ITEM').val()
	}));
	$('#GET-NEW-ITEM').val("");
});

$('.list').on('click', 'li', function(e){
	$(this).css("text-decoration", "line-through");
	$('.comp-list').append(this).append($('<button>').text("Remove"));
});