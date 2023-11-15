TweenMax.staggerFrom('.block', 0.8, {
  width:'0%',
  ease: Power1.easeIn,
  dealy: 2,
}, 0.07);

TweenMax.to('.load', 1, {
  x: 2,
  opacity: 0,
  ease: Expo.easeInOut,
  delay: 1.5
});

TweenMax.staggerFrom('.nav > a, .about p, .sub-header > a, .project-link > h2, .social > a', 1.5, {
  opacity: 0,
  y: 30,
  ease: Expo.easeInOut,
  delay: 1.5
}, 0.06);

TweenMax.to('.box', 0.2, {
  opacity: 1,
  ease: Expo.easeInOut,
  delay: 2
});

TweenMax.to('img', 0.2, {
  opacity: 1,
  ease: Expo.easeInOut,
  delay: 2.5
});

TweenMax.to('.box', 2, {
  y: '-100%',
  ease: Expo.easeInOut,
  delay: 2.5
});

const allcontainer = gsap.utils.toArray(".project-link");
const venueImageWrap = document.querySelector(".project-images");
const venueImage = document.querySelector(".project-img");

function initcontainer() {
  allcontainer.forEach((link) => {
    link.addEventListener("mouseenter", venueHover);
    link.addEventListener("mouseleave", venueHover);
    link.addEventListener("mousemove", moveVenueImage);
  });
}

function moveVenueImage(e) {
  let xpos = e.clientX;
  let ypos = e.clientY;
  const tl = gsap.timeline();
  tl.to(venueImageWrap, {
    x: xpos,
    y: ypos,
  });
}

function venueHover(e) {
  if (e.type === "mouseenter") {
    const targetImage = e.target.dataset.img;

    const tl = gsap.timeline();
    tl.set(venueImage, {
      backgroundImage: `url(${targetImage})`,
    }).to(venueImageWrap, {
      duration: 0.5,
      autoAlpha: 1,
    });
  } else if (e.type === "mouseleave") {
    const tl = gsap.timeline();
    tl.to(venueImageWrap, {
      duration: 0.5,
      autoAlpha: 0,
    });
  }
}

function init() {
  initcontainer();
}

window.addEventListener("load", function () {
  init();
});

