class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        set = {}
        for i, num in enumerate(nums):
            if target - num in set:
                return [set.get(target - num), i] 
            else:
                set.setdefault(num, i)
        return []