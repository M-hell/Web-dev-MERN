// console.log("hello world guys");

// const http = require('http');
 
// const hostname = '127.0.0.1';
// const port = 3000;
 
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
 
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          .container
          {
              border: 2px solid black;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 200px;
              margin: 20px;
          }
          .box{
              border: 2px solid red;
              height: 100px;
              width: 100px;
              display: flex;
              align-items: center;
              justify-content: center;
          }
          /* animations in css */
          .box{
              animation-name: samrat;
              animation-duration: 1s;
              animation-fill-mode: forwards;
              animation-delay: 1s;
              position: relative;
          }
          @keyframes samrat
          {
              from{
                  width: 100px;
                  left: 0px;
                  top: 0px;
              }
              to{
                  width: 200px;
                  left: 100px;
                  top: 40px;
              }
          }
  
          .container2
          {
              border: 2px solid black;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 200px;
              margin: 20px;
          }
          .box2{
              border: 2px solid red;
              height: 100px;
              width: 100px;
              display: flex;
              align-items: center;
              justify-content: center;
          }
          .box2{
              animation-name: samrat2;
              animation-duration: 1s;
              animation-iteration-count: infinite;
              animation-fill-mode: forwards;
          }
          @keyframes samrat2{
              0%{
                  background-color: aqua;
                  font-size: 10px;
                  width: 200px;
              }
              50%{
                  background-color: blue;
                  font-size: 20px;
                  width: 250px;
              }
              100%{
                  background-color: chartreuse;
                  font-size: 30px;
                  width: 300px;
              }
          }
  
          /* transistions in css */
  
          .container3
          {
              border: 2px solid black;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 200px;
              margin: 20px;
          }
          .box3{
              border: 2px solid red;
              height: 100px;
              width: 100px;
              display: flex;
              align-items: center;
              justify-content: center;
          }
          .box3{
              transition-property: background-color;
              transition-duration: 2s;
          }
          .box3:hover{
              background-color: yellow;
          }
          .box3{
              transition-property: all;
              transition-duration: 2s;
          }
          .box3:hover{
              width: 500px;
              font-size: 50px;
          }
  
          /* transform in css */
  
          .container4
          {
              border: 2px solid black;
              display: flex;
              justify-content: center;
              align-items: center;
              height: 200px;
              margin: 20px;
          }
          .box4{
              border: 2px solid red;
              height: 100px;
              width: 100px;
              display: flex;
              align-items: center;
              justify-content: center;
          }
          .box4{
              transition-duration: 2s;
              transition-property: all;
          }
          .box4:hover{
              /* transform: rotate(90deg);
              transform: skew(20deg); */
              transform: scale(2);
          }
      </style>
  </head>
  <body>
      <h1> animations</h1>
      <div class="container">
          <div class="box">
              this a box
          </div>
      </div>
      <div class="container2">
          <div class="box2">
              this a box
          </div>
      </div>
  
  
      <h1>transistions</h1>
      <div class="container3">
          <div class="box3">
              point here
          </div>
      </div>
  
      <h1>transform</h1>
      <div class="container4">
          <div class="box4">
              point here
          </div>
      </div>
  </body>
  </html>`);
});
 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});