const fs = require('fs');
const {Command} = require('commander');
const program = new Command(); //new command object called program is created

// setting up the basic information for the CLI 

program
    .name('counter') //name of the tool set to counter
    .description('CLI to do file based tasks') //descrip of what the tool does
    .version('0.8.0');

//Define the count command

program.command('count')
    .description('Count the number of the words in a file')
    .argument('<file>','file to count')
    .action((file)=>{
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
              console.log(err);
            } else {
                let words = 0 ;
                for(let i = 0 ; i<data.length;i++){
                    if(data[i]===" "){
                        words++;
                    }
                }
                console.log(`The words are ${words+1} words in the file ${file}`);
            }
          });
    });

    program.command('count_sentence')
    .description('Count the number of the lines in a file')
    .argument('<file>','file to count the number of lines')
    .action((file)=>{
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
              console.log(err);
            } else {
                const lines = data.split(' ').length; //say Saloni Atole => wud stored in array as ["Saloni","Atole"]
                console.log(`There are ${lines} lines in ${file}`);
            }
          });
    });

program.parse();

//There you go you have your own command line interface
