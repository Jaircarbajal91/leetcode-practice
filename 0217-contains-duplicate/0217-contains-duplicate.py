class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        set = {}
        for num in nums:
            if num in set: return True
            set[num] = num
        return False