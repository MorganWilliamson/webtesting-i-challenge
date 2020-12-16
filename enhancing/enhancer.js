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
  } 
    const betterItem = repair(item);
    return { ...betterItem, enhancement: betterItem.enhancement + 1 };
}

function fail(item) {
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
