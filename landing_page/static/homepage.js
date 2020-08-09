function positionSurprise() {
  // ISSUE: this only works if the browser is scrolled to the top.
  //        refreshing from the middle of the page does not work
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
