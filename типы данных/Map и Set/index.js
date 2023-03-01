//1
function unique(arr) {
  return [...new Set(arr)]
}

//2
function aclean(arr) {
  return Object.values(arr.reduce((priv,el) => {
    return {...priv, [el.toLowerCase().split("").sort().join("")]: el}
  }, {}))
}

//3
let map = new Map();

map.set('name', 'John');

let keys = [...map.keys()];

keys.push('more');