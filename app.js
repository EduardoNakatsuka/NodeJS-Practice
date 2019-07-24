// const fs = require('fs');

// fs.writeFileSync('notes.txt', 'This file was created by Node.js!');
// fs.appendFileSync('notes.txt', '\nThis file has been edited by Node.js!');

// ______________________________________________________________________________

// const validator = require('validator');
// const getNotes = require('./notes.js');

// const msg = getNotes();

// console.log(msg);

// console.log(validator.isEmail('edward@edward.com'));
// console.log(validator.isURL('https//asdasd'));

// _____________________________________________________________________________
// console.log(process.argv[2]);
// console.log(chalk.bold.inverse.red('Error'));

// const chalk = require('chalk');
// const yargs = require('yargs');
// const command = process.argv[2];

// console.log(process.argv);

// console.log(yargs.argv);

// if (command == 'add') {
//     console.log('Adding note');
// } else if (command == 'remove') {
//     console.log('Removing note');
// }



// _____________________________________________________________________________


// What are people supposed to do with notes app?
// add, remove, read, list...

// Let's use yargs to parse all that...

const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs version
yargs.version('1.1.0');

// Create add command
yargs.command({
    command: 'add',
    describe: 'Adds a new note',
    builder: {
        title: {
            describe: 'Note title',
            demand: true,
            type: 'string',
        },
        body: {
            describe: 'Note body',
            demand: true,
            type: 'string',
        },
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
        // console.log(chalk.green('Title: ' + argv.title + '\nBody: ' + argv.body));
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Removes a note',
    builder: {
        title: {
            describe: 'Note title',
            demand: true,
            type: 'string',
        },
    },
    handler: function (argv) {
        // console.log(chalk.red('Removing the note...'));
        notes.removeNote(argv.title);
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'Lists a note',
    handler: function () {
        console.log(chalk.blue('Listing all notes...'));
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'reads a note',
    handler: function () {
        console.log(chalk.blue('Reading the note...'));
    }
})

// console.log(yargs.argv);
yargs.parse(); // Will parse all the arguments I pass to it...