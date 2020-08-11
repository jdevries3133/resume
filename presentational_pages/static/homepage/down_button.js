// apply padding above and below the down button to fill the page.

const space_arrow = (el) => {
  if (window.innerWidth < 400) {
    return;
  }
  const ARROW_SIZE = 148;
  const rect = el.getBoundingClientRect();
  const viewport = viewport_height();
  const working_space = viewport - rect.y - window.scrollY;
  const needs_filler = working_space - ARROW_SIZE;
  if (needs_filler < 0) {
    return;
  }
  const padding = Math.floor(needs_filler / 2);
  el.setAttribute("style", `margin: ${padding}px 0px`);
};

document.addEventListener("readystatechange", () => {
  if (document.readyState === "complete") {
    const el = document.getElementById("arrow");
    space_arrow(el);
  }
});
