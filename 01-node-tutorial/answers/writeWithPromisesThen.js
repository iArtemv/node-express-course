const { writeFile, readFile, appendFile } = require("fs").promises;

writeFile("./temporary/temp.txt", "first line\n") 
 .then(() => {
    console.log("1");  
    return appendFile("./temporary/temp.txt", "second line\n")
    
 })  
 .then(() => { 
    console.log("2"); 
    return appendFile("./temporary/temp.txt", "third line")
 })
 .then(() => {
    console.log("3");
    return readFile("./temporary/temp.txt", 'utf8');
})
.then((data) => {
    console.log("Content:")
    console.log(data);
})
 .catch((error) => {  
     console.log("An error occurred: ", error)  
 })
 