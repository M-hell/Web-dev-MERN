//this for accessing the average function in mod.js
// console.log("this is index.js");
// const average=require("./mod.js");
// console.log(average([10,30]));


//this is for accessing the class that is shared to index.js by mod.js
const mod=require("./mod.js");
console.log(mod.name);
console.log(mod.avg([10,30]));
console.log(mod);
