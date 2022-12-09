
//자주 묻는 질문 
$(".faq-list dt").click(function() {
  $(this).next("dd").stop().slideToggle(300);
  $(this).toggleClass('on').siblings().removeClass('on');
  $(this).next("dd").siblings("dd").slideUp(300); // 1개씩 펼치기
});

// smooth moving
$('.btn-goto-top').click(function () {
  $.scrollTo(this.hash || 0, 900);
  e.preventDefault();
});