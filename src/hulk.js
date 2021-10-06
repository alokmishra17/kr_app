const arry = [1, 2, 3, 4, 5];
const { performance } = require('perf_hooks');

const dyarry = new Array(100).fill(4);
function find4(arr) {
    let t0 = performance.now();
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === 4)
            console.log('Found 4');
    }
    let t1 = performance.now();
    console.log('time elapsed ' + (t1 - 10));
}

find4(dyarry);
