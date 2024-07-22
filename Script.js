var tl = gsap.timeline();
tl.from(".line h1,h2", {
  y: 150,
  stagger: 0.5,
  duration: 0.5,
  delay: 0.3,
});
tl.from("#line1-part1,.line h2", {
  onStart: function () {
    let h5timer = document.querySelector("#line1-part1 h5");
    let grow = 0;
    let stop = setInterval(() => {
      if (grow <= 100) {
        h5timer.innerHTML = grow++;
      } else {
        clearInterval(stop);
      }
    }, 25);
  },
  opacity: 0,
});
tl.to("#loader", {
  opacity: 0,
  duration: 0.3,
  delay:3,
});
tl.from("#page1",{
    delay:0.2,
    opacity:0,
    y:1200,
    duration:0.5,
    ease:Power4,
})
tl.to("#loader",{
    display:none
})


