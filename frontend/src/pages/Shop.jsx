// Importieren der notwendigen Abhängigkeiten
import React, { useState, useEffect } from 'react';

function Shop() {
    // Initialer Zustand für die Ticketdaten. Diese werden später durch Daten aus der Datenbank ersetzt.
    const [data, setData] = useState({
        Kinder: { Preis: '', ID: '' },
        Erwachsene: { Preis: '', ID: '' },
        Senioren: { Preis: '', ID: '' }
    });

    // useEffect wird genutzt, um Nebeneffekte, wie Datenabfragen, in Funktionen zu handhaben.
    useEffect(() => {
        // Hier Datenbankabfrage einfügen, um die Ticketdaten zu holen.
        // Zum Beispiel: fetch('/api/tickets').then(...)
    }, []); // Die leere Abhängigkeitsliste bedeutet, dass dieser useEffect nur beim ersten Rendern ausgeführt wird.

    // Stil für die Tabelle
    const tableStyle = {
        fontFamily: 'Roboto, sans-serif',
        borderCollapse: 'collapse',
        width: '50%',
        margin: '50px auto',
        boxShadow: '0 0 20px rgba(0,0,0,0.15)'
    };

    // Stil für die Tabellenkopfzeilen
    const thStyle = {
        backgroundColor: '#009879',
        color: '#ffffff',
        padding: '10px',
        textAlign: 'center',
        fontSize: '18px',
        border: '1px solid #dddddd'
    };

    // Stil für die Tabellendatenzellen
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
                    <th style={thStyle}>Tickets</th> {/* Überschrift für die Tickets-Spalte */}
                    <th style={thStyle}>Preis</th> {/* Überschrift für die Preis-Spalte */}
                    <th style={thStyle}>ID</th> {/* Überschrift für die ID-Spalte */}
                </tr>
                </thead>
                <tbody>
                {
                    // Für jedes Ticket im "data"-Zustand wird eine Zeile in der Tabelle erzeugt.
                    Object.entries(data).map(([key, value]) => (
                        <tr key={key}>
                            <td style={tdStyle}>{key}</td> {/* Datenzeile für den Ticketnamen */}
                            <td style={tdStyle}>{value.Preis}</td> {/* Datenzeile für den Ticketpreis */}
                            <td style={tdStyle}>{value.ID}</td> {/* Datenzeile für die Ticket-ID */}
                        </tr>
                    ))
                }
                </tbody>
            </table>

            {/* Hinzugefügte Kassierer-Tabelle */}
            <table style={tableStyle}>
                <thead>
                <tr>
                    <th style={thStyle}>Kassierer</th>
                    <th style={thStyle}>Ticket ID</th>
                    <th style={thStyle}>Verkaufsdatum</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td style={tdStyle}>leer</td>
                    <td style={tdStyle}>leer</td>
                    <td style={tdStyle}>leer</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Shop;
