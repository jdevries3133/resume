function positionSurprise() {
  if (document.readyState === "complete") {
    const TOP_OFFSET = 41;
    const LEFT_OFFSET = 19;
    const welcome = document.getElementById("welcome");
    const surprise = document.getElementById("surprise");
    const rect = welcome.getBoundingClientRect();
    const Top = Math.floor(rect.y) + window.scrollY - TOP_OFFSET;
    const left = Math.floor(rect.x) - LEFT_OFFSET;
    surprise.setAttribute("style", `top: ${Top}px; left: ${left}px;`);
  }
}

document.addEventListener("readystatechange", positionSurprise);
window.addEventListener("resize", positionSurprise);
