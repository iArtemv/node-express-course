const { writeFile, readFile, appendFile } = require("fs").promises;

readWrite();

async function readWrite(){
    await writer();
    await reader();
}

async function writer(){
    try {
        await writeFile("./temporary/temp.txt", "first line\n");
        await appendFile("./temporary/temp.txt", "second line\n");
        await appendFile("./temporary/temp.txt", "third line");
    } catch (error) {
        console.error("Error occurred while writing", error);
    }
}

async function reader(){
    try {
        const data = await readFile("./temporary/temp.txt", 'utf8');
        console.log(data);
    } catch (error) {
        console.error("Error occurred while reading", error);
   }    
}
