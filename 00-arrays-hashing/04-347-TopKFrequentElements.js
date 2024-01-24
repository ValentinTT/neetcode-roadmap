/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let myMap = nums.reduce((acc, curr) => {
    if (acc.has(curr)) acc.set(curr, acc.get(curr) + 1);
    else acc.set(curr, 1);
    return acc;
  }, new Map());

  return [...myMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((v) => v[0]);
};
