const __viteBrowserExternal_zlib = new Proxy({}, {
  get(_, key) {
    throw new Error(`Module "zlib" has been externalized for browser compatibility. Cannot access "zlib.${key}" in client code.`);
  }
});
export {
  __viteBrowserExternal_zlib as default
};
