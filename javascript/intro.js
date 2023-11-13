var num1=30;
var num2=20;
console.log(num1+num2)
var str="hello this is string";
console.log(str);
console.log("the sum of num1 and 2 * num2 is "+(num1+(2*num2)))





var string="this is a string";
// we can also use '' to define a string 
var string2=" and a string 2";
console.log(string + string2);
var int=45;
var temp=`this is also a string "${string2}" and ${int} we can also use '' here  `;
console.log(temp);
var len=string.length;
console.log("length is ",len);
console.log("using backslash n operator \n see i used \\n here");
console.log("below is a string type constructor");
var stringconstructor=new String("this is a constructor");
console.log(stringconstructor);
// document.getElementById('aid').innerHTML='<h2>changes using id name in js</h2>';
// document.getElementsByClassName('aclass').innerHTML='<h3>changes using class name in js</h3>';
// document.getElementsByTagName('p').innerHTML='<h3>changes using tag name in js</h3>';





var string17="this is a string";
console.log(string17.indexOf("is"));
console.log(string17.lastIndexOf("is"));
console.log(string17.slice(1,5));
console.log(string17.substring(1,7));
console.log(string17.replace("this","chup"));
console.log(string17.toUpperCase());
console.log(string17.toLowerCase());
console.log(string17.concat(" a new string is concatenated"));
console.log(string17.trim());
console.log(string17.charAt(2));
console.log(string17.charCodeAt(2));