/* eslint-disable import/prefer-default-export */

export default (str) => {
  if (typeof str !== 'string') {
    throw new TypeError(`Expected a string, got ${typeof str}`);
  }

  return `Hello ${str}`;
};
