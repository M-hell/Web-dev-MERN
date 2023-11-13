const fs= require("fs");
let text=fs.readFileSync("text1.txt","utf-8");
text=text.replace("text","hello world");
console.log(text);
fs.writeFileSync("newtext.txt",text);