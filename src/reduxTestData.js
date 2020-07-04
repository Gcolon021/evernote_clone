import { v4 as uuidv4 } from 'uuid';

export const initState = {
    notebooks: [{
        id: `book-${uuidv4()}`,
        title: "Test Note",
        shortcut: false,
        shared: false,
        notes: [{
            id: `note-${uuidv4()}`,
            title: "Test Note",
            text: null,
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
        }]
    }]
}