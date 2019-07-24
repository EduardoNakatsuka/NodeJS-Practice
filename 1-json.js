// const fs = require('fs');

// const book = {
//     title: 'Senhor de sandara',
//     author: 'Carlos Alberto Gonzales',
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.title);


// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);


// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString(); // We need to toString() it, since it is a buffer data...
// const data = JSON.parse(dataJSON); // Parse into obj...

// console.log(data.title); 


// _________________________________________________

// challenge!

// const fs = require('fs');
// const yargs = require('yargs');

// const fileBuffer = fs.readFileSync('1-json.json');
// const fileJSON = fileBuffer.toString();
// const fileObj = JSON.parse(fileJSON);

// yargs.command({
//     command: 'edit',
//     describe: 'Edits the file',
//     builder: {
//         name: {
//             describe: 'Person name',
//             demand: true,
//             type: 'string',
//         },
//         age: {
//             describe: 'Person age',
//             demand: true,s
//             type: 'integer',
//         },
//     },
//     handler: function (argv) {
//         fileObj.name = argv.name;
//         fileObj.age = argv.age;

//         console.log(argv);
//         // console.log('ué', fileObj);
//     },


// })


