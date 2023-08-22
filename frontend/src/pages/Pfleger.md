```jsx 

import React, { useState } from 'react';

function Pfleger() {
const [name, setName] = useState('');
const [mitarbeiter, setMitarbeiter] = useState([]);

    const textStyle = {
        fontFamily: 'Roboto, sans-serif',
        fontSize: '1.2em'
    };

    const inputStyle = {
        padding: '10px',
        fontSize: '1em'
    };

    const tableStyle = {
        width: '80%',
        margin: '20px auto',
        borderCollapse: 'collapse'
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
        fetchMitarbeiterData(event.target.value);
    };

    const fetchMitarbeiterData = (query) => {
        // Hier würde normalerweise API-Aufruf zu Backend stehen
        // simulierter API Aufruf
        const simulatedData = [
            { id: 3, name: 'Marie Fischer', position: 'Pfleger' },
            { id: 4, name: 'Klaus Schulz', position: 'Techniker' }
        ];
        setMitarbeiter(simulatedData.filter(m => m.name.includes(query)));
    };

// Tabellen ausgabe??????
    return (
        <div style={{ textAlign: 'center' }}>
            <p style={textStyle}>Geben Sie den Namen des Pflegers ein:</p>
            <input
                type="text"
                value={name}
                onChange={handleNameChange}
                style={inputStyle}
                placeholder="Name des Pflegers"
            />
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Position</th>
                    </tr>
                </thead>
                <tbody>
                    {mitarbeiter.map(m => (
                        <tr key={m.id}>
                            <td>{m.id}</td>
                            <td>{m.name}</td>
                            <td>{m.position}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Pfleger;

``