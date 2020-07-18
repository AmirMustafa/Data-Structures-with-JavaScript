function addUptoN(n) {
    let total = 0;
    for(i = 0; i < n; i++) {
        total += i
    }
return total;
}

var t1 = performance.now();

addUptoN(10000000000);   // function call

var t2 = performance.now();

console.log(`Time elapsed: ${(t2-t1)/1000}`);   // 0.22 sec