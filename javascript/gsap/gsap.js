var tl=gsap.timeline();
tl.from("#div1 h1",{
    opacity:0,
    y:20,
    color:"red",
    duration:2
})

tl.from("#div2 h2",{
    delay:0.1,
    opacity:0,
    y:20,
    color:"red",
    duration:2
})
// tl.form("#div3 h3",{
//     scale:0.1,
//     opacity:0,
//     y:20,
//     yoyo:"true",
//     repeat: -1
// })
tl.to("#div3 h3",{
    y:20,
    yoyo:"true",
    repeat: -1
})
//for no timeline you can directly write gsap.from or gsap.to
