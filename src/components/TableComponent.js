import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableRowComponent from './TableRowComponent';
import { Button } from '@mui/material';
import '../App.css';
import { useDetails } from '../contexts/DetailsContext';

function TableComponent() {

    const [selectedData, setSelectedData] = useState({});
    const [isSelectedDataNull, setIsSelectedDataNull] = useState(true);
    const detailsContext = useDetails();

    function _handleRowSelection(data) {
        setSelectedData(data);
        setIsSelectedDataNull(false)
    }

    function _handleValidateClick() {
        detailsContext.handleValidateClick(selectedData)
        window.location.href = '/details'
    }

    function _isSelectedDataNull() {
        const result = selectedData && Object.keys(selectedData).length === 0 ? true : false;
        return result;
    }

    const data = [
        {id: 0, firstName: 'Keshav', middleName: null, lastName: 'Sharma', email: 'keshav1@gmail.com'},
        {id: 1, firstName: 'Madhav', middleName: null, lastName: 'Agrawal', email: 'madhav@gmail.com'},
        {id: 2, firstName: 'Saloni', middleName: null, lastName: 'Sharma', email: 'saloni@gmail.com'},
        {id: 3, firstName: 'Garima', middleName: null, lastName: 'Verma', email: 'garima@gmail.com'},
        {id: 4, firstName: 'Sradha', middleName: 'Suman', lastName: 'Sarangi', email: 'sradha@gmail.com'}
    ];

    return (  
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>First Name</TableCell>
                            <TableCell align="center">Middle Name</TableCell>
                            <TableCell align="center">Last Name</TableCell>
                            <TableCell align="center">Email</TableCell>
                            
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((row) => (
                        <TableRowComponent style={{backgroundColor: 'red'}} onclick={_handleRowSelection} id={row.id} firstName={row.firstName} middleName={row.middleName} lastName={row.lastName} email={row.email} />
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        <Button disabled={isSelectedDataNull} variant="outlined" style={{marginTop: '15px'}} onClick={_handleValidateClick}>Validate</Button>
       </>
    )
}

export default TableComponent
