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
	$('.qqbox .qqfirstp').mouseenter(function(){
		$('.qqbox .qqfirstp').css('background','red');
		})
	$('.qqbox .qqfirstp').mouseleave(function(){
		$('.qqbox .qqfirstp').css('background','#ccc');
		})
	$('.qqbox .qqsecondp').mouseenter(function(){
		$('.qqbox .qqsecondp').css('background','red');
		})
	$('.qqbox .qqsecondp').mouseleave(function(){
		$('.qqbox .qqsecondp').css('background','#ccc');
		})
	})
