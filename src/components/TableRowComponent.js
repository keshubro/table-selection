import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import React from 'react';
import '../styles/tableRow.css';
import { useState } from 'react'

function TableRowComponent(props) {
    let selectedData;
    const [selectedId, setSelectedId] = useState(-1);
    function _handleClick() {
        
        if(selectedId === -1) {
            setSelectedId(props.id)
        }
        props.onclick(props);
    }

    return (
        <>
        
        <TableRow
            key={props.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            onClick={_handleClick}
            className='single-row'
            >
            <TableCell component="th" scope="row">
                {props.firstName}
            </TableCell>
            <TableCell onClick={props.onclick} align="center">{props.middleName}</TableCell>
            <TableCell align="center">{props.lastName}</TableCell>
            <TableCell align="center">{props.email}</TableCell>
            
        </TableRow>
        </>
    )
}

export default TableRowComponent
