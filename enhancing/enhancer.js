module.exports = {
  success,
  fail,
  repair,
  get,
};

// 1) Take in an item object.
// 2) Increase enhancement score by 1.
// NOTE: If 20, return unchanged.
// NOTE: Enhancement does not affect durability.
function success(item) {
  if (item.enhancement === 20) {
    return { ...item };
  } else {
    item.enhancement++;
    return { ...item };
  }
}

// 1) Take in an item object.
// 2) Reduce durability based on enhancement score.
// NOTE: Reduced by 5 if enhancement is under 15.
// NOTE: Reduced by 10 if enhancement is 15 or more.
// NOTE: Enhancement is also reduced by 1 if score is 16+.
function fail(item) {
  if (item.enhancement < 15){
    item.durability -= 5;
  } else if (item.enhancement >= 15){
    item.durability -= 10;
  } 

  if (item.enhancement >= 16) {
    item.enhancement -=1;
  }
  return { ...item };
}

// 1) Take in an item object. 
// 2) Set the durablitiy of the item to 100. 
// 3) Return the repaired item. 
function repair(item) {
  if (item.durability < 100) {
    item.durability = 100;
  }
  return { ...item };
}

function get(item) {
  return { ...item };
}
