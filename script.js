function navAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
navAnimation()


function videoConAnimation(){
    var videoCon = document.querySelector('#video-container')
var playbtn = document.querySelector('#play')

videoCon.addEventListener('mouseenter', function(){
    gsap.to(playbtn, {
        scale: 1,
        opacity: 1,
        transform: "translate(-50%, -50%)"
    })
})
videoCon.addEventListener('mouseout', function(){
    gsap.to(playbtn, {
        scale: 0,
        opacity: 0,
        transform: "translate(-50%, -50%)"
    })
})
videoCon.addEventListener('mousemove', function(e){
    gsap.to(playbtn, {
        transform: 'translate(-50%, -50%)',
        left:e.x-60,
        top:e.y-140
    })
})
}
videoConAnimation()

function loadingAnimation(){
    gsap.from('#page1 h1',{
        y: 60,
        delay:0.5,
        duration:0.3,
        opacity:0,
        stagger:0.2
    })
    gsap.from('#page1 #video-container',{
        scale:0.9,
        opacity:0,
        delay:1.5,
        duration:0.6,
    })
}

loadingAnimation()

function cursorAnimation (){
    document.addEventListener('mousemove', function(dets){
        gsap.to('.cursor',{
            left: dets.x,
            top: dets.y
        })
    })
    document.querySelector('#content1').addEventListener("mouseover",function(){
        gsap.to('.cursor',{
            transform: 'translate(-50%, -50%) scale(1)',
            backgroundColor: 'rgb(245, 233, 219)'
        })
    })
    document.querySelector('#content1').addEventListener("mouseleave",function(){
        gsap.to('.cursor',{
            transform: 'translate(-50%, -50%) scale(0)',
            backgroundColor: 'rgb(245, 233, 219)'
        })
    })
    document.querySelector('#content2').addEventListener("mouseenter",function(){
        gsap.to('.cursor',{
            transform: 'translate(-50%, -50%) scale(1)',
            backgroundColor: 'rgb(245, 227, 243)'
        })
    })
    document.querySelector('#content2').addEventListener("mouseleave",function(){
        gsap.to('.cursor',{
            transform: 'translate(-50%, -50%) scale(0)',
            backgroundColor: 'rgb(245, 227, 243)'
        })
    })
    document.querySelector('#content3').addEventListener("mouseenter",function(){
        gsap.to('.cursor',{
            transform: 'translate(-50%, -50%) scale(1)',
            backgroundColor: 'rgb(222, 240, 230)'
        })
    })
    document.querySelector('#content3').addEventListener("mouseleave",function(){
        gsap.to('.cursor',{
            transform: 'translate(-50%, -50%) scale(0)',
            backgroundColor: 'rgb(222, 240, 230)'
        })
    })
    document.querySelector('#content4').addEventListener("mouseenter",function(){
        gsap.to('.cursor',{
            transform: 'translate(-50%, -50%) scale(1)',
            backgroundColor: 'rgb(245, 223, 223)'
        })
    })
    document.querySelector('#content4').addEventListener("mouseleave",function(){
        gsap.to('.cursor',{
            transform: 'translate(-50%, -50%) scale(0)',
            backgroundColor: 'rgb(245, 223, 223)'
        })
    })
}
cursorAnimation()