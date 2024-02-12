import React from 'react';
import './App.css';
import { DiaryNotes } from './DiaryNotes';

export function App() {
    // Supongamos que tienes una lista de notas llamada 'diaryNotes'
    const diaryNotes = [
        { title: 'Nota 1', content: 'Contenido de la nota 1', date: '2024-02-12' },
        { title: 'Nota 2', content: 'Contenido de la nota 2', date: '2024-02-13' },
        { title: 'Nota 3', content: 'Contenido de la nota 3', date: '2024-02-14' },
        { title: 'Nota 4', content: 'Contenido de la nota 4', date: '2024-02-15' },
        // Agrega más notas según sea necesario
    ];

    return (
        <div className="app-container">
            <h1>Diario Corp</h1>
            <DiaryNotes notes={diaryNotes} />
        </div>
    );
}
