// .s_07 .accordion_one
$(function(){
    //.accordionの中の.accordion_headerがクリックされたら
    $('.accordion .accordion_header').click(function(){
      //クリックされた.accordionの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
      $(this).next('.accordion_inner').slideToggle();
      $(this).toggleClass("open");
    });
  });

var answer_list = [
  "鯖読んで無い？",
  "鯖読んでない？",
  "鯖よんで無い？",
  "鯖よんでない？",
  "サバ読んで無い？",
  "サバ読んでない？",
  "サバよんで無い？",
  "サバよんでない？",
  "さば読んで無い？",
  "さば読んでない？",
  "さばよんで無い？",
  "さばよんでない？",
  "鯖読んで無い",
  "鯖読んでない",
  "鯖よんで無い",
  "鯖よんでない",
  "サバ読んで無い",
  "サバ読んでない",
  "サバよんで無い",
  "サバよんでない",
  "さば読んで無い",
  "さば読んでない",
  "さばよんで無い",
  "さばよんでない"
]

function submitAnswer(){
  var answer = document.getElementById("answer").value;
  console.log(answer)
  if (answer_list.includes(answer)) {
    window.location.href = "clear.html";
  }
}