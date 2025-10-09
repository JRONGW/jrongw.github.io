window.addEventListener("load", () => {
  // CLOCK
  function updateClocks() {
    const uk = new Date().toLocaleTimeString("en-GB", {
      timeZone: "Europe/London",
      hour: "2-digit", minute: "2-digit", second: "2-digit"
    });
    const est = new Date().toLocaleTimeString("en-US", {
      timeZone: "America/New_York",
      hour: "2-digit", minute: "2-digit", second: "2-digit"
    });
    const cn = new Date().toLocaleTimeString("zh-CN", {
      timeZone: "Asia/Shanghai",
      hour: "2-digit", minute: "2-digit", second: "2-digit"
    });

    document.getElementById("clock-uk").textContent = uk;
    document.getElementById("clock-est").textContent = est;
    document.getElementById("clock-cn").textContent = cn;
  }

  setInterval(updateClocks, 1000);
  updateClocks();

  // MARQUEE
  const marquee = document.querySelector(".marquee span");
  if (marquee) {
    marquee.style.animation = "none";
    void marquee.offsetWidth; // reflow to restart animation
    marquee.style.animation = "scroll-left 25s linear infinite";
  }
});
