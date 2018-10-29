$(function(){
	
$('#tab-blue-2').hide();
$('#q-2-p').hide();
var query=[];
	$('#add-question').on('click', function() {
		
		var q={};
		q["nume"]=($('#text-area').val());
		q["choises"]=["DA","NU"];
		query.push(q);
		$('#text-area').val('');
		
	});
	
	$('#salve-query').on('click', function() {
		var queryJSON = JSON.stringify(query);
		
		
	});
	
	
});
