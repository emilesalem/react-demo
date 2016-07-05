import React from 'react';
import Note from './Note';
import Editable from './Editable'
// export default({notes, deleteNote}) => (
//     <ul>{notes.map(note => <li key={note.id}>
//             {/*<Note task={note.task} onDelete={deleteNote.bind(null, note.id)}/>*/}
//             <Note>
//                 <span>{task}</span>
//                 <button onClick={onDelete.bind(null, id)}>x</button>
//             </Note>
//         </li>)}
//     </ul>
// )

export default({
    notes,
    onNoteClick = () => {},
    onEdit = () => {},
    onDelete = () => {}
}) => (
    <ul>
        {notes.map(({id, editing, task}) => <li key={id}>
            <Note onClick={onNoteClick.bind(null, id)}>
                <Editable editing={editing} value={task} onEdit={onEdit.bind(null, id)}/>
                <button onClick={onDelete.bind(null, id)}>x</button>
            </Note>
        </li>)}
    </ul>
)
