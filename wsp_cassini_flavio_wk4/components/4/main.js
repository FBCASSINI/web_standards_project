// JavaScript Document
$(function() {
    $('.slideshow').before('<div id="nav">').cycle({
        fx: 'fade',
        speed: 'fast',
        timeout: 0,
        pager: '#nav'
	});
});
	