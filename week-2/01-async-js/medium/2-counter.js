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
module.exports = { oneSec }








































































//(Hint: setTimeout)