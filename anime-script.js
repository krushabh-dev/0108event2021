let controller = new ScrollMagic.Controller();
let tl2 = anime.timeline({ autoplay: false });

// Add animations
let s2a1 = {
  targets: "#special-scroll .scrolled-element",
  opacity: [0.3, 1],
  scale: [4, 1],
  duration: 2500,
  delay: 0,
  easing: "easeInOutSine",
};

let s2a2 = {
  targets: "#special-scroll .scrolled-element",
  scale: 1,
  duration: 1500,
};

// Add children
tl2.add(s2a1).add(s2a2);

let scene2 = new ScrollMagic.Scene({
  triggerElement: "#special-scroll",
  duration: 1500,
  triggerHook: 0,
})
  .on("progress", function (event) {
    tl2.seek(tl2.duration * event.progress);
  })

  .setPin("#special-scroll")
  .addTo(controller);
