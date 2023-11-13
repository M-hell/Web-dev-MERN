// loops in js


//for loop
for(let i=0;i<10;i++)
{
    console.log(i);
}
let arr=[56,78,"dnsd",67];
let length=arr.length;

//iterating arrays
for(let j=0;j<length;j++)
{
    console.log(arr[j]);
}

//modern way of iterating through arrays
for(element of arr)
{
    console.log(element);
}

//iterating through objects
let employee={
    name: "chomu",
    'class 2': "lauda",
    class1: 2,
}
for(key in employee)
{
    console.log(key,"=",employee[key]);
}

//while loop
let k=5;
while(k>=0)
{
    console.log(k);
    k--;
}