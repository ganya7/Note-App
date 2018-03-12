// console.log('Starting notes.js');

const fs = require('fs');
var fetchNotes = () => {
    try {
        var noteString = fs.readFileSync('notes-data.json', 'utf8');
        return JSON.parse(noteString);
    } catch (e) {
        console.log("caught an error no file present");
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body: body
    };
    var duplicateNotes = notes.filter((note) => note.title === title);  //filer will check for title match and if true will add it to duplicateNotes array
    /*var duplicateNotes = notes.filter((note) => {
        console.log("note title: ",note.title)
        console.log("title: ",title)
        return note.title === title;
    }); */  //if an arrow function does has single statement it does not require braces and keyword return

    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
    else {
        console.log('cant add already present');
    }


};

var getAll = () => {
    debugger;
    console.log("Getting all the notes");
    return fetchNotes();
};

var removeNote = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;

};

var getNote = (title) => {
    var notes = fetchNotes();
    var search_note = notes.filter((note) => note.title === title)
    // console.log(search_note.title);
    // console.log(typeof search_note);
    console.log(search_note);
    return search_note[0];
};
var logNote = (note) => {
    debugger;
    console.log('--');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);

}
module.exports = {
    addNote,  //or addNote: addNote
    getAll: getAll,
    removeNote,
    getNote,
    logNote
};