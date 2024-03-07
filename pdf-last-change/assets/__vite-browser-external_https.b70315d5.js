const __viteBrowserExternal_https = new Proxy({}, {
  get(_, key) {
    throw new Error(`Module "https" has been externalized for browser compatibility. Cannot access "https.${key}" in client code.`);
  }
});
export {
  __viteBrowserExternal_https as default
};
