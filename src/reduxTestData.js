import { v4 as uuidv4 } from 'uuid';

const selectedNoteInfo = {
    bookID: null,
    noteID: null,
    selectedNote: null,
}

const books = [{
    id: `book-${uuidv4()}`,
    title: "Test Notebook 1",
    shortcut: false,
    shared: false,
    notes: [], // list of note id's will determine what notes are in a notebook
}];

const notes = [{
    id: `note-${uuidv4()}`,
    title: "Test Note 1",
    text: '{"blocks":[{"key":"2f39e","text":"This is temp data and will be changed as soon as this section is complete","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":22,"length":24,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    selectionState: null, // DraftJS cursor/selection location
    dateCreated: Date.now(),
    dateLastModified: null,
    favorite: null,
    size: 0,
    shared: false,
    author: null,
    url: null,
    reminder: null,
    tag: [{
        title: "first note",
        shortcut: false,
        count: -1, // Count is equal to number of notes containing this tag
    }]
},
{
    id: `note-${uuidv4()}`,
    title: "Test Note 2",
    text: '{"blocks":[{"key":"2f39e","text":"This is temp data and will be changed as soon as this section is complete note 2","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":22,"length":24,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
    dateCreated: Date.now(),
    dateLastModified: null,
    favorite: null,
    size: 0,
    shared: false,
    author: null,
    url: "",
    reminder: "",
    shortcut: false,
    tag: [{
        title: "second note",
        shortcut: false,
        count: -1, // Count is equal to number of notes containing this tag
    }]
}]

const shortcut = [{
    id: `shortcut-${uuidv4()}`,
    book: false,
    title: "",
}]

const tags = [{
    id: `tag-${uuidv4()}`,
    name: "",
}]

/* 

 Normalize Data by inserting into a hash list with utilizing their IDs

*/

const assignBy = (key) => {
    return (data, item) => {
        data[item[key]] = item;
        return data;
    }
}

const normalizedBooks = books.reduce(assignBy("id"), {});
const normalizedNotes = notes.reduce(assignBy("id"), {});
const normalizedShortcut = shortcut.reduce(assignBy("id"), {});
const normalizedTags = tags.reduce(assignBy("id"), {});

export { 
    normalizedBooks as booksState, 
    normalizedNotes as notesState,
    normalizedShortcut as shortcutState,
    normalizedTags as tagsState,
    selectedNoteInfo
};