import React, { useState } from 'react';
import ProjectForm from '../components/ProjectForm';
import NoteList from '../components/NoteList';

const ProjectCard: React.FC = () => {
  const [projectName, setProjectName] = useState<string>('');
  const [note, setNote] = useState<string>('');
  const [notesList, setNotesList] = useState<{
    id: string;
    title: string;
    content: string;
  }[]>([
    { id: '1', title: 'Why am I doing this?', content: 'Przykładowy długi tekst, który po dojechaniu do krawędzi leci od nowej linijki :D' },
    { id: '2', title: 'Strona jako tako działa', content: 'Założenia projektu zostały spełnione. About też kiedyś będzie działać ' },
    { id: '3', title: 'Jak używać?', content: 'Trzeba wprowadzić tytuł i notatke potem klikamy batona i działa :)' },
  ]);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (projectName && note) {
      const newNote = { id: Date.now().toString(), title: projectName, content: note };
      setNotesList([...notesList, newNote]);
      setProjectName('');
      setNote('');
    }
  };

  const handleDeleteNote = (id: string) => {
    const updatedNotes = notesList.filter((note) => note.id !== id);
    setNotesList(updatedNotes);
  };

  return (
    <div>
      <div>
        <ProjectForm
          projectName={projectName}
          setProjectName={setProjectName}
          note={note}
          setNote={setNote}
          onFormSubmit={handleFormSubmit}
        />
        <NoteList notes={notesList} onDeleteNote={handleDeleteNote} />
      </div>
    </div>
  );
};

export default ProjectCard;
