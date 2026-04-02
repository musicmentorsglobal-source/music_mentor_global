exports.handler = async (...args) => {
  const mod = await import("./contact.mjs");
  return mod.handler(...args);
};
