var containsDuplicate = function(nums) {
    const set = new Set()
    nums.forEach(num => set.add(num))
    return nums.length !== set.size
}