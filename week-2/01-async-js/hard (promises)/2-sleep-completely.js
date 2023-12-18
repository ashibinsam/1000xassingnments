/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    
    return new Promise((resolve)=> {
        const prevTime = Date.now();
        while(Date.now() - prevTime <= milliseconds);  //executes the loop while the time does not exceed the given milliSeconds.
        resolve();

    });
}

module.exports = sleep;
