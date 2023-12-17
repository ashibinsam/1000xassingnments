/* ## Counter without setInterval

Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.
*/
let time =1;
function oneSec() {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.clear();
            resolve(time++);
        },1000);
    });
}

async function consoleCounter() {
    while(true) {
        console.log(await oneSec());
    }
    
    
}

consoleCounter();






































































//(Hint: setTimeout)