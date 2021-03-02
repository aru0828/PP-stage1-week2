def maxProduct(nums):
# 請用你的程式補完這個函式的區塊
    max = 0
    for x in nums:
        xIndex = nums.index(x)
        #當前數字不乘自己 所以索引+1
        for y in range(xIndex+1, len(nums), +1):
            if x*nums[y] > max:
                max = x*nums[y]
    else:
        print(max)


maxProduct([5, 20, 2, 6]) # 得到 120 因為 20 和 6 相乘得到最大值
maxProduct([10, -20, 0, 3]) # 得到 30 因為 10 和 3 相乘得到最大值