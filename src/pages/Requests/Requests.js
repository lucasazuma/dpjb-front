import React, { useState } from 'react';
import '../standard.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { useNavigate } from "react-router-dom";

const RegisterAsset = () => {
    const navigate = useNavigate();
    
    function createData(name, username, war_name, created_at, approved_by) {
        return { name, username, war_name, created_at, approved_by };
    }

    const rows = [
        createData('Journalist1', "jor1", "jor1", "26/09/1999", 2),
        createData('Journalist1', "jor1", "jor1", "26/09/1999", 37),
        createData('Journalist1', "jor1","jor1", "26/09/1999", 24),
        createData('Journalist1', "jor1","jor1", "26/09/1999", 67),
        createData('Journalist1', "jor1","jor1", "26/09/1999", 49),
    ];

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell align="center">Nome de usuário</TableCell>
                        <TableCell align="center">Nome de guerra</TableCell>
                        <TableCell align="center">Creado em</TableCell>
                        <TableCell align="center">Aprovado por</TableCell>
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
                            <TableCell align="center">{row.username}</TableCell>
                            <TableCell align="center">{row.war_name}</TableCell>
                            <TableCell align="center">{row.created_at}</TableCell>
                            <TableCell align="center">{row.approved_by}</TableCell>
                            <TableCell align="center"><ArrowOutwardIcon onClick={() => navigate("/ApproveRequest")}/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default RegisterAsset;
