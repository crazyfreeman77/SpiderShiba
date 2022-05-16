$(function(){

  var marquee = $("#marquee");
  marquee.css({ "overflow": "hidden", "width": "100%" });

  
  marquee.wrapInner("<span>");
  marquee.find("span").css({ "width": "50%", "display": "inline-block", "text-align": "center" });
  marquee.append(marquee.find("span").clone()); 

  marquee.wrapInner("<div>");
  marquee.find("div").css("width", "200%");

  var reset = function () {
    $(this).css("margin-left", "0%");
    $(this).animate({ "margin-left": "-100%" }, 12000, 'linear', reset);
  };

  reset.call(marquee.find("div"));

});



$('.team__slider').slick({
 
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  dots: true,
  arrows: false

});

var acc = document.getElementsByClassName("accordion__btn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}