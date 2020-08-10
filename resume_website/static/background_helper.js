// sets the height of the body to match the viewport if the body is smaller than
// the viewport, so that the gradient stays inside.

const document_height = () => {
  const body = document.body,
    html = document.documentElement;
  return Math.max(body.scrollHeight || 0, body.offsetHeight || 0);
};

const viewport_height = () => {
  return Math.max(
    document.documentElement.clientHeight || 0,
    window.innerHeight || 0
  );
};

const resize_body = () => {
  if (viewport_height() > document_height()) {
    // make document bigger
    const padding = document.createElement("div");
    document.body.appendChild(padding);
    padding.setAttribute(
      "style",
      `height: ${viewport_height() - document_height()}px;`
    );
  }
};

resize_body();
window.addEventListener("resize", resize_body);
