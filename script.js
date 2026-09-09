document.addEventListener("DOMContentLoaded", () => {
  // ------------------------------------------
  // 1. サイドメニューの開閉処理
  // ------------------------------------------
  const menuToggle = document.getElementById("menuToggle");
  const sideMenu = document.getElementById("sideMenu");

  if (menuToggle && sideMenu) {
    // 3本線ボタンをクリックで開閉
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      menuToggle.classList.toggle("active");
      sideMenu.classList.toggle("active");
    });

    // メニュー外をクリックで閉じる
    document.addEventListener("click", (e) => {
      if (!sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        menuToggle.classList.remove("active");
        sideMenu.classList.remove("active");
      }
    });
  }

  // ------------------------------------------
  // 2. スクロール連動アニメーション処理
  // ------------------------------------------
  const animatedElements = document.querySelectorAll(".card, .news-card, .sns-box");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 下にスクロールして画面に入ったら表示
        entry.target.classList.add("scroll-in");
      } else {
        // 上にスクロールして画面外に出たら消える
        entry.target.classList.remove("scroll-in");
      }
    });
  }, observerOptions);

  animatedElements.forEach((el, index) => {
    el.style.transitionDelay = `${(index % 3) * 0.12}s`;
    observer.observe(el);
  });
});