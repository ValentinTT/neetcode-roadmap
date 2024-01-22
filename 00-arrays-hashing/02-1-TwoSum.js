/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let s = new Map();
  for (let i = 0; i < nums.length; i++) {
    let rem = target - nums[i];
    if (s.has(rem)) return [i, s.get(rem)];
    else s.set(nums[i], i);
  }
  return [-1, -1];
};
