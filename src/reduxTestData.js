import { v4 as uuidv4 } from 'uuid';

export const initState = {
    selectedNoteInfo: {
        bookIndex: null,
        selectedNoteIndex: null,
        selectedNote: null,
    },
    notebooks: [{
        id: `book-${uuidv4()}`,
        title: "Test Notebook 1",
        shortcut: false,
        shared: false,
        notes: [{
            id: `note-${uuidv4()}`,
            title: "Test Note 1",
            text: '{"blocks":[{"key":"2f39e","text":"This is temp data and will be changed as soon as this section is complete","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":22,"length":24,"style":"BOLD"}],"entityRanges":[],"data":{}}],"entityMap":{}}',
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
        }
    ]
    }]
}