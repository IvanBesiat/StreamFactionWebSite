"use strict"

const header = document.querySelector(".head");

window.on('scroll',function(){
    var scroll = window.scrollTop();
           if (scroll < 100) {
            $(".head").removeClass("sticky");
           }else{
            $(".head").addClass("sticky");
           }
});
console.log(header);