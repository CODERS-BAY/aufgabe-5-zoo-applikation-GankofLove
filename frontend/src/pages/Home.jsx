// Importieren der notwendigen Abhängigkeiten
import React from 'react';  // Basisbibliothek für React-Komponenten
import lionBackground from '../assets/lion1.jpg';  // Importieren des Löwenhintergrundbildes

function Home() {
    // Hintergrund-Stil, welcher das Löwenbild einbindet
    const backgroundStyle = {
        backgroundImage: `url(${lionBackground})`,  // Setzen des Bildes
        backgroundSize: 'cover',  // Das Bild soll den gesamten Bereich abdecken
        backgroundRepeat: 'no-repeat',  // Das Bild soll nicht wiederholt werden
        backgroundPosition: 'center center',  // Zentrierung des Hintergrundbildes
        minHeight: '100vh',  // Mindesthöhe 100% der Bildschirmhöhe
        width: '100%',  // Breite 100% des Bildschirms
        display: 'flex',  // Flexbox für das Layout
        alignItems: 'center',  // Zentriert den Inhalt vertikal
        justifyContent: 'center'  // Zentriert den Inhalt horizontal
    };

    // Dies definiert den Stil des Textcontainers. Ein leicht transparentes graues Rechteck.
    const textContainerStyle = {
        backgroundColor: 'rgba(44, 44, 44, 0.7)',
        padding: '20px',  // Abstand innen im Container
        borderRadius: '10px'  // Abrunden der Ecken des Containers
    };

    // Dies definiert den Stil des Textes im Container.
    const textStyle = {
        color: 'lightgray',  // Farbe des Textes
        textAlign: 'left',  // Textausrichtung
        fontFamily: 'Roboto, sans-serif'  // Schriftart des Textes
    };

    // Hauptfunktionalität der Komponente, die gerendert wird.
    return (
        // Hier setzen wir den Hintergrund
        <div style={backgroundStyle}>
            {/* Dieser Container hält den Text im Hintergrund */}
            <div style={textContainerStyle}>
                {/* Überschrift */}
                <h2 style={textStyle}>Willkommen in der Zoo App</h2>
                {/* Erster Absatz */}
                <p style={textStyle}>
                    Im Menü findest du alle wichtigen Abfragen zu unseren Tickets, Tieren und weiteres.
                </p>
                {/* Zweiter Absatz */}
                <p style={textStyle}>
                    Viel Spaß im Zoo!
                </p>
            </div>
        </div>
    );
}

// Die Komponente wird exportiert, damit sie in anderen Dateien verwendet werden kann.
export default Home;
