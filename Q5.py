def maxZeros(nums):
# 請用你的程式補完這個函式的區塊
    checkNum=0
    count = 0
    ans = 0
    for x in nums:
        checkNum += x 
        count+=1
        if checkNum:
            if count > ans:
                ans = count-1
            count=0
            checkNum=0
       
    if count > ans:
        print(count)
    else:
        print(ans)

maxZeros([0, 1, 0, 0]) # 得到 2
maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0]) # 得到 4
maxZeros([1, 1, 1, 1, 1]) # 得到 0

