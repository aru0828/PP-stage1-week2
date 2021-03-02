function maxProduct(nums){
    // 請用你的程式補完這個函式的區塊
    let max = 0;
    nums.forEach((x, index) => {
        for(let i = index+1 ; i< nums.length ; i++){  
            product = x * nums[i]  
            if(product > max) max = product
        }
    })
    console.log(max)
    }
    maxProduct([5, 20, 2, 6]); // 得到 120 因為 20 和 6 相乘得到最大值
    maxProduct([10, -20, 0, 3]); // 得到 30 因為 10 和 3 相乘得到最大值

