// .s_07 .accordion_one
$(function(){
    //.accordionの中の.accordion_headerがクリックされたら
    $('.accordion .accordion_header').click(function(){
      //クリックされた.accordionの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
      $(this).next('.accordion_inner').slideToggle();
      $(this).toggleClass("open");
    });
  });