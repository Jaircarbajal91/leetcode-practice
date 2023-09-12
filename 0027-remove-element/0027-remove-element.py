class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        count = 0
        i = 0
        while i < len(nums):
            num = nums[i] 
            if num == val:
                nums.pop(i)
            else: 
                count+=1
                i+=1

        return count