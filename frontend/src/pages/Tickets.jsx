import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(Zoo, Kinder, Schüler, Erwachsene) {
    return { Zoo, Kinder, Schüler, Erwachsene };
}

const rows = [
    createData('ID', 159, 6.0, 24, 4.0),
    createData('Kinder', 237, 9.0, 37, 4.3),
    createData('Schüler', 262, 16.0, 24, 6.0),
    createData('Erwachsene', 305, 3.7, 67, 4.3),
];

function Tickets() {
    const backgroundStyle = {
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    };

    const textContainerStyle = {
        backgroundColor: 'rgba(44, 44, 44, 0.7)',
        padding: '20px',
        borderRadius: '10px'
    };

    const textStyle = {
        color: 'lightgray',
        textAlign: 'left',
        fontFamily: 'Roboto, sans-serif'
    };

    return (
        <div style={backgroundStyle}>
            <div style={textContainerStyle}>
                <p style={textStyle}>Tickets & Preise</p>

                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Zoo</TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                                <TableCell align="right"></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="right">{}</TableCell>
                                    <TableCell align="right">{}</TableCell>
                                    <TableCell align="right">{}</TableCell>
                                    <TableCell align="right">{row.protein}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    );
}

export default Tickets;
