function twoSum(nums, target) {
    // your code here
    
    for(let i = 0 ; i<nums.length-1 ; i++){
        for(let x = i+1; x<nums.length;x++){
            if(nums[i] + nums[x] === target){
                return [i, x]
            }
        }
    }
}

result = twoSum([2, 11, 7, 15], 9)
console.log(result) // show [0, 2] because nums[0]+nums[2] is 9

