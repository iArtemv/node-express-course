const names = require('./04-names');
const names2 = require('./06-alternative-flavor');
const run = require('./05-utils');

run(names.name1);
run(names.name2);
run(names2.names[0]);
run(names2.names[1]);

require('./07-mind-grenade');
