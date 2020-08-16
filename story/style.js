$(function(){
  $(".subContent li").on('click',function(){
      var mainLi = $(this).parent().prev().children();
      var i = $(this).index();
      $(mainLi).removeClass("active");
      $(mainLi[i]).addClass("active");
  });
});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
// nextボタン
$(function(){
  $(".next").click(function(){
    var list= $(this).next(".mainContent").children("li");
    console.log(list);
    var i= $(this).next(".mainContent").children("li.active").index()+1;
    $(list).removeClass("active");
    $(list[i]).addClass("active");
    if(i>3){
      $(list[0]).addClass("active");
    }
  });
});
// prevボタン
$(function(){
  $(".prev").click(function(){
    var list= $(this).next().next(".mainContent").children("li");
    console.log(list);
    var i= $(this).next().next(".mainContent").children("li.active").index()-1;
    $(list).removeClass("active");
    $(list[i]).addClass("active");
    if(i<0){
      $(list[3]).addClass("active");
    }
  });
});