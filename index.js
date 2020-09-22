/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge=18;
if (votingAge>=18){
  console.log(true)
};




//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let a=6;
const b=7;

if(b>a){a=a+3};





//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let numNum = "1999";

let int = parseInt(numNum);

console.log(int);
console.log(int + 1);



//Task d: Write a function to multiply a*b 

function multiply(a,b) {
    return a*b
};





/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(a){
    return a*7
};

dogYears(4);



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.
function dogFeeder(lbs,ageYR){

  if(ageYR>=1){
    if(lbs<6){
      return ('Feed your dog ' + lbs*.05 + 'lbs of raw food.');}

     else if(lbs<11 && lbs>=6){
      return 'Feed your dog ' + lbs*.04 + 'lbs of raw food.';}

     else if(lbs<=15 && lbs>=11){return 'Feed your dog ' + lbs*.03 + 'lbs of raw food.';}

     else {

       return ('Feed your dog ' + lbs*.02 + 'lbs of raw food.');}
  }

  else{
    if(ageYR<(4/12)){
      return lbs*.1
      }
    else if (ageYR>=(4/12) && ageYR<7){
      return lbs*.05;
    }
  else{return lbs*.04;}
  };
}
console.log(dogFeeder(14,1));
//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  




/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number




let rock="rock";
let paper="paper";
let scissors="scissors";

function roShamBo(input){
  function aiANS(){
  let computerChoice;
  let aiNum = Math.round(Math.random()*3);

  if (aiNum===1){
    computerChoice === 1;
    return "rock"
  }
  else if(aiNum===2){
    computerChoice === 2;
    return "paper"
  }
  else{
    computerChoice === 3;
    return "scissors"
  };
};

let ai = aiANS();


  if (input == "rock" || input == "paper" || input == "scissors")
  
    {if(input==="rock" && ai=== "rock"){
        return (ai, input, "Tie")
    } 

    else if(input==="rock" && ai==="paper"){
      return ai, input, "Paper beats rock...You lose!"
    }

    else if(input==="rock" && ai==="scissors"){
      return ai, input, "Rock beats scissors...You Win!!"
    }

    else if(input==="paper" && ai==="rock"){
      return ai, input, "Paper beats rock....You Win!!"
    }

    else if(input=="paper" && ai=="paper"){
      return (ai, input, "Tie")
    }

    else if(input=="paper" && ai=="scissors"){
      return ai, input, "Scissors beats paper...You lose!"
    }

    else if(input=="scissors" && ai=="rock"){
      return ai, input, "Rock beats scissors...You lose!"
    }

    else if(input=="scissors" && ai=="paper"){
      return ai, input, "Scissors beats paper...You Win!!"
    }

    else{
      return ai +', '+ input + ', '+"Tie"
    }



  }

  else{

    console.log("Please input 'rock','paper', or 'scissors' with no Caps and no spaces and try again.")
  }
};

console.log(roShamBo(scissors));


  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles 1km=.62371miles

function kmToMiles(km){
  return km + ' kilometers is equal to ' + km*0.62371 +' miles'
};

console.log(kmToMiles(3));



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters 1ft=30.48cm
  
function feetToCm (ft){
  return ft + 'ft = '+ ft*30.48 + "cm"
};

console.log(feetToCm(3));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(startNum){

for(let i=startNum; i>0 ; i--){
  console.log(i + " bottles of soda on the wall, " + i + " bottles of soda, take one down pass it around " + (i-1) + " bottles of soda on the wall`") 
  
}

};

console.log(annoyingSong(3));







/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function grade(points){
  if(points>=90){return "A"}
  else if (points>=80 && points<90){return "B"}
  else if (points>=70 && points<80){return "C"}
  else if (points>=60 && points<70){return"D"}
  else{return "F"}
};

console.log(grade(15));
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt //from a user using the window object;