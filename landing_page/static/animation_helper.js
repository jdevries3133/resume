function positionSurprise() {
  const TOP_OFFSET = 41;
  const LEFT_OFFSET = 19;
  const welcome = document.getElementById("welcome");
  const surprise = document.getElementById("surprise");
  const rect = welcome.getBoundingClientRect();
  const Top = Math.floor(rect.y) - TOP_OFFSET;
  const left = Math.floor(rect.x) - LEFT_OFFSET;
  surprise.setAttribute("style", `top: ${Top}px; left: ${left}px;`);
}

positionSurprise();
window.addEventListener("resize", positionSurprise);
