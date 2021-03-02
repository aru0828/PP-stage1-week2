function maxZeros(nums) {
    // 請用你的程式補完這個函式的區塊
    let num = 0, count = 0, ans = 0;

    for (let i = 0; i < nums.length; i++) {
        //num用來檢查有無出現非0的數字
        num += nums[i]
        count++;

        if (num) {
            if (count > ans) ans = count - 1
            num = 0;
            count = 0;
        }
    }
    count > ans ? console.log(count) : console.log(ans)
    
}

maxZeros([0, 1, 0, 0]) // 得到 2
maxZeros([1, 0, 0, 0, 0, 1, 0, 1, 0, 0]) // 得到 4
maxZeros([1, 1, 1, 1, 1]) // 得到 0
