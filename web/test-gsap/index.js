gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    scrollTrigger: {
        trigger: ".div1",
        start: "top 100%",
        end: "bottom 20%",
        scrub: true,
        markers: true,
        toggleActions: "restart pause reverse pause"
    },
    x: 500,
    y: 1000,
    rotation: 360,
    duration: 3
})
