gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
    scrollTrigger: {
        trigger: ".div1",
        start: "top 100%",
        end: "bottom 0%",
        scrub: true,
        markers: true,
        toggleActions: "restart pause reverse pause"
    },
    //i want to make the square to move from the top left to the bottom right at the same time the div is scrolling down from the top to the bottom
    x: 500,
    y: 500,
    duration: 2
})