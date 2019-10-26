class Chromosome {

  constructor(code) {
    this.code = code || '';
    this.cost = 9999;
  }
  
  generateChromosome(size) {
    while (size--) {
      this.code += String.fromCharCode(Math.floor(Math.random() * 255));
    }    
  }

  mutate(chance) {
    if (Math.random() > chance) return;
    const index = Math.floor(Math.random() * this.code.length);
    const upOrDown = Math.random() <= 0.5 ? -1 : 1;
    const newChar = String.fromCharCode(this.code.charCodeAt(index) + upOrDown);
    const newStr = this.code.split('');
    newStr[index] = newChar;
    this.code = newStr.join('');

  }

  mate(chromosome) {
    const pivot = Math.round(this.code.length / 2) - 1;
    const child1 = this.code.substr(0, pivot) + chromosome.code.substr(pivot);
    const child2 = chromosome.code.substr(0, pivot) + this.code.substr(pivot);
    return [new Chromosome(child1), new Chromosome(child2)];
  }

  calculateCost(compareTo) {
    let total = 0;
    for (let i = 0; i < this.code.length; i++) {
      const errorCost = this.code.charCodeAt(i) - compareTo.charCodeAt(i);
      total += errorCost * errorCost;
    }
    this.cost = total;    
  }

}

module.exports = Chromosome;
