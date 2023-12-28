/* ## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
*/
let time =1;
function oneSec(fn) {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.clear();
            fn();
            resolve(time++);
        },1000);
    });
}
modules.exports = {oneSec}

async function consoleCounter() {
    while(true) {
        console.log(await oneSec());
    }
    
    
}

consoleCounter();






































































//(Hint: setTimeout)## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.








































































(Hint: setTimeout)