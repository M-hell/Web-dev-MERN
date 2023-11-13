document.getElementById('id1').innerHTML='changed by js';


//scope
let a="u";
{
    let a="u6";
    console.log(a);
}
console.log(a);

//constant
const b=616;
// we cannot Change value of because its an constant


//conditions
let age=9;
if(age>=18){
    console.log("you can drink");
}
else if(age<18 && age>10)
{
    console.log("u are teen");
}
else{
    console.log("u are kid");
}



//switch
var num=12;
switch(num)
{
    case 13:
        console.log("no");
        break;
    case 12:
        console.log("yes");
        break;
    default:
        console.log("haha");
        break;    
}



//object
let employee={
    name:"ronaldo",
    class:"bitch",
    'channel 2':25,
    channel1:25,
}
console.log(employee);
console.log(employee['name']);
console.log(employee['class']);
console.log(employee['channel 2']);
console.log(employee['channel1']);


//array
let names=[3,2,0,"hi"];
console.log(names[3]);
console.log(names.length);
let names1=new Array(1,2,3,4);
//another way of implementing array
let sortednames=names.sort();//sorts array
console.log(sortednames);
names.push("hello");
console.log(names);     


//functions

function sum1(a,b,c)
{
    let d=a+b+c;
    console.log("summed");
    return d;
}
let a1=23;
let b1=24;
let c1=" hi ";
var functionisreturning=sum1(a1,b1,c1);
console.log(functionisreturning);


// alert prompt confirm
alert("this is a message");
let askname=prompt("whats ur name?","guest"); 
let deletepost=confirm("you really want delete the post?");
if(deletepost==true)
{
    document.getElementById('block').innerHTML='<h2>deleted</h2>';
    console.log("deleted");
}
else
{
    document.getElementById('block').innerHTML='<h2> not deleted</h2>';
    console.log("not deleted");
}