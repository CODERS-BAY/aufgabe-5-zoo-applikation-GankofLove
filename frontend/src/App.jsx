import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink
} from 'react-router-dom';
import Home from './pages/Home.jsx';
import Tickets from './pages/Shop.jsx';
import Tiere from './pages/Tiere.jsx';
import Pfleger from './pages/Pfleger.jsx';

export default function App() {
    return (
        <Router>
            <div style={{ textAlign: 'center', backgroundColor: '#f0f0f0', minHeight: '100vh' }}>
                <NavLink to="/" end style={{ textDecoration: 'none' }}>
                    <h1 style={{ fontSize: '3em', fontFamily: 'Roboto, sans-serif', cursor: 'pointer', margin: '20px 0', color: '#009879', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>
                        Zoo App
                    </h1>
                </NavLink>

                <div style={{ backgroundColor: 'gray', padding: '10px', borderRadius: '5px', display: 'inline-block', marginTop: '2vh' }}>
                    <NavLink to="/" end style={{ margin: '0 5px', textDecoration: 'none' }} activeClassName="active-link">
                        <button>Home</button>
                    </NavLink>
                    <NavLink to="/tickets" style={{ margin: '0 5px', textDecoration: 'none' }} activeClassName="active-link">
                        <button>Shop</button>
                    </NavLink>
                    <NavLink to="/tiere" style={{ margin: '0 5px', textDecoration: 'none' }} activeClassName="active-link">
                        <button>Tiere</button>
                    </NavLink>
                    <NavLink to="/pfleger" style={{ margin: '0 5px', textDecoration: 'none' }} activeClassName="active-link">
                        <button>Pfleger</button>
                    </NavLink>
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
