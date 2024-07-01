const http = require("http");
var StringDecoder = require("string_decoder").StringDecoder;

const getBody = (req, callback) => {
  const decode = new StringDecoder("utf-8");
  let body = "";
  req.on("data", function (data) {
    body += decode.write(data);
  });
  req.on("end", function () {
    body += decode.end();
    const body1 = decodeURI(body);
    const bodyArray = body1.split("&");
    const resultHash = {};
    bodyArray.forEach((part) => {
      const partArray = part.split("=");
      resultHash[partArray[0]] = partArray[1];
    });
    callback(resultHash);
  });
};

// here, you could declare one or more variables to store what comes back from the form.
let randomNumber = Math.floor(Math.random() * 10) + 1;
let item = `Enter number from 1 to 10 below.`;

const guessNumber = (guess) =>{
  if(guess > randomNumber)
  {
    return 'To big!';
  }
  else if(guess < randomNumber)
  {
    return 'To small!';
  }
  else
  {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    return 'Good job! Let\'s do it again!';
  }
}

// here, you can change the form below to modify the input fields and what is displayed.
// This is just ordinary html with string interpolation.
const form = () => {
  return `
  <body>
  <p>${item}</p>
  <form method="POST">
  <input name="guess" type="number" min="1" max="10"></input>
  <button type="submit">Submit</button>
  </form>
  </body>
  `;
};

const server = http.createServer((req, res) => {
  console.log("req.method is ", req.method);
  console.log("req.url is ", req.url);
  if (req.method === "POST") {
    getBody(req, (body) => {
      console.log("The body of the post is ", body);
      // here, you can add your own logic
      if (body["guess"]) {
        const guess = parseInt(body["guess"], 10);
        if (!isNaN(guess)) {
          item = guessNumber(guess);
        } else {
          item = 'The number is not correct.';
        }
      } else {
        item = "Nothing was entered.";
      }
      // Your code changes would end here
      res.writeHead(303, {
        Location: "/",
      });
      res.end();
    });
  } else {
    res.end(form());
  }
});

server.on("request", (req) => {  
  console.log("event received: ", req.method, req.url);  
});  

server.listen(3000);
console.log("The server is listening on port 3000.");
