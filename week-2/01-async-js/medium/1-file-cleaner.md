/*## File cleaner
Read a file, remove all the extra spaces and write it back to the same file.

For example, if the file input was
```
hello     world    my    name   is       raman
```

After the program runs, the output should be

```
hello world my name is raman
```*/

const rd = require('./3-read-from-file');
const wt = require('./4-write-to-file.js')

function removeSpaces(str) {
    
    let strArr = str.split('');
    let spaceState = false;

    for(let index=0; index<strArr.length; index++) {
        //console.log(index);

        if(strArr[index] == ' '){

            if(spaceState) {
                strArr.splice(index,1);
                index--;
                //console.log(strArr);
            }
            else{
                spaceState = true;
            }

        }
        else {
            spaceState = false;
        }

    }
    return strArr.join('');
}



(async ()=> {
    let fileContents;
    console.log('Before cleaning:');

    console.log(fileContents = await rd.readFileApi('/home/shibin/1000xassingnments/week-2/01-async-js/easy/test.txt'),);
    
    await wt.writeFileApi('/home/shibin/1000xassingnments/week-2/01-async-js/easy/test.txt', removeSpaces(fileContents));
    
    console.log('After cleaning:');
    console.log(await rd.readFileApi('/home/shibin/1000xassingnments/week-2/01-async-js/easy/test.txt'));

})();

