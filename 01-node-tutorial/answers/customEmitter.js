const EventEmitter = require('events');
const emitter = new EventEmitter;

emitter.on('message', (msg)=>{
    console.log('Message received:', msg);
    emitter.emit('response', 'Message processed');
});

emitter.on('response', (msg)=>{
    console.log('Resonse received:', msg);
});

emitter.emit('message', 'Hello, World!');

setInterval(()=>{
    emitter.emit('timer', 'hi there');
}, 2000);

emitter.on('timer', (msg) => console.log(msg));

const waitForEvent=()=>{
    return new Promise((resolve)=>{
        emitter.on('happens', (msg)=>resolve(msg));
    });
};

const doWait = async() => {
    const msg = await waitForEvent();
    console.log('We got event, here it is: ', msg);
};

doWait();

emitter.emit('happens', 'Hi!');
