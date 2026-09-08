// Keep browser chrome in sync with the CSS palette; the page itself needs no JS.
(() => {
  const styles = getComputedStyle(document.documentElement);
  const color = (name) => styles.getPropertyValue(name).trim();

  document.querySelector('meta[name="theme-color"]').content = color("--paper");

  const icon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
    <rect width="36" height="36" rx="5" fill="${color("--paper")}" />
    <path d="M5 9h15" stroke="${color("--link")}" stroke-width="4" />
    <path d="M11 17v14" stroke="${color("--ink-soft")}" stroke-width="4" />
    <path d="M19 25h12" stroke="${color("--favicon-oat")}" stroke-width="4" />
    <path d="M25 7h7v7h-7z" fill="${color("--thinking-border")}" />
  </svg>`;

  document.querySelector('link[rel="icon"]').href =
    `data:image/svg+xml,${encodeURIComponent(icon)}`;
})();
