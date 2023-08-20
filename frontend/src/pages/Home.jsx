import React from 'react';
import lionBackground from '../assets/lion1.jpg';

function Home() {
    const backgroundStyle = {
        backgroundImage: `url(${lionBackground})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',  // Dies zentriert den Text vertikal
        justifyContent: 'center' // Und das zentriert den Text horizontal
    };

    const textContainerStyle = {
        backgroundColor: 'rgba(44, 44, 44, 0.7)', // Dunkelgraues Textfeld mit leichter Transparenz
        padding: '20px',  // Polsterung um den Text herum
        borderRadius: '10px' // Ecken des Textfelds abrunden
    };

    const textStyle = {
        color: 'lightgray',
        textAlign: 'left',
        fontFamily: 'Roboto, sans-serif'  // Schriftart Roboto hinzugefügt
    };

    return (
        <div style={backgroundStyle}>
            <div style={textContainerStyle}>
                <h2 style={textStyle}>Willkommen in der Zoo App</h2>
                <p style={textStyle}>
                    Im Menü findest du alle wichtigen Abfragen zu unseren Tickets, Tieren und weiteres.
                </p>
                <p style={textStyle}>
                    Viel Spaß im Zoo!
                </p>
            </div>
            {/* Andere Inhalte können hier hinzugefügt werden */}
        </div>
    );
}

export default Home;
