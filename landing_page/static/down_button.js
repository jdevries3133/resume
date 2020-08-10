// apply padding above and below the down button to fill the page.

async function find_element(id) {
  let el = document.getElementById(id);
  if (el) {
    return el;
  } else {
    await new Promise((r) => setInterval(r, 10));
    el = document.getElementById(id);
    if (!el) {
      throw "Element " + el + " not found";
    }
    return el;
  }
}

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
  el.setAttribute("style", `padding: ${padding}px 0px`);
};

const el = find_element("arrow");
el.then((r) => space_arrow(r));
