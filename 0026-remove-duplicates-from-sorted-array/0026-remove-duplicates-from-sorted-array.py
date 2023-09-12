class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        i = 0
        count = 0
        while i < len(nums) - 1:
            num = nums[i]
            next_num = nums[i + 1]
            if num == next_num:
                count += 1
                nums.pop(i)
            else:
                i += 1
        return len(nums)