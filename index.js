//This is the basic logic first understand how to count the words and then proceed to counter.js code
const fs = require("fs");

function main(filename){
    fs.readFile(filename,"utf-8",function(err,data){
        let total = 0 ;
        for(let i = 0 ; i< data.length;i++){
            if(data[i] ===" "){
                total++;    //count the spaces
            }
        }
        console.log("The total no.of count is ")
        console.log((total+1));   // the count of total words would be spaces+1
    })
}

main("a.txt");
