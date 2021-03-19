// SCROLLBAR START

$(window).scroll(function () {
  var scroll = $(window).scrollTop(),
    dh = $(document).height(),
    wh = $(window).height();
  scrollPercent = (scroll / (dh - wh)) * 100;
  $(".progressbar").css("height", scrollPercent + "%");
});

// SCROLLBAR END

// CURSOR ANIMATION START
const cursor = document.querySelector("#cursor"),
  anchor = document.querySelectorAll("a",);

//   custom cursor

const cursorStyle = (e) => {
  const x = e.clientX;
  const y = e.clientY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
}

window.addEventListener("mousemove", (e) => { cursorStyle(e) });

// anchor tag hover effect

anchor.forEach((anc) => {
  anc.addEventListener("mouseover", () => {
    cursor.style.transform = "scale(2.5)";
    cursor.style.animationName = "borderAnim";
  });
  anc.addEventListener("mouseleave", () => {
    cursor.style.transform = "";
    cursor.style.animationName = "";
  });
});

// CURSOR ANIMATION END

// HERO SECTION ANIMATION START
gsap.registerPlugin(ScrollTrigger)


TweenMax.to(".preload-main", 2.5, {
  y: "-100%",
  ease: "Expo.easeInOut",
});

TweenMax.from(".nav-back-subline-left", 2, {
  delay: 1.6,
  opacity: 0,
  y: 20,
  skewY: 3,
  ease: "Expo.easeInOut"
});

TweenMax.from(".nav-back-subline-right", 2, {
  delay: 1.6,
  opacity: 0,
  y: 20,
  skewY: 3,
  ease: "Expo.easeInOut"
});

TweenMax.from(".nav-back", 2, {
  delay: 1.5,
  opacity: 0,
  y: 20,
  ease: "Expo.easeInOut"
});


TweenMax.from(".hero-h1", 2, {
  delay: 1,
  opacity: 0,
  y: 100,
  ease: "Expo.easeInOut",
  skewY: 1,
});

TweenMax.from(".tag", 2, {
  delay: 2,
  opacity: 0,
  y: 20,
  ease: "Expo.easeInOut",
})

TweenMax.from(".social-media", 2, {
  delay: 2.3,
  opacity: 0,
  y: 20,
  ease: "Expo.easeInOut",
});

TweenMax.from(".hand_emoji", {
  scrollTrigger:
  {
    trigger: ".about_fließtext_info",
    start: "-10% 30%",
    end: "-10% 30%",
    scrub: 4,
    delay: 3,
  },

  opacity: 0,
  y: 200,
  ease: "Expo.easeInOut",

})

// FOOTER SECTION ANIMATION START

TweenMax.from(".footer-copyright", 3, {
  scrollTrigger: {
    trigger: ".section-footer",
    scrub: 4,
    start: "top 30%",
    end: "center 50%",
  },
  stagger:01,
  skewY: 3,
  y: 100,
  opacity: 0,
  ease: "Expo.easeInOut",
}, "+=1"

)

TweenMax.from(".back-top-footer", 1, {
  scrollTrigger:
  {
    trigger: ".section-footer",
    scrub: 3,
    start: "top top",
    end: "center 50%",
  },
  skewY: 5,
  opacity: 0,
  ease: "Expo.easeInOut",
  y: 100
}

)

TweenMax.from(".footer-hit-up", 1, {
  scrollTrigger:
  {
    trigger: ".section-footer",
    scrub: 3,
    start: "top top",
    end: "center 50%",
  },
  skewY: 5,
  opacity: 0,
  ease: "Expo.easeInOut",
  y: 100
}

)


// TweenMax.from(".impressum-datenschutz", 1, {
//   scrollTrigger:
//   {
//     trigger: ".section-footer",
//     scrub: 4,
//     start: "top top",
//     end: "center 50%",

//   },
//   delay: 1,
//   skewY: 5,
//   y: 50,
//   opacity: 0,
//   ease: "Expo.easeInOut",

// }
// )
// FOOTER SECTION ANIMATION END