import React from 'react';

function Tiere() {
    const backgroundStyle = {
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',  // Zentriert den Text vertikal
        justifyContent: 'center' // Zentriert den Text horizontal
    };

    const textContainerStyle = {
        backgroundColor: 'rgba(44, 44, 44, 0.7)', // Dunkelgraues Textfeld mit leichter Transparenz
        padding: '20px',  // Polsterung um den Text herum
        borderRadius: '10px' // Ecken des Textfelds abrunden
    };

    const textStyle = {
        color: 'lightgray',
        textAlign: 'left'
    };

    return (
        <div style={backgroundStyle}>
            <div style={textContainerStyle}>
                <p style={textStyle}>Hallo</p>
            </div>
            {/* Andere Inhalte können hier hinzugefügt werden */}
        </div>
    );
}

export default Tiere;
