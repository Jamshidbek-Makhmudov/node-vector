const _ = require('underscore');

const map = {};
const len = 100;
for(let i = 0; i < len; i++) {
    const val = _.random(len);
    map[val]= map[val] ?  map[val]++ : 1;
}
console.log(map)

