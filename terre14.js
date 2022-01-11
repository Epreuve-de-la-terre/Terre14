#! node

if (process.argv[2] == undefined) {
  console.log("Veuillez indiquer trois nombres en argument. Ex : terre14.js 24 85 69")
  return
} else if (process.argv.length != 5) {
  console.log("Veuillez indiquer trois nombres en argument. Ex : terre14.js 24 85 69")
  return
}

let arg = [];
let res = [];
arg[0] = parseInt(process.argv[2])
arg[1] = parseInt(process.argv[3])
arg[2] = parseInt(process.argv[4])
res = [arg.shift()]

while (arg.length != 0) {
  if (arg[0] < res[0]) {
    res.unshift(arg.shift())
  } else if (arg[0] > res[0] && arg[0] > res[1]) {
    res.push(arg.shift())
  } else {
    res.splice(1, 0, arg[0])
    arg.shift()
  }
}

console.log(res[1] + " est la valeur au millieu")
