console.clear()


const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];

function getNames() {
  return weapons.map(item => item.name)
}

function getCountReliableWeapons(durability) {
  return weapons.filter(item => item.durability > durability).length;
}

function hasReliableWeapons(durability) {
  return weapons.some(item => item.durability > durability);

}

function getReliableWeaponsNames(durability) {
  return weapons.filter(item => item.durability > durability).map(item => item.name);
}

function getTotalDamage() {
  return weapons.reduce((prevValue, curValue) => {
    return curValue.attack + prevValue;
  }, 0);
}


function getValuestCountToSumValues(array, count) {
  let counter = 0;
  array.reduce((acc, curValue, index) => {
    acc += curValue
    if(acc < count + curValue) counter = index + 1;
    return acc;
  }, 0)
  return counter;
}