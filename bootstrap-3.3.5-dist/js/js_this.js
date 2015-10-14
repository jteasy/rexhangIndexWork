/**
 *
 * @authors rexhang (rex@hang.me)
 * @date    2015-07-21 14:46:21
 * @version 1.0
 */
    $('.carousel').carousel({
        // 2s 切换一次
        interval: 2000
    });
$(".hos1").mouseover(function() {
    $(".rex1").css("marginTop", "-222px").css("height", "297px");
}).mouseleave(function() {
    $(".rex1").css("marginTop", 0).css("height", "75px").css("lineHeight", "");
});
$(".hos2").mouseover(function() {
    $(".rex2").css("marginTop", "-222px").css("height", "297px");
}).mouseleave(function() {
    $(".rex2").css("marginTop", 0).css("height", "75px").css("lineHeight", "");
});
$(".hos3").mouseover(function() {
    $(".rex3").css("marginTop", "-222px").css("height", "297px");
}).mouseleave(function() {
    $(".rex3").css("marginTop", 0).css("height", "75px").css("lineHeight", "");
});
$(".hos4").mouseover(function() {
    $(".rex4").css("marginTop", "-222px").css("height", "297px");
}).mouseleave(function() {
    $(".rex4").css("marginTop", 0).css("height", "75px").css("lineHeight", "");
});
$(".hos5").mouseover(function() {
    $(".rex5").css("marginTop", "-222px").css("height", "297px");
}).mouseleave(function() {
    $(".rex5").css("marginTop", 0).css("height", "75px").css("lineHeight", "");
});
$(".hos6").mouseover(function() {
    $(".rex6").css("marginTop", "-222px").css("height", "297px");
}).mouseleave(function() {
    $(".rex6").css("marginTop", 0).css("height", "75px").css("lineHeight", "");
});
//animate.css 特效
$(".rex").addClass("animated flip");
$(".needright").find("img").hover(function() {
    $(this).toggleClass("animated flip");
});
$(".animates").hover(function() {
    $(this).toggleClass("animated shake");
});
$(".logos").hover(function() {
    $(this).toggleClass("animated tada");
});
