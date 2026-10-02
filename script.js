const startBtn =
  document.getElementById("startBtn");

const content =
  document.getElementById("content");

const song =
  document.getElementById("song");

const typed =
  document.getElementById("typed");

const openBtn =
  document.getElementById("openBtn");

const finalBox =
  document.getElementById("finalBox");


/* زر البداية */

startBtn.addEventListener("click", async () => {

  content.classList.remove("hidden");

  startBtn
    .closest(".hero")
    .style.display = "none";


  /* تشغيل الأغنية */

  try {

    await song.play();

  } catch (e) {

    console.log("Audio needs user interaction.");

  }


  document.body.style.overflowY = "auto";


  setTimeout(() => {

    revealVisible();

  }, 120);


  typeMessage(
    "I love you maloktyyy🥰"
  );


  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

});


/* ظهور العناصر */

function revealVisible() {

  document
    .querySelectorAll(".reveal")
    .forEach(el => {

      const r =
        el.getBoundingClientRect();

      if (
        r.top <
        innerHeight * .9
      ) {

        el.classList.add("show");

      }

    });

}


window.addEventListener(
  "scroll",
  revealVisible
);


/* كتابة الرسالة حرف حرف */

function typeMessage(text) {

  let i = 0;

  const timer =
    setInterval(() => {

      typed.textContent =
        text.slice(0, ++i);

      if (i >= text.length) {

        clearInterval(timer);

      }

    }, 75);

}


/* زر المفاجأة الأخيرة */

openBtn.addEventListener(
  "click",
  () => {

    finalBox
      .classList
      .remove("hidden");

    openBtn.style.display =
      "none";


    finalBox.scrollIntoView({

      behavior: "smooth",

      block: "center"

    });


    /* قلوب */

    for (
      let i = 0;
      i < 16;
      i++
    ) {

      setTimeout(
        createHeart,
        i * 120
      );

    }

  }
);


/* إنشاء قلب */

function createHeart() {

  const h =
    document.createElement("div");

  h.className =
    "floating-heart";

  h.textContent =
    ["♡", "♥", "❤", "💗"]
      [Math.floor(
        Math.random() * 4
      )];

  h.style.left =
    Math.random() * 100 + "vw";

  h.style.fontSize =
    (14 + Math.random() * 20)
    + "px";

  h.style.animationDuration =
    (5 + Math.random() * 4)
    + "s";


  document
    .getElementById("hearts")
    .appendChild(h);


  setTimeout(() => {

    h.remove();

  }, 9000);

}