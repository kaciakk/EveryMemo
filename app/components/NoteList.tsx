import React from 'react';

type Note = {
  id: string;
  title: string;
  content: string;
};

type Props = {
  notes: Note[];
  onDeleteNote: (id: string) => void;
};

const NoteList: React.FC<Props> = ({ notes, onDeleteNote }) => {

  const noteGroups = [];
  for (let i = 0; i < notes.length; i += 6) {
    noteGroups.push(notes.slice(i, i + 6));
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {noteGroups.map((group, groupIndex) => (
        <div key={groupIndex} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
          {group.map((note) => (
            <div
              key={note.id}
              style={{
                margin: '15px',
                width: '270px',
                height: '300px',
                padding: '5px',
                border: '2px solid black',
                overflow: 'hidden',
                wordWrap: 'break-word',
                position: 'relative',
              }}
            >
              <h3 style={{ fontWeight: 'bold' }}>{note.title}</h3>
              <p>{note.content}</p>
              <button
                style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  backgroundColor: 'red',
                  color: 'white',
                  padding: '5px 10px',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
                onClick={() => onDeleteNote(note.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default NoteList;
