import React, { useState, useEffect } from 'react';

function Pfleger() {
    // Zustand für die Daten der Tabelle
    const [data, setData] = useState([
        { ID: '', Name: '', Gehege: '' }
    ]);

    // Datenbankabfrage hier // fetch??
    useEffect(() => {
        // Beispiel: fetch('/api/pfleger').then(...)
        // setData mit dem Ergebnis der Abfrage aktualisieren
    }, []);

    const tableStyle = {
        fontFamily: 'Roboto, sans-serif',
        borderCollapse: 'collapse',
        width: '50%',
        margin: '50px auto',  // Zentriert die Tabelle
        boxShadow: '0 0 20px rgba(0,0,0,0.15)'
    };

    const thStyle = {
        backgroundColor: '#009879',
        color: '#ffffff',
        padding: '10px',
        textAlign: 'center',
        fontSize: '18px',
        border: '1px solid #dddddd'
    };

    const tdStyle = {
        padding: '10px',
        textAlign: 'center',
        fontSize: '16px',
        border: '1px solid #dddddd'
    };

    return (
        <div>
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Tierpfleger</th>
                    <th style={thStyle}>ID</th>
                    <th style={thStyle}>Name</th>
                    <th style={thStyle}>Gehege</th>
                </tr>
                </thead>
                <tbody>
                {data.map((pfleger, index) => (
                    <tr key={index}>
                        <td style={tdStyle}>{pfleger.ID}</td>
                        <td style={tdStyle}>{pfleger.Name}</td>
                        <td style={tdStyle}>{pfleger.Gehege}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Pfleger;
