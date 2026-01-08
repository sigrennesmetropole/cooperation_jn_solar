const __viteBrowserExternal_http = new Proxy({}, {
  get(_, key) {
    throw new Error(`Module "http" has been externalized for browser compatibility. Cannot access "http.${key}" in client code.`);
  }
});
export {
  __viteBrowserExternal_http as default
};
