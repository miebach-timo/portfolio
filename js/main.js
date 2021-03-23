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



TweenMax.to(".preload-main", 3.5, {
  y: "-100%",
  ease: "Expo.easeInOut",
});


TweenMax.from(".nav-info", 2, {
  delay: 2,
  opacity: 0,
  y: 20,
  skewY: 5,
  ease: "Expo.easeInOut"
});

TweenMax.from(".nav-work", 2, {
  delay: 2.2,
  opacity: 0,
  y: 20,
  skewY: 5,
  ease: "Expo.easeInOut"
});


TweenMax.from(".nav-contact", 2, {
  delay: 2.4,
  opacity: 0,
  y: 20,
  skewY: 5,
  ease: "Expo.easeInOut"
});

TweenMax.from(".tag", 2, {
  delay: 3.5,
  opacity: 0,
  y: 20,
  ease: "Expo.easeInOut",
})

TweenMax.from(".social-media", 2, {
  delay: 3.6,
  opacity: 0,
  y: 20,
  ease: "Expo.easeInOut",
});

TweenMax.from(".hero-h1", 2, {
  delay: 3.8,
  opacity: 0,
  y: 100,
  ease: "Expo.easeInOut",
  skewY: 1,
});

// LANDING SECTION ANIMATION END


// ABOUT SECTION ANIMATION START

TweenMax.from(".img-me", 2, {
  y: 600,
  ease: "power4.out",
  scrollTrigger: {
    scrub: 1.5,
    trigger: ".img-me",
    start: "top bottom",
    toggleActions: "restart pause reverse pause"
  }
})

// ABOUT SECTION ANIMATION END

// INFO SECTION ANIMATION START

TweenMax.from(".paragraph", 1.7, {
  scrollTrigger:
  {
    trigger: ".paragraph",
    start: "top bottom",
    end: "top 30%",
    scrub: 2,
  },
  opacity: 0,
  skewY: 1,
  y: 50,
  ease: "Expo.easeInOut",

})

TweenMax.from(".info-headline", 3, {
  scrollTrigger:
  {
    trigger: ".info-wrapper",
    start: "-20% center",
    end: "30% bottom",
    scrub: 4,
  },

  skewY: 1,
  opacity: 0,
  y: -100,
  ease: "Expo.easeInOut",

})


TweenMax.from(".info-read-more", 1.7, {
  scrollTrigger:
  {
    start: "top bottom",
    end: "top 70%",
    trigger: ".info-read-more",
    scrub: 3,
  },

  skewY: 5,
  opacity: 0,
  y: 50,
  ease: "Expo.easeInOut",
})

// INFO SECTION ANIMATION END

// WORK SECTION ANIMATION START


TweenMax.from(".work_headline", 1.7, {
  scrollTrigger:
  {
    trigger: ".work_section",
    start: "top bottom",
    end: "top 30%",
    scrub: 2,
  },
  opacity: 0,
  skewY: 1,
  y: 100,
  ease: "Expo.easeInOut",

})

// WORK SECTION ANIMATION START




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
//   skewX: 5,
//   y: 50,
//   opacity: 0,
//   ease: "Expo.easeInOut",

// }
// )



// FOOTER SECTION ANIMATION END

// wir speichern den bild container ab 
const imgContainer = document.querySelector('.special-image-container');

// wir speichern alle element bei denen dieser effekt kommen soll ab
const specialHoverShit = Array.from(document.querySelectorAll('.special-image-link'));

window.addEventListener('mousemove', (e) => {
  imgContainer.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

// wir gehen über jedes element 
specialHoverShit.forEach((element) => {
  // wir holen uns die image src
  const img = element.getAttribute('data-image');

  // bei hover wollen wir das element aktivieren 
  element.addEventListener('mouseenter', () => {
    imgContainer.style.display = 'block';
    imgContainer.src = img;
    cursor.style.display = 'none';
  });

  element.addEventListener('mouseleave', () => {
    imgContainer.style.display = 'none';
    imgContainer.src = '';
    cursor.style.display = 'block';
  });

});
