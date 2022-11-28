/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    
    let result = []
    let set = new Set()
    for (let i = 0; i < nums.length; i++) {
        let target = nums[i] * -1
        let storage = {}
        for (let j = i + 1; j < nums.length; j++) {
            let value = target - nums[j];
            if (value in storage) {
                let answer = [nums[i], nums[j], nums[storage[value]]].sort((a, b) => a - b) 
                if (!set.has(answer.toString())) {
                    result.push(answer);    
                }
                set.add(answer.toString())
            }   
            storage[nums[j]] = j;
        }
    }
    
    return result;
};
