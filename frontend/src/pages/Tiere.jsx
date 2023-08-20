import React, { useState } from 'react';
import insectsImage from '../assets/insects.jpg';
import hippoImage from '../assets/hippo.jpg';
import giraffeImage from '../assets/giraffe.jpg';
import haiImage from '../assets/hai.jpg';
import tigerImage from '../assets/tiger.jpg';
import bearImage from '../assets/bear.jpg';

function Tiere() {
    const [showTable, setShowTable] = useState(false);

    const animalStyle = {
        display: 'inline-block',
        margin: '20px',
        textAlign: 'center',
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: 'gray',
        borderRadius: '10px',
        padding: '10px',
        border: '2px solid green',
        cursor: 'pointer',
        transition: 'background-color 0.3s'
    };

    const imageStyle = {
        width: '120px',
        height: '120px',
        objectFit: 'cover',
        marginTop: '10px',
        borderRadius: '50%'
    };

    const textStyle = {
        fontSize: '1.2em',
        fontWeight: 'bold'
    };

    const tableStyle = {
        width: '80%',
        margin: '20px auto',
        borderCollapse: 'collapse',
        fontFamily: 'Roboto, sans-serif',
        fontSize: '18px'
    };

    const thTdStyle = {
        border: '1px solid #ddd',
        padding: '8px',
        textAlign: 'center'
    };

    const trStyle = {
        '&:nth-child(even)': {
            backgroundColor: '#f2f2f2'
        }
    };

    return (
        <div style={{ padding: '50px 0', textAlign: 'center' }}>
            <div
                style={animalStyle}
                onClick={() => setShowTable(!showTable)}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b0b0b0'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'gray'}
            >
                <div style={textStyle}>Tiger</div>
                <img src={tigerImage} alt="Tiger" style={imageStyle} />
            </div>
            <div style={animalStyle}>
                <div style={textStyle}>Nilpferd</div>
                <img src={hippoImage} alt="Nilpferd" style={imageStyle} />
            </div>
            <div style={animalStyle}>
                <div style={textStyle}>Haie</div>
                <img src={haiImage} alt="Hai" style={imageStyle} />
            </div>
            <div style={animalStyle}>
                <div style={textStyle}>Giraffen</div>
                <img src={giraffeImage} alt="Giraffe" style={imageStyle} />
            </div>
            <div style={animalStyle}>
                <div style={textStyle}>Bären</div>
                <img src={bearImage} alt="Bär" style={imageStyle} />
            </div>
            <div style={animalStyle}>
                <div style={textStyle}>Insekten</div>
                <img src={insectsImage} alt="Insekten" style={imageStyle} />
            </div>

            {showTable && (
                <table style={tableStyle}>
                    <thead>
                    <tr>
                        <th style={thTdStyle}>ID</th>
                        <th style={thTdStyle}>Name</th>
                        <th style={thTdStyle}>Alter</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr style={trStyle}>
                        <td style={thTdStyle}>1</td>
                        <td style={thTdStyle}>Raoul</td>
                        <td style={thTdStyle}>5</td>
                    </tr>
                    {/* Weitere Zeilen können hinzugefügt werden */}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default Tiere;
