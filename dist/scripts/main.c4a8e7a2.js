$(document).ready(function(){$(".one").length>0&&($(".one h1, .one p").css("opacity",1),setTimeout(function(){$(".one ul").css("opacity",1)},1700));var a=$(".main li").width();if($(".main li").each(function(){$(this).height(a)}),$(window).resize(function(){var b=$(".main li").width();b!=a&&(a=b,$(".main li").each(function(){$(this).height(a)}))}),$(".two").length>0){var b=document.getElementById("logo");b.addEventListener("animationend",function(){$("#logo").addClass("flicker"),b.removeEventListener("animationend")},!1)}});