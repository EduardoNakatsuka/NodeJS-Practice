const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your notes...';
}

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => {
        return note.title === title;
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        console.log(chalk.inverse.green('New note added!'));
    } else {
        console.log(chalk.inverse.red('Title already taken!'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);

    fs.writeFileSync('notes.json', dataJSON);
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (error) {
        return [];
    }
}

const removeNote = (title) => {
    // const notes = loadNotes();
    // const filteredNotes = notes.map((note, key) => {
    //     if (note.title === title) {
    //         notes.splice(notes[key]);
    //     }
    // });
    // if (notes.title === title)

    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => {
        return note.title !== title;
    });

    if (notes.length > notesToKeep.length) {
        console.log(chalk.inverse.green('Note removed'));
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.inverse.red('Note not found'));
    }
}

// module.exports = getNotes;
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
}