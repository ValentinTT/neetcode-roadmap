import collections
from typing import List


class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        myMap = collections.defaultdict(list)
        for word in strs:
            counter = [0] * 26
            a = ord("a")
            for c in word:
                counter[ord(c) - a] += 1
            myMap[tuple(counter)].append(word) 
        return myMap.values()

print(Solution().groupAnagrams(["eat","tea","tan","ate","nat","bat"]))