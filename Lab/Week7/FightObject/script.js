class Character{
  // the parameters are properties
  constructor(name,height,hair,weight){
    this.name=name;
    this.height=height;
    this.hair=hair;
    this.weight=weight;

  }


  characterDescription(hair,height){
  return `My name is ${this.name} and my ${this.height} and my color ${this.hair} `
  }

  SeondDescription(weight,name){
  return ` and I ${this.weight} and I ${this.name} `
  }



}

let FightObjectGame = new Character("Johnbe",5.8,"black,green",140);
console.log(FightObjectGame.characterDescription());
console.log(FightObjectGame.SeondDescription());
