var packingList = ["bowls", "plates", "pots", "pans", "eating utensils", "glasses", "cups", "cooking utensils"];

console.log("Things to Pack!")

for(var i = 0; i < packingList.length; i++){
  console.log(packingList[i]);
  if(packingList === "pots"){
    console.log("Dont forget this one");
  }
}