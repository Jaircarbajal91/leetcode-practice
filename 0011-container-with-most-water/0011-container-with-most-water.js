/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let [r, l] = [height.length - 1, 0]
    let maxArea = 0
    while(l < r) {
        const [left, right] = [height[l], height[r]]
        const area = Math.min(left, right) * (r - l);
        maxArea = Math.max(maxArea, area)
        if (left < right) l++
        else if (right <= left) r--;
    }
    return maxArea;
};