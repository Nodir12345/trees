function findUnique(nums) {
  let uniqueNum = 0;
  for (let num of nums) {
      uniqueNum ^= num;
  }
  return uniqueNum;
}
const nums1 = [2, 2, 1];
const nums2 = [4, 1, 2, 1, 2];
const nums3 = [1];

console.log(findUnique(nums1)); 
console.log(findUnique(nums2)); 
console.log(findUnique(nums3)); 





