const os = require('os');

const user = os.userInfo();
console.log(user);

console.log(`The System uptime is ${os.uptime} seconds`);

const currentOS = {
    name: os.type(),
    release: os.release(),
    mem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(currentOS);