/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
  // create a hash map to count the frequency of each element
  const count = new Map();
  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  // create an array of lists to store the elements with the same frequency
  const buckets = Array.from({ length: nums.length + 1 }, () => []);
  for (const [num, freq] of count) {
    buckets[freq].push(num);
  }

  // concatenate the lists and return the top k elements
  const result = [];
  for (let i = buckets.length - 1; i >= 0 && result.length < k; i--) {
    result.push(...buckets[i]);
  }
  return result;
}