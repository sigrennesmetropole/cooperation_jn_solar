const __viteBrowserExternal_url = new Proxy({}, {
  get(_, key) {
    throw new Error(`Module "url" has been externalized for browser compatibility. Cannot access "url.${key}" in client code.`);
  }
});
export {
  __viteBrowserExternal_url as default
};
