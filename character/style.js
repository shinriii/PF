$(function(){
  $(".characterList li").hover(function(){
    $(this).toggleClass("active");
  })
})

$(function(){
  $(".akiho").click(function(){
    $(".overlay").addClass("open");
    $(".detail").addClass("open");
    $(".picArea").addClass("open");
  })
  $(".overlay").click(function(){
    $(".overlay.open").removeClass("open");
    $(".detail.open").removeClass("open");
    $(".picArea").removeClass("open");
  })
})
