class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        start = 0
        end = len(nums) - 1
        while start < end:
            if nums[start] == target: return start
            if nums[end] == target: return end
            if nums[start] > target:
                return start
            if nums[end] < target: 
                return end + 1
            start += 1
            end -= 1
        if nums[start] == target: return start
        if nums[end] == target: return end
        if nums[start] > target:
            return start
        if nums[end] < target: 
            return end + 1
        return 0