const fs=require('fs');
const json = fs.readFileSync(`${__dirname}LAPTOP STORE/data/data.json`,'utf-8');
const laptopData = JSON.parse(json);
console.log(laptopData); 
 
