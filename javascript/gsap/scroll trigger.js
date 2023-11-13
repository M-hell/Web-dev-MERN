gsap.from(".box1 img",{
    scale:1.5,
    duration:2,
    delay:2
})
// gsap.from(".box2 img",{
//     scale:1.5,
//     duration:2,
//     delay:2
// })
gsap.to(".box2 img",{
    scrollTrigger:{
        trigger:".box2 img",
        scroller:"body",
        markers:true,
        start:"top 40%",
        end:"bottom 10%",
        scrub:4, //1 to 5 according to smoothness
        pin:true //pins the object not that good
    },
    rotate:360,
    duration:2
})