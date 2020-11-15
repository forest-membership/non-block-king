const $ = (selector: string): Element | null =>
  document.querySelector(selector);

export { $ };
