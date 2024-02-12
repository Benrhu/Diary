import './DiaryNote.css'

export function DiaryNote(props) {
    return (
        <div className="diary-note" key={props.id}>
            <h2 className="diary-note-title">{props.title}</h2>
            <p className="diary-note-content">{props.content}</p>
            <p className="diary-note-date">{props.date}</p>
        </div>
    );
}