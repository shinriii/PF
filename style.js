// バナナ動く
main.addEventListener("mousemove",move1);
function move1(ev){
  var banana = document.getElementById("banana");
  var y = Math.round(event.pageY / 10);
  banana.style.height = y + "%";
}

// キャラの影
$(function(){
  $(".chara").hover(function(){
    $(".akihoShadow").toggleClass("active");
    $(".shizukuShadow").toggleClass("active");
    $(".kanataShadow").toggleClass("active");
    $(".rinaShadow").toggleClass("active");
    $(".igarashiShadow").toggleClass("active");
    $(".shizumoriShadow").toggleClass("active");
    $(".aikawaShadow").toggleClass("active");
  })
})

// スクロールしたらロゴ固定
$(function(){
  var pos = 0;
  $(window).on("scroll",function(){
    if($(this).scrollTop() < 200){
      $(".logo.fix").removeClass("active");
      $(".catch.fix").removeClass("active");
    }else{
      $(".logo.fix").addClass("active");
      $(".catch.fix").addClass("active");
    }
  })
})
// バナナニュース
$(function(){
  $(".infoArea__newsArea__news__post").hover(function(){
    $(this).toggleClass("active");
  })
})