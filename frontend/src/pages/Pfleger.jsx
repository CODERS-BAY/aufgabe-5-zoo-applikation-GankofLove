// Importieren der notwendigen Abhängigkeiten
import React from 'react';
import { useState } from 'react';  // useState wird für den Zustand der Komponente verwendet

function Pfleger() {
    // Der Zustand für den Pflegernamen wird initialisiert
    const [name, setName] = useState('');

    // Der Stil für den Text
    const textStyle = {
        fontFamily: 'Roboto, sans-serif',  // Schriftart
        fontSize: '1.2em'  // Schriftgröße
    };

    // Der Stil für das Eingabefeld
    const inputStyle = {
        padding: '10px',  // Innenabstand
        fontSize: '1em'  // Schriftgröße
    };

    // Die Funktion, die aufgerufen wird, wenn sich der Inhalt des Eingabefelds ändert
    const handleNameChange = (event) => {
        setName(event.target.value);  // Der Wert des Eingabefelds wird im Zustand gespeichert
    };

    // Haupt-Render-Funktion der Komponente
    return (
        <div style={{ textAlign: 'center' }}> {/* Zentriert den Inhalt */}
            {/* Textanzeige */}
            <p style={textStyle}>Geben Sie den Namen des Pflegers ein:</p>
            {/* Eingabefeld */}
            <input
                type="text"  // Typ des Eingabefelds
                value={name}  // Der aktuelle Wert des Eingabefelds
                onChange={handleNameChange}  // Funktion, die bei Änderungen aufgerufen wird
                style={inputStyle}  // Anwendung des Stils
                placeholder="Name des Pflegers"  // Platzhaltertext
            />
            {/* Anzeige des eingegebenen Namens */}
            <p style={textStyle}>Der ausgewählte Pfleger ist: {name}</p>
        </div>
    );
}

// Die Komponente wird exportiert, damit sie in anderen Dateien verwendet werden kann
export default Pfleger;
