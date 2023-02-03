class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        storage = {}
        for str in strs:
            sortedStr = [x for x in str]
            sortedStr.sort()
            sortedStr = "".join(sortedStr)
            if sortedStr in storage:
                storage[sortedStr].append(str)
            else:
                storage[sortedStr] = [str]
        return storage.values()
        