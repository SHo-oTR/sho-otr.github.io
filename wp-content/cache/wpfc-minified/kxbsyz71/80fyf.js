$=jQuery;
jQuery(document).ready(function($){
"use strict";
var entryHeader=$('.entry-header');
if(entryHeader.attr('data-parallax')=='1'){
entryHeader.parallax({ imageSrc: entryHeader.attr('data-image') });
}
$('#top-menu, #main-menu').find('li').on('mouseenter', function(){
$(this).children('.sub-menu').stop().fadeIn(200);
}).on('mouseleave', function(){
$(this).children('.sub-menu').stop().fadeOut(200);
});
$('.mobile-menu-btn').on('click', function(){
$('.mobile-menu-container').slideToggle();
});
$('#mobile-menu .menu-item-has-children').prepend('<div class="sub-menu-btn"></div>');
$('#mobile-menu .sub-menu').before('<span class="sub-menu-btn-icon icon-angle-down"></span>');
$('.sub-menu-btn').on('click', function(){
$(this).closest('li').children('.sub-menu').slideToggle();
$(this).closest('li').children('.sub-menu-btn-icon').toggleClass('fa-rotate-270');
});
$(window).on('resize', function(){
if($('.main-menu-container').css('display')==='block'){
$('.mobile-menu-container').css({ 'display':'none' });
}});
$('.main-nav-icons').after($('.main-nav-search #searchform').remove());
var mainNavSearch=$('#main-nav #searchform');
mainNavSearch.find('#s').attr('placeholder', mainNavSearch.find('#s').data('placeholder'));
$('.main-nav-search').on('click', function(){
if(mainNavSearch.css('display')==='none'){
mainNavSearch.fadeIn();
$('.main-nav-search i:last-of-type').show();
$('.main-nav-search i:first-of-type').hide();
}else{
mainNavSearch.fadeOut();
$('.main-nav-search i:last-of-type').hide();
$('.main-nav-search i:first-of-type').show();
}});
var RTL=false;
if($('html').attr('dir')=='rtl'){
RTL=true;
}
$('#featured-slider').slick({
prevArrow: '<span class="prev-arrow icon-angle-left"></span>',
nextArrow: '<span class="next-arrow icon-angle-right"></span>',
dotsClass: 'slider-dots',
adaptiveHeight: true,
rtl: RTL,
speed: 750,
customPaging: function(slider, i){
return '';
}});
$('.sidebar-alt').perfectScrollbar({
suppressScrollX:true,
includePadding:true,
wheelSpeed: 3.5
});
$('.main-nav-sidebar').on('click', function (){
$('.sidebar-alt').css('left','0');
$('.sidebar-alt-close').fadeIn(500);
});
function bardAltSidebarClose(){
var leftPosition=parseInt($(".sidebar-alt").outerWidth(), 10) + 30;
$('.sidebar-alt').css('left','-'+ leftPosition +'px');
$('.sidebar-alt-close').fadeOut(500);
}
$('.sidebar-alt-close, .sidebar-alt-close-btn').on('click', function (){
bardAltSidebarClose();
});
var instagram=$('.footer-instagram-widget .null-instagram-feed li a'),
instagramColumn=$('.footer-instagram-widget .null-instagram-feed li').length;
instagram.css({
'width':'' + 100 / instagramColumn +'%',
'opacity':'1'
});
$('.scrolltop').on('click', function(){
$('html, body').animate({ scrollTop:0 }, 800);
return false;
});
$(window).on('resize', function(){
if($('.mobile-menu-btn').css('display')==='none'){
$('.mobile-menu-container').css({ 'display':'none' });
}
bardstickySidebar();
bardAltSidebarClose();
});
$('.slider-item, .post-media').fitVids();
});
$(window).on('load', function(){
bardstickySidebar();
bardPreloader();
});
function bardPreloader(){
if($('.bard-preloader-wrap').length){
setTimeout(function(){
$('.bard-preloader-wrap > div').fadeOut(600);
$('.bard-preloader-wrap').fadeOut(1500);
}, 300);
if($('body').hasClass('elementor-editor-active')){
setTimeout(function(){
$('.bard-preloader-wrap > div').fadeOut(600);
$('.bard-preloader-wrap').fadeOut(1500);
}, 300);
}}
}
function bardstickySidebar(){
if($('.main-content').data('sidebar-sticky')===1){
var SidebarOffset=0;
if($("#main-nav").attr('data-fixed')==='1'){
SidebarOffset=40;
}
$('.sidebar-left,.sidebar-right').stick_in_parent({
parent: ".main-content",
offset_top: SidebarOffset,
spacer: '.sidebar-left-wrap,.sidebar-right-wrap'
});
if($('.mobile-menu-btn').css('display')!=='none'){
$('.sidebar-left,.sidebar-right').trigger("sticky_kit:detach");
}}
};