import React from 'react';
import './App.css';
import { DiaryNote } from './DiaryNote';

export function DiaryNotes(props) {
    const { notes } = props;

    return (
        <div className="diary-notes-container" style={{display: "flex", gap: '20px'}}>
            {notes.map((note, index) => (
                <DiaryNote
                    key={index}
                    title={note.title}
                    content={note.content}
                    date={note.date}
                />
            ))}
        </div>
    );
}
