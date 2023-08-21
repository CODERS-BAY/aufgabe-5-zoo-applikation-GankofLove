import React, { useState } from 'react';
import insectsImage from '../assets/insects.jpg';
import hippoImage from '../assets/hippo.jpg';
import giraffeImage from '../assets/giraffe.jpg';
import haiImage from '../assets/hai.jpg';
import tigerImage from '../assets/tiger.jpg';
import bearImage from '../assets/bear.jpg';

function Tiere() {
    const [activeAnimal, setActiveAnimal] = useState(null);

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
            {/* Tiger */}
            <div
                style={animalStyle}
                onClick={() => setActiveAnimal(activeAnimal === 'Tiger' ? null : 'Tiger')}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b0b0b0'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'gray'}
            >
                <div style={textStyle}>Tiger</div>
                <img src={tigerImage} alt="Tiger" style={imageStyle} />
            </div>

            {/* Nilpferd */}
            <div
                style={animalStyle}
                onClick={() => setActiveAnimal(activeAnimal === 'Nilpferd' ? null : 'Nilpferd')}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b0b0b0'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'gray'}
            >
                <div style={textStyle}>Nilpferd</div>
                <img src={hippoImage} alt="Nilpferd" style={imageStyle} />
            </div>

            {/* Hai */}
            <div
                style={animalStyle}
                onClick={() => setActiveAnimal(activeAnimal === 'Hai' ? null : 'Hai')}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b0b0b0'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'gray'}
            >
                <div style={textStyle}>Haie</div>
                <img src={haiImage} alt="Hai" style={imageStyle} />
            </div>

            {/* Giraffe */}
            <div
                style={animalStyle}
                onClick={() => setActiveAnimal(activeAnimal === 'Giraffe' ? null : 'Giraffe')}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b0b0b0'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'gray'}
            >
                <div style={textStyle}>Giraffen</div>
                <img src={giraffeImage} alt="Giraffe" style={imageStyle} />
            </div>

            {/* Bär */}
            <div
                style={animalStyle}
                onClick={() => setActiveAnimal(activeAnimal === 'Bär' ? null : 'Bär')}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b0b0b0'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'gray'}
            >
                <div style={textStyle}>Bären</div>
                <img src={bearImage} alt="Bär" style={imageStyle} />
            </div>

            {/* Insekten */}
            <div
                style={animalStyle}
                onClick={() => setActiveAnimal(activeAnimal === 'Insekten' ? null : 'Insekten')}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b0b0b0'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'gray'}
            >
                <div style={textStyle}>Insekten</div>
                <img src={insectsImage} alt="Insekten" style={imageStyle} />
            </div>

            {activeAnimal === 'Tiger' && (
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
                        <td style={thTdStyle}>Tiger 1</td>
                        <td style={thTdStyle}>5</td>
                    </tr>
                    </tbody>
                </table>
            )}

            {activeAnimal === 'Nilpferd' && (
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
                        <td style={thTdStyle}>Nilpferd 1</td>
                        <td style={thTdStyle}>8</td>
                    </tr>
                    </tbody>
                </table>
            )}

            {activeAnimal === 'Hai' && (
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
                        <td style={thTdStyle}>Hai 1</td>
                        <td style={thTdStyle}>12</td>
                    </tr>
                    </tbody>
                </table>
            )}

            {activeAnimal === 'Giraffe' && (
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
                        <td style={thTdStyle}>Giraffe 1</td>
                        <td style={thTdStyle}>7</td>
                    </tr>
                    </tbody>
                </table>
            )}

            {activeAnimal === 'Bär' && (
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
                        <td style={thTdStyle}>Bär 1</td>
                        <td style={thTdStyle}>10</td>
                    </tr>
                    </tbody>
                </table>
            )}

            {activeAnimal === 'Insekten' && (
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
                        <td style={thTdStyle}>Insekten 1</td>
                        <td style={thTdStyle}>1</td>
                    </tr>
                    </tbody>
                </table>
            )}



            {/* Weitere Bedingungen und Tabellen für die anderen Tiere können hier folgen */}
        </div>
    );
}

export default Tiere;
