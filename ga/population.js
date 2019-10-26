const Chromosome = require('./chromosome');

class Population {

  constructor(goal, size) {
    this.members = [];
    this.goal = goal;
    this.generationNumber = 0;
    this.generateChromosomes(size);
  }

  generateChromosomes(size) {
    while (size--) {
      const chromosome = new Chromosome();
      chromosome.generateChromosome(this.goal.length);
      this.members.push(chromosome);
    }
  }

  calculateChromosomesAptitud() {
    for (let i = 0; i < this.members.length; i++) {
      this.members[i].calculateCost(this.goal);
    }
  }

  display() {
    console.log('Generation: ' + this.generationNumber);
    for (let i = 0; i < this.members.length; i++) {
      console.log( 'Cost: ' + this.members[i].cost + ' ' + this.members[i].code);
    }    
  }

  hasSuccessAfterMutation() {
    for (let i = 0; i < this.members.length; i++) {
      this.members[i].mutate(0.5);
      this.members[i].calculateCost(this.goal);
      if (this.members[i].code == this.goal) {
        return true;
      }
    }
    return false;
  }

  repeat() {
    this.generationNumber++;
    setTimeout(() => { this.generate() }, 20);  
  }

  selectAndInsertTheTwoFittest() {
    const children = this.members[0].mate(this.members[1]);
    this.members.splice(this.members.length - 2, 2, children[0], children[1]);  
  }

  sort() {
    this.members.sort(function(a, b) {
      return a.cost - b.cost;
    });    
  }

  generate(){
    this.calculateChromosomesAptitud();
    this.sort();
    this.display();
    this.selectAndInsertTheTwoFittest();     
    if(this.hasSuccessAfterMutation()) {
      this.sort();
      this.display();
      return true;
    } 
    this.repeat();
  }

}

module.exports = Population;
