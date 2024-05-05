function fn(){
    let a = 4;
    let b = 9;
    debugger;
    return a + b;
}



setInterval(() => {
    fn();
}, 500);