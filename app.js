// console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs'); //yargs is used for using argv so that input on cl is easy for the title and body attributes

const notes_v = require('./notes.js');
const titleOptions = {
    describe: 'Title of the note',
    demand: true,
    alias: 't'
}
const argv = yargs
    .command('add'/*command name*/, 'Add a new note'/*description of command*/, {   //3 arguments
        /*key,value pair where key is property name like title,body and value is another object that lets us specify how that property should work*/
        title: /*options object of title*/{
            /*configuring 3 properties*/
            describe: 'Title of the note',
            demand: true,
            alias: 't'
        },
        body: {
            describe: 'Body of the note',
            demand: true,
            alias: 'b'
        }
    }/*options in the command*/)
    .command('list', 'List all the notes')
    .command('read', 'Reading the note', {
        title: {
            describe: 'Title of the note',
            demand: true,
            alias: 't'
        }
    })
    .command('remove', 'Remove the note', {
        title: titleOptions
    })
    .help()
    .argv;
// console.log("Process argv", process.argv);
// console.log("Yargs argv ", argv);

//process.argv[0] = node.exe location, process.argv[1] = app.js file location
var command = process.argv[2];  //for command to execute node app.js -add or -remove
if (command === "add") {
    var note = notes_v.addNote(argv.title, argv.body);
    if (note) {
        console.log(argv.title);
        console.log('note created');
    }
    else {
        console.log('already exists');
    }
}
else if (command === "list") {
    var allNotes = notes_v.getAll();
    console.log(`Printing ${allNotes.length} notes`);
    allNotes.forEach((note) => notes_v.logNote(note))
}
else if (command === "read") {
    var note = notes_v.getNote(argv.title);
    notes_v.logNote(note);
    if (note) {
        console.log("Note has been read");
    }
    else {
        console.log("note could not be read");

    }
}
else if (command === "remove") {
    var note = notes_v.removeNote(argv.title);
    if (note) {
        console.log("removed");
    }
    else {
        console.log("not removed");
    }

}
else {
    console.log("Command not recognized");
}