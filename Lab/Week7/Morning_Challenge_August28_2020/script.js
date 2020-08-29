class MorningChallenge  {
  constructor(base,exp) {
    this.base = base;
    this.exp= exp;
    this.firstfunction = function(){
      SecondFunction(this.base,this.exp);
    }

  }
}

function SecondFunction(x,y){
  lastFunctions(x,y)
}
function lastFunctions(base, exp){

let tempBase =parseInt(base);
let tempExp =parseInt(exp);

let result=1;

	for(var i = 0; i < tempExp; ++i)
	{
		result = result * tempBase;
	}
  return result;


}

let MorningChallengeObject = new MorningChallenge()
