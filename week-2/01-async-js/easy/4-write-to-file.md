/*## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks. */

fs = require('fs');

function writeFileApi(fileName) {
    return new Promise((resolve)=> {
    fs.appendFile(fileName, ' I am fine thankyou ','utf-8',(err,data)=>{
        resolve(data);
    });
    });
}

async function writeMyFile(fileName) {
    console.log(fs.readFileSync('test.txt','utf8'));
    await writeFileApi('test.txt');
    console.log(fs.readFileSync('test.txt', 'utf-8'));

}

writeMyFile('test.txt');
