console.log("this mod.js");
function average(arr){
    let sum=0;
    for (Element of arr){
        sum=sum+Element;
    }
    return sum/arr.length;
}
module.exports=average;
// this allows exporting the avg function
module.exports={
    avg: average,
    name: "Samrat",
    repo: "github"
};
module.exports.name="hello world";
// let employee={
//     name: "haha",
//     class: 12
// }
// console.log(employee);
// console.log(employee['name']);
// module.exports=employee;