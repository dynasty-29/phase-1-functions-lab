// Code your solution in this file!
function distanceFromHqInBlocks(block){
  const hqblock = 42;
  return Math.abs(block - hqblock);
}

function distanceFromHqInFeet(feet) {
  const blocks = distanceFromHqInBlocks(feet)
  return 264 * blocks;
  
}
function distanceTravelledInFeet(start, dest) {
  const distance = Math.abs(dest - start) * 264;
  return distance;
  
}
function calculatesFarePrice(start, destination) {
  const distanceP = distanceTravelledInFeet(start, destination);

  if (distanceP <= 400) {
    return 0; 
  } 
  else if (distanceP > 400 && distanceP <= 2000) {
    return (distanceP - 400) * 0.02; 
  } 
  else if (distanceP > 2000 && distanceP <= 2500) {
    return 25; 
  } 
  else {
    return 'cannot travel that far'; 
  }
  
}
