def twoSum(nums, target):
# your code here
    for x in nums:
        nowIndex = nums.index(x)
        for y in range(nowIndex+1, len(nums) ,+1):
            if nums[nowIndex] + nums[y] == target:
                return [nowIndex, y]

result=twoSum([2, 11, 7, 15], 9)
print(result) # show [0, 2] because nums[0]+nums[2] is 9
