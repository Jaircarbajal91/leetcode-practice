class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        w1 = [x for x in s]
        w2 = [x for x in t]
        w1.sort()
        w2.sort()
        print(w1, w2)
        return w1 == w2
        