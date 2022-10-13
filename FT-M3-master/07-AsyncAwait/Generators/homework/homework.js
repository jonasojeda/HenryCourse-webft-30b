function* fizzBuzzGenerator(max=100) { // 100 valor default 
  // Tu código acá:

  if(!max){
    max=Infinity;
  }

  for(let i=1; i<=max; i++){

    if(i%3 == 0 && i%5==0) yield "Fizz Buzz";

    else if(i%3 === 0)yield "Fizz";

    else if(i%5 === 0)yield "Buzz"

    else yield i;
  }
}

module.exports = fizzBuzzGenerator;
