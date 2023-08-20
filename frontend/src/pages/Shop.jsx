import React, { useState, useEffect } from 'react';

function Shop() {
    // Zustand für die Daten der Tabelle
    const [data, setData] = useState({
        Kinder: { Preis: '', ID: '' },
        Erwachsene: { Preis: '', ID: '' },
        Senioren: { Preis: '', ID: '' }
    });

    // Datenbankabfrage hier // fetch??
    useEffect(() => {
        // Beispiel: fetch('/api/tickets').then(...)
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
                    <th style={thStyle}>Tickets</th>
                    <th style={thStyle}>Preis</th>
                    <th style={thStyle}>ID</th>
                </tr>
                </thead>
                <tbody>
                {Object.entries(data).map(([key, value]) => (
                    <tr key={key}>
                        <td style={tdStyle}>{key}</td>
                        <td style={tdStyle}>{value.Preis}</td>
                        <td style={tdStyle}>{value.ID}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Shop;
