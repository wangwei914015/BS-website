// JavaScript Document
$(document).ready(function(){
	$('footer .secondspan').mouseenter(function(){
		$('footer .footerthirh-p').css('display','block');
		$('footer .footersecond-p').css('display','none');
		})
	$('footer .firstspan').mouseenter(function(){
		$('footer .footerthirh-p').css('display','none');
		$('footer .footersecond-p').css('display','block');
		})
})