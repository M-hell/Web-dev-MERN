let main=document.getElementById('id1');
console.log(main);
main.innerHTML="<h2>hello</h2>";


let containers=document.getElementsByClassName('container');
console.log(containers);
console.log("by index",containers[0]);
containers[1].innerHTML="<h3>hello bro</h3>"



let another=document.querySelector('.container');
another.innerHTML="<h2>this elon</h2>";

let another1=document.querySelectorAll('#id2>li');
another1[1].innerHTML="hello brother";