document.addEventListener("DOMContentLoaded", () => {
  let mainCircle = document.querySelector(".promo-img");
  let circles = document.querySelectorAll(".promo-img__item");
  let arrows = document.querySelectorAll(".promo-img__arrow");
  let promoInfoElements = document.querySelector(".promo-info").children;
  let leafs = document.querySelectorAll(".leaf-anim");
  let titles=[".earn-info__title",".ecosystem__title",".info__title",".farm__title",".upcoming__title",".featured__title",".audited__title",".pre-footer__title"];
  let earnGraphColumn = document.querySelectorAll(".earn-graph__column");
  let earnGraphColumnsSize=["50%","65%","30%","60%"]
  let ecosystemCards=document.querySelector(".ecosystem__list").children;
  let advantages = document.querySelectorAll(".earn-advantages__item");
  let farmCards=document.querySelector(".farm__list").children;
  let upcomingCards=document.querySelector(".upcoming__list").children;
  console.log(ecosystemCards)
  gsap.registerPlugin(ScrollTrigger);
  function resizeCircle() {
    mainCircle.style.height = mainCircle.offsetWidth + "px";
  }
  function translateCircles() {
    let mainCircleWidth = mainCircle.offsetWidth / 3;
    let initialDegree = 90;
    let changeDegree = 60;
    circles.forEach((item, index) => {
      if (index > 0) {
        item.style.transform = `translate(${
          Math.cos(
            initialDegree * (Math.PI / 180) +
              (index - 1) * changeDegree * (Math.PI / 180)
          ) * mainCircleWidth
        }px, ${-(
          Math.sin(
            initialDegree * (Math.PI / 180) +
              (index - 1) * changeDegree * (Math.PI / 180)
          ) * mainCircleWidth
        )}px)`;
      }
    });
  }
  function activatePromoElem() {
    circles.forEach((item) => {
      item.classList.add("active");
    });
    arrows.forEach((item) => {
      item.classList.add("active");
    });
  }
  function activatePromoAnimation() {
    gsap.fromTo(
      circles,
      { scale: 0 },
      { delay: 0.5, duration: 1, scale: 1, ease: "back.out(1.5)" }
    );
    gsap.fromTo(
      ".promo-img__arrow",
      { scale: 0 },
      {
        delay: 0.5,
        duration: 1,
        scale: 1,
        ease: "back.out(1.5)",
        onComplete: () => {
          gsap.to(".promo-img__arrow", {
            duration: 0.2,
            y: 6,
            repeat: 3,
            yoyo: true,
            ease: "power1.inOut",
          });
        },
      }
    );
  }
  function mainTextAppearance() {
    gsap.set(promoInfoElements, {
      duration: 0,
      opacity: 0,
      y: -20,
      onComplete: () => {
        gsap.to(promoInfoElements, {
          delay: 0.5,
          duration: 0.5,
          opacity: 1,
          stagger: 0.6,
          y: 0,
          ease: "power1.inOut",
          onComplete: () => {
            document.querySelector(".promo__btn").style.transition =
              "all .2s linear";
          },
        });
      },
    });
  }
  function onDocumentReady() {
    resizeCircle();
    translateCircles();
    mainTextAppearance();
    activatePromoElem();
    activatePromoAnimation();
  }
  onDocumentReady();
  titles.forEach((item) => {
    gsap.fromTo(
      item,
      { duration: 0, opacity: 0, y: -20 },
      {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: item,
          start: "bottom bottom",
        },
      }
    );
  });
  earnGraphColumn.forEach((item,index) => {
    gsap.fromTo(
      item,
      {
        duration: 0,
        opacity: 0,
        height: 0,
      },
      {
        duration: 0.5,
        opacity: 1,
        height: earnGraphColumnsSize[index],
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: item,
          start: "bottom bottom+=150px",
        },
      }
    );
  })
  gsap.fromTo(
    ecosystemCards,
    { duration: 0, opacity: 0, y: -20, delay:.1,},
    {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
      stagger: 0.2, 
      scrollTrigger: { trigger: ecosystemCards, start: "bottom bottom" },
    }
  );
  gsap.fromTo(
    ".card--mini",
    { duration: 0, opacity: 0, y: -20 },
    {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
      stagger: 0.2,
      scrollTrigger: { trigger: ".card--mini", start: "bottom bottom" },
    }
  );
  gsap.fromTo(
    farmCards,
    { duration: 0, opacity: 0, y: -20 },
    {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
      stagger: 0.2,
      scrollTrigger: { trigger:farmCards, start: "bottom bottom" },
    }
  );
  gsap.fromTo(
    upcomingCards,
    { duration: 0, opacity: 0, y: -20 },
    {
      duration: 0.5,
      opacity: 1,
      y: 0,
      ease: "power1.inOut",
      stagger: 0.2,
      scrollTrigger: { trigger: upcomingCards, start: "bottom bottom" },
    }
  );
  advantages.forEach((advantage) => {
    gsap.fromTo(
      advantage,
      { duration: 0, opacity: 0, y: -10 },
      {
        duration: 0.5,
        opacity: 1,
        y: 0,
        ease: "power1.inOut",
        scrollTrigger: { trigger: advantage, start: "bottom bottom" },
      }
    );
  });
  window.addEventListener("resize", () => {
    resizeCircle();
    translateCircles();
  });
  window.onscroll = () => {
    leafs.forEach((leaf) => {
      let coordBottomLeaf =
        (leaf.getBoundingClientRect().bottom +
          window.pageYOffset +
          leaf.getBoundingClientRect().top +
          window.pageYOffset) /
        2;
      let coordBottomPage =
        window.pageYOffset + document.documentElement.clientHeight;
      let coordDelta = coordBottomPage - coordBottomLeaf;
      let animationDistance = document.documentElement.clientHeight / 2;
      if (coordDelta > 0 && coordDelta < animationDistance) {
        leaf.style = `stroke-dashoffset:${
          -1300 + (1300 / animationDistance) * coordDelta
        }px;`;
      }
    });
  };

  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl);
  });
  var popover = new bootstrap.Popover(
    document.querySelector(".example-popover"),
    {
      container: "body",
    }
  );
});