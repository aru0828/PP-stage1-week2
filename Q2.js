function avg(data){
    // 請用你的程式補完這個函式的區塊
    let sum = 0;
    for(x in data.employees){
        sum += data.employees[x].salary
    }
    console.log(sum / data.count);
    }

avg({
    "count":3,
    "employees":[
    {
    "name":"John",
    "salary":30000
    },
    {
    "name":"Bob",
    "salary":60000
    },
    {
    "name":"Jenny",
    "salary":50000
    }
    ]
}); // 呼叫 avg 函式