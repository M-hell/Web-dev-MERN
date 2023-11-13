var tl=gsap.timeline();
tl.from(".box1 h1",{
    // color: "blue",
    // duration: 2
    opacity:0,
    //onStart and onUpdate
    onStart:function(){
        // $('.box1 h1').textillate({ in: { effect: 'fadeInUp' } });
        //if we need to apply out effect also

        $('.box1 h1').textillate({ in: { effect: 'fadeInUp',
        callback:function(){
            $('.box1 h1').textillate('out')
        } },
    out: {effect:'fadeOutUp'} });
    }
})
tl.from(".box1 h2",{
    // color: "blue",
    // duration: 2
    delay: 1,
    opacity: 0,
    //onStart and onUpdate
    onStart:function(){
        // $('.box1 h1').textillate({ in: { effect: 'fadeInUp' } });
        //if we need to apply out effect also

        $('.box1 h2').textillate({ in: { effect: 'fadeInUp',
        callback:function(){
            $('.box1 h2').textillate('out')
        } },
    out: {effect:'fadeOutUp'} });
    }
})
tl.from(".box1 h3",{
    // color: "blue",
    // duration: 2
    delay: 1.1,
    opacity:0,
    //onStart and onUpdate
    onStart:function(){
        // $('.box1 h1').textillate({ in: { effect: 'fadeInUp' } });
        //if we need to apply out effect also

        $('.box1 h3').textillate({ in: { effect: 'fadeInUp',
        callback:function(){
            $('.box1 h3').textillate('out')
        } },
    out: {effect:'fadeOutUp'} });
    }
})
tl.to(".box1",{
    top:"-100%",
    delay:1,
    duration:1.2,
    ease:"Power5.easeOut"
})
