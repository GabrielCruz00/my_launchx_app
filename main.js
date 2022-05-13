const MissionCommander = require('./app/missionCommander.js');

const carlo = new MissionCommander('Carlo');
const rodrigo = new MissionCommander('Rodrigo');
const fernanda = new MissionCommander('Fernanda');

console.log(carlo.name);
console.log(rodrigo.name);
console.log(fernanda.name);