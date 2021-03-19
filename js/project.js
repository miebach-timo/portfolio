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

gsap.registerPlugin(ScrollTrigger)


TweenMax.to(".preload-main", 3.5, {
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

TweenMax.from(".storytelling-headline", {
  scrollTrigger:
  {
    trigger: ".project-storytelling",
    start: "-10% 30%",
    end: "-10% 30%",
    scrub: 4
  },

  skewY: 3,
  opacity: 0,
  y: 100,
  ease: "Expo.easeInOut",

})

TweenMax.from(".storytelling-zeichen", {
  scrollTrigger:
  {
    trigger: ".project-storytelling",
    start: "-60% 30%",
    end: "-60% 30%",
    scrub: 4,
    delay: 3,
  },

  skewY: 3,
  opacity: 0,
  y: 100,
  ease: "Expo.easeInOut",

})



TweenMax.from(".storytelling-text", {
  scrollTrigger:
  {
    trigger: ".storytelling-headline",
    start: "-15% 30%",
    end: "-15% 30%",
    scrub: 4,
  },

  skewY: 3,
  opacity: 0,
  y: 100,
  ease: "Expo.easeInOut",

}, "+=1"
)

TweenMax.from(".long-img", 3, {
  scrollTrigger: {
    trigger: ".long-img",
    scrub: 4,
    start: "-10% 30%",
    end: "top 30%",
    stagger: true,
  },
  y: 100,
  opacity: 0,
  ease: "Expo.easeInOut",
})


TweenMax.from(".scrolling_bg", 3, {
  scrollTrigger: {
    trigger: ".long-img",
    scrub: 1,
    start: "-80% 30%",
    end: "0% 30%",
    stagger: true,
    sticky: true,
  },
  opacity: 0,
  ease: "Expo.easeInOut",
  y: 50,
})







// FOOTER SECTION ANIMATION START

TweenMax.from(".footer-copyright", 3, {
  scrollTrigger: {
    trigger: ".section-footer",
    scrub: 4,
    start: "top 30%",
    end: "center 50%",
  },
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
    start: "top 30",
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
    start: "top 30",
    end: "center 50%",
  },
  skewY: 5,
  opacity: 0,
  ease: "Expo.easeInOut",
  y: 100
})






