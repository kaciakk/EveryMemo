'use client'
import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';

type Props = {
  projectName: string;
  setProjectName: React.Dispatch<React.SetStateAction<string>>;
  note: string;
  setNote: React.Dispatch<React.SetStateAction<string>>;
  onFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const ProjectForm: React.FC<Props> = ({ projectName, setProjectName, note, setNote, onFormSubmit }) => {
  const MAX_TITLE_LENGTH = 20;
  const MAX_NOTE_LENGTH = 250;
  const MAX_NOTE_ROWS = 6; 

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFormSubmit(e);
  };

  const handleProjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProjectName(e.target.value);
  };

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputNote = e.target.value;

    if (inputNote.length <= MAX_NOTE_LENGTH) {
      setNote(inputNote);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="flex items-center flex-col gap-2">
        
      <div>
        <input
          type="text"
          value={projectName}
          onChange={handleProjectNameChange}
          placeholder="Wprowadź nazwę projektu"
          maxLength={MAX_TITLE_LENGTH}
        />
      </div>
      <div className="textarea-container">
        <TextareaAutosize
          value={note}
          onChange={handleNoteChange}
          placeholder="Wprowadź notatkę"
          rows={1}
          maxRows={MAX_NOTE_ROWS} 
        />
      </div>
      <div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Submit
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
