$(document).ready(function(){
  $('.value').each(function(){
      $(this).prop('Counter',0).animate({
          Counter: $(this).text()
      },{
          duration: 3500,
          easing: 'swing',
          step: function (now){
              $(this).text(Math.ceil(now));
          }
      });
  });
});


(function ($) {
    $(document).ready(function () {
             $('.faq-wrapper .faq-title').on('click', function (e) {
          var element = $(this).parent('.faq-item');
          if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('.faq-content').removeClass('open');
            element.find('.faq-content').slideUp(300, "swing");
          } else {
            element.addClass('open');
            element.children('.faq-content').slideDown(300, "swing");
            element.siblings('.faq-item').children('.faq-content').slideUp(300, "swing");
            element.siblings('.faq-item').removeClass('open');
            element.siblings('.faq-item').find('.faq-title').removeClass('open');
            element.siblings('.faq-item').find('.faq-content').slideUp(300, "swing");
          }
    });
});




$(function($) {
  
  $.autofilter({
    animation:true,
    duration: 200
  });

});

$(function($) {

  $("#hide").click(function(){
    $(".nav2").toggle();
  });

});





})(jQuery);






const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// copy to clip
function CopyToClipboard(containerid) {

  if (document.selection) {
    var range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(containerid));
    range.select().createTextRange();
    document.execCommand("copy");
  } 
  
  else if (window.getSelection) {
    var range = document.createRange();
    range.selectNode(document.getElementById(containerid));
    window.getSelection().addRange(range);
    document.execCommand("copy");

    setTimeout(() => {
      window.getSelection()?.removeAllRanges();
    }, "1000")
    
    
  }
}