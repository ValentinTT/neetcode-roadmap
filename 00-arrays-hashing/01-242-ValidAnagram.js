/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let counter = new Array(26).fill(0);
  let a = "a".charCodeAt();

  for (let i = 0; i < s.length; i++) {
    counter[s[i].charCodeAt() - a]++;
    counter[t[i].charCodeAt() - a]--;
  }

  for (let i = 0; i < counter.length; i++) {
    if (counter[i] !== 0) return false;
  }
  return true;
};

var alterIsAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let counter = new Array(26).fill(0);
  let a = "a".charCodeAt();

  for (let i = 0; i < s.length; i++) {
    counter[s[i].charCodeAt() - a]++;
    counter[t[i].charCodeAt() - a]--;
  }

  return !counter.some((c) => c !== 0);
};
