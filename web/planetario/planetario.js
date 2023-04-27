alert("Hola mundo");
gsap.registerPlugin(ScrollTrigger);

gsap.to(".sol", {
    scrollTrigger: {
        trigger: ".sol",
        start: "top 50%",
        end: "bottom 10%",
        scrub: true,
        markers: true,
        toggleActions: "restart pause reverse pause"
    },

    x: 500,
    y: 500,
    duration: 2
})