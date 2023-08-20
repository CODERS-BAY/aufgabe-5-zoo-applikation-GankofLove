import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import Home from './pages/Home.jsx'; // Nehmen Sie an, dass Sie relative Pfade zu den anderen Komponenten haben
import Tickets from './pages/Tickets.jsx';
import Tiere from './pages/Tiere.jsx';
import Pfleger from './pages/Pfleger.jsx';

export default function App() {
    return (
        <Router>
            <div style={{ textAlign: 'center', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
                <h1 style={{ fontFamily: 'Roboto, sans-serif' }}>Zoo App</h1>
                <div style={{ backgroundColor: 'gray', padding: '10px', borderRadius: '5px', display: 'inline-block' }}>
                    <Link to="/" style={{ margin: '0 5px' }}><button>Home</button></Link>
                    <Link to="/tickets" style={{ margin: '0 5px' }}><button>Tickets</button></Link>
                    <Link to="/tiere" style={{ margin: '0 5px' }}><button>Tiere</button></Link>
                    <Link to="/pfleger" style={{ margin: '0 5px' }}><button>Pfleger</button></Link>
                </div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tickets" element={<Tickets />} />
                    <Route path="/tiere" element={<Tiere />} />
                    <Route path="/pfleger" element={<Pfleger />} />
                </Routes>
            </div>
        </Router>
    );
}
