from typing import List

class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        m = {}
        for i, el in enumerate(nums): 
            rem = target - el
            if rem in m: 
                return [m[rem], i]
            else:
                m[el] = i
        return [-1, -1]

# print(Solution().twoSum([2,7,11,15], 9))