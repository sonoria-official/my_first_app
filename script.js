// ==========================================
// 1. ハンバーガーメニューの開閉処理
// ==========================================
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('sideMenu');

// 三本線ボタンがクリックされたときの動き
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    sideMenu.classList.toggle('active');
});

// メニューの外側をクリックしたときに閉じる動き
document.addEventListener('click', (event) => {
    if (!sideMenu.contains(event.target) && !menuToggle.contains(event.target)) {
        menuToggle.classList.remove('active');
        sideMenu.classList.remove('active');
    }
});

// ==========================================
// 2. スクロール連動アニメーション処理
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".card, .news-card, .sns-box");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15 // 画面に15%入ったら発火
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // 下スクロールで画面内に入ったら表示
        entry.target.classList.add("scroll-in");
      } else {
        // 上スクロールなどで画面外に出たら非表示（順番に消える）
        entry.target.classList.remove("scroll-in");
      }
    });
  }, observerOptions);

  animatedElements.forEach((el, index) => {
    // 順番に出現・消失させるためのディレイ（遅延）設定
    el.style.transitionDelay = `${(index % 3) * 0.15}s`;
    observer.observe(el);
  });
});