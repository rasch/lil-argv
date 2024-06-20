/**
 * @param {string} [args]
 * @returns {Object.<string, string | boolean}
 */
export const argv = (args = process.argv.slice(2).join(" ")) =>
  args
  .split(/\s*-+([\w-]+)[\s=]*/)
  .reduce((acc, c, i, a) => i % 2 ? { ...acc, [c]: a[i + 1] || true } : acc, {})
