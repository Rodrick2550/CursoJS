function getFactorialWhileLoop(n){
    
    let result = 1;
    while (n > 1) {
        result = result * n;
        n -= 1;
    }
    console.log(result)
    return result;
}
getFactorialWhileLoop(10);




