/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let [r, l] = [height.length - 1, 0]
    let maxArea = 0;
    while(l < r) {
        let [left, right] = [height[l], height[r]]
        let area = Math.min(left, right) * (r - l)
        maxArea = Math.max(area, maxArea)
        if (left > right) r--
        else l++
    }
    return maxArea;
};