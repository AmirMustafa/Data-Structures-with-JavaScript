function addUptoN(n) {
    return (n * (n+1)) / 2;
}

var t1 = performance.now();
addUptoN(100000000);   // function call

var t2 = performance.now();

console.log(`Time elapsed: ${(t2-t1)/1000}`);   // 0.000094 sec