class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0: return False
        string_num = str(x)

        start = 0
        end = len(string_num)

        while start < end:
            if string_num[start] != string_num[end - 1]: return False
            start += 1
            end -= 1
        return True