function start(){
  document.getElementById('navigation').scrollIntoView({behavior:"smooth"});
}



function page1(){
  document.getElementById("textContainer").style.animation = "textContainer1 3.5s forwards 1";

  document.getElementById("page2").style.animation = "diss 1s forwards 1" ;
  document.getElementById("page3").style.animation = "diss 1s forwards 1" ;
  document.getElementById("page4").style.animation = "diss 1s forwards 1" ;
  document.getElementById("page5").style.animation = "diss 1s forwards 1" ;
  setTimeout(  function(){  location.href='page1.html';}   , 3000)
}
function page2(){
  document.getElementById("textContainer").style.animation = "textContainer2 3s forwards 1";
  document.getElementById("page2").style.animation = "page2 3s forwards 1";
  document.getElementById("page1").style.animation = "diss 1s forwards 1" ;
  document.getElementById("page3").style.animation = "diss 1s forwards 1" ;
  document.getElementById("page4").style.animation = "diss 1s forwards 1" ;
  document.getElementById("page5").style.animation = "diss 1s forwards 1" ;
  setTimeout(  function(){  location.href='page2.html';}   , 3000)
}
function page3(){
  document.getElementById("textContainer").style.animation = "textContainer3 3s forwards 1";
    document.getElementById("page3").style.animation = "page3 3s forwards 1";
  document.getElementById("page1").style.animation = "diss 1s forwards 1" ;
  document.getElementById("page2").style.animation = "diss 1s forwards 1" ;
  document.getElementById("page4").style.animation = "diss 1s forwards 1" ;
  document.getElementById("page5").style.animation = "diss 1s forwards 1" ;
  setTimeout(  function(){  location.href='page3.html';}   , 3000)
}
function page4(){
  document.getElementById("textContainer").style.animation = "textContainer4 3s forwards 1";
      document.getElementById("page4").style.animation = "page4 3s forwards 1";
  document.getElementById("page1").style.animation = "diss 1s forwards 1" ;
  document.getElementById("page2").style.animation = "diss 1s forwards 1" ;
  document.getElementById("page3").style.animation = "diss 1s forwards 1" ;
  document.getElementById("page5").style.animation = "diss 1s forwards 1" ;
  setTimeout(  function(){  location.href='page4.html';}   , 3000)
}
function page5(){
  document.getElementById("textContainer").style.animation = "textContainer5 3s forwards 1";
      document.getElementById("page5").style.animation = "page5 3s forwards 1";
  document.getElementById("page1").style.animation = "diss 1s forwards 1" ;
  document.getElementById("page2").style.animation = "diss 1s forwards 1" ;
  document.getElementById("page3").style.animation = "diss 1s forwards 1" ;
  document.getElementById("page4").style.animation = "diss 1s forwards 1" ;
  setTimeout(  function(){  location.href='page5.html';}   , 3000)
}
