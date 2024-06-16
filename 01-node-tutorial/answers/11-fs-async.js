const { writeFile, appendFile, readFileSync } = require("fs");

console.log("at start");
writeFile('./temporary/fileB.txt', "This is line 1\n", (err, result) => {
  console.log("at point 1");
  if (err) {
    console.log("This error happened: ", err);
  } else {
    // here you write your next line
    appendFile('./temporary/fileB.txt', "This is line 2\n", (err, result) => {
        console.log("at point 2");
        if (err) {
          console.log("This error happened: ", err);
        } else {
          // here you write your next line
          appendFile('./temporary/fileB.txt', "This is line 3\n", (err, result) => {
            console.log("at point 3");
            if (err) {
              console.log("This error happened: ", err);
            } else {
              // here you write your next line
              const fileContent = readFileSync('./temporary/fileB.txt', 'utf8');
              console.log(fileContent);
            }
          });
        }
      });
  }
});
console.log("at end");

