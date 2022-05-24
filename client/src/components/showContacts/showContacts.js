import React, {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function ShowContacts() {
    let [contactList, setContactList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/contacts').then((allContacts) => {
            setContactList(allContacts.data);
        })
    }, []);

    const deleteContact = (id) => {
        axios.delete(`http://localhost:5000/contacts/${id}`).then(() => {
            window.location.reload(false);
        })
    };

    const updateContact = (id) => {
        const newName = prompt("Enter new name or click cancel");
        // const newPhoneNumber = prompt('Enter new phone number or click cancel');
        // const newBirthDate = prompt('Enter new birthdate or click cancel');
        // const newAddress = prompt('Enter new address or click cancel');

        axios.put(`http://localhost:5000/contacts/${id}`, {
            newName: newName
            // newPhoneNumber: newPhoneNumber,
            // newBirthDate: newBirthDate,
            // newAddress: newAddress
        } )
    };



  return (
    <>
    <h4>Contacts</h4>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Phone Number</StyledTableCell>
            <StyledTableCell align="right">Birth Date</StyledTableCell>
            <StyledTableCell align="right">Address</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {contactList.map((contact, key) =>{return (
                <StyledTableRow key={key}>
                <StyledTableCell component="th" scope="row">{contact.contactName}</StyledTableCell>
                <StyledTableCell align="right">{contact.phoneNumber}</StyledTableCell>
                <StyledTableCell align="right">{contact.birthDate}</StyledTableCell>
                <StyledTableCell align="right">{contact.address}</StyledTableCell>
                <StyledTableCell align="right" >
                <IconButton aria-label="delete" size='small' onClick={() => updateContact(contact._id)}><ModeEditIcon /></IconButton>
                    <IconButton aria-label="delete" size='small' onClick={() => deleteContact(contact._id)}><DeleteIcon /></IconButton>
                  </StyledTableCell>
              </StyledTableRow>
            )})}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}