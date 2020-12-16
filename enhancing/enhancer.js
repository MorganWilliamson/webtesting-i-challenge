module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  return { ...item };
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
