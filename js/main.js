$(".nav_trigger").click(function () {
  $("#main").animate({'left' : '40%', 'right' : '-40%'},300, "swing");
});

const items = document.querySelectorAll("article");
const aside = document.querySelector("aside");
const close = document.querySelector("aside span");

for (let el of items) {
  // article에 hover 되었을 때 동영상 재생
  el.addEventListener("mouseenter", (e) => {
      e.currentTarget.querySelector("video").play();
  });
  el.addEventListener("mouseleave", (e) => {
      e.currentTarget.querySelector("video").pause();
  });

  // article을 클릭했을 때 aside 나옴
  el.addEventListener("click", (e) => {
    // txt/video 값 가져오기
    let title = e.currentTarget.querySelector('h3').innerText;
    let txt = e.currentTarget.querySelector('p').innerText;
    let vidSrc =  e.currentTarget.querySelector('video').getAttribute('src'); 

    aside.querySelector('h3').innerText = title;
    aside.querySelector('p').innerText = txt;
    aside.querySelector('video').setAttribute("src", vidSrc);
    aside.querySelector('video').play();

    aside.classList.add("on");
  });
} // for문 end

// aside 안 close버튼을 클릭하면 aside가 들어감
close.addEventListener("click", () => {
  aside.classList.remove("on");
  aside.querySelector('video').pause();
});
