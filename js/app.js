// $('ul.myclass li span').click( function() {
//     var $cb = $(this).parent().find(":checkbox");
//     if (!$cb.prop("checked")) {
//         $cb.prop("checked", true);
//     } else {
//         $cb.prop("checked", false);
//     }
// });
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



// <textarea title="Write a comment..." itemID="@item.ID" 
// class="comment" placeholder="Write a comment..." 
// autocomplete="off" role="textbox" id="comment"></textarea>
// e.preventDefault()

//make add item on preshing return
//text box for user to enter a list item
//reset the text box AFTER each list item is added
//make that new item check off-able
//EITHER cross off completed ('checked') items
//OR move to new list
