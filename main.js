const Population = require('./ga/population');

const stringToFind = 'To be or not to be!';
const populationSize = 20;

const population = new Population(stringToFind, populationSize);
population.generate();
