/*Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
*/

let time = require('./2-counter.js');

function timeGenerator() {
    const date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}::${date.getSeconds()}`);
    let am = true;
    let hours;
    if(date.getHours()>12) {hours = date.getHours()-12; am = false} else {hours = date.getHours();}
    console.log(`${hours}:${date.getMinutes()}::${date.getSeconds()} ${am?"AM":'PM'}`);
}

(async ()=> {
    while(true) {
        await time.oneSec(timeGenerator);
    }
    
})();

