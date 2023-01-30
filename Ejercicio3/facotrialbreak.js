function getFactorialWhileLoop(n){
    
    let result = 1;
    while (n > 1) {
        result = result * n;
        n -= 1;
        if (result == 1) {
            break;
            
        }else{
            console.log('holaaa');
        }
    }
    console.log(result)
    
}
getFactorialWhileLoop(10);