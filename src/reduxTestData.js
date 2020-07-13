import { v4 as uuidv4 } from 'uuid';

export const initState = {
    selectedNoteBook: {
        bookID: null,
        selectedNoteIndex: null,
    },
    notebooks: [{
        id: `book-${uuidv4()}`,
        title: "Test Notebook 1",
        shortcut: false,
        shared: false,
        notes: [{
            id: `note-${uuidv4()}`,
            title: "Test Note 1",
            text: {
                blocks:[{
                    key:"4dcbg",
                    text:"This is just test data and will be changed as the default data at a later date.",
                    type:"unstyled",
                    depth:0,
                    inlineStyleRanges:[{
                        offset:35,
                        length:10,
                        style:"BOLD"
                    }],
                    entityRanges:[],
                    data:{}
                }],
                entityMap:{}
                },
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
            text: {
                blocks:[{
                    key:"4dcbg",
                    text:"This is just test data and will be changed as the default data at a later date.",
                    type:"unstyled",
                    depth:0,
                    inlineStyleRanges:[{
                        offset:35,
                        length:10,
                        style:"BOLD"
                    }],
                    entityRanges:[],
                    data:{}
                }],
                entityMap:{}
                },
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