
let askname=prompt("Sir/Mam can I please know your name?","Guest");
let content=document.getElementById('jsidselect');
content.innerHTML="Hey "+askname+", ";
console.log(askname);


var tl=gsap.timeline();
tl.from(".my-own-navitems",{
    opacity:0,
    y:20,
    duration:1
})
tl.from("#controlthecentralheading",{
    opacity:0,
    y:20,
    duration:1
})
gsap.timeline({
    scrollTrigger: {
      scrub: 1,
      trigger: ".scroll-trigger-ready__worm-wrap",
      start: "top 90%",
      end: "bottom 30%",
    },
  });
 