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
import TextField from '@mui/material/TextField';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import CheckIcon from '@mui/icons-material/Check';

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
    // contact list should only show ui changes
    let [contactList, setContactList] = useState([]);
    let [show, setShow] = useState(true);
    const [contact, setContact] = useState({
        contactName: contactList.contactName,
        phoneNumber: contactList.phoneNumber,
        birthDate: contactList.birthDate,
        address: contactList.address
    });

    useEffect(() => {
        axios.get('http://localhost:5000/contacts').then((allContacts) => {
            setContactList(allContacts.data);
        })
        // triggered by higher variable or http subscription
        // subscribe to database
        // or if the probability of changing while using is very low, execute only once
    }, );

    const deleteContact = async (id) => {
        await axios.delete(`http://localhost:5000/contacts/${id}`).then((allContacts) => {
          setShow(true);
          // set dialogue open true
        })
    };

    const updateContact = async (id) => {
        console.log(id);
        console.log(contact.user_id);
        
        await axios.put(`http://localhost:5000/contacts/${id}`, contact)
        .then((allContacts) => {
            setShow(true);
        })
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
        {/* ternary operator */}
            {
                // if true show contacts
                show === true ? 
                <TableBody>
                {contactList.map((contact, key) =>{
                    return (
                    <StyledTableRow key={key}>
                    <StyledTableCell component="th" scope="row">{contact.contactName}</StyledTableCell>
                    <StyledTableCell align="right">{contact.phoneNumber}</StyledTableCell>
                    <StyledTableCell align="right">{contact.birthDate}</StyledTableCell>
                    <StyledTableCell align="right">{contact.address}</StyledTableCell>
                    <StyledTableCell align="right" >
                        <IconButton aria-label="delete" size='small' onClick={()=> setShow(false, console.log(contact._id))}><ModeEditIcon /></IconButton>
                        <IconButton aria-label="delete" size='small' onClick={() => deleteContact(contact._id)}><DeleteIcon /></IconButton>
                      </StyledTableCell>
                  </StyledTableRow>
                )})}
            </TableBody>
            // else show the below
                : 
                <TableBody>
                {contactList.map((contact, key) =>{
                    return(
                        <StyledTableRow key={key}>
                        <StyledTableCell><TextField label={contact.contactName} component="th" scope="row" onChange={(event) => {setContact({ ...contact, contactName: event.target.value})}}></TextField></StyledTableCell>
                        <StyledTableCell><TextField label={contact.phoneNumber} component="th" scope="row" onChange={(event) => {setContact({ ...contact, phoneNumber: event.target.value})}}></TextField></StyledTableCell>
                        <StyledTableCell><TextField type='date' label={contact.birthDate} component="th" scope="row" onChange={(event) => {setContact({ ...contact, birthDate: event.target.value})}}></TextField></StyledTableCell>
                        <StyledTableCell><TextField label={contact.address} component="th" scope="row" onChange={(event) => {setContact({ ...contact, address: event.target.value})}}></TextField></StyledTableCell>
                        <StyledTableCell align="right" >
                            <IconButton aria-label="delete" size='small' onClick={()=> setShow(true)}><CancelPresentationIcon /></IconButton>
                            <IconButton aria-label="delete" size='small' onClick={() => updateContact(contact._id)}><CheckIcon /></IconButton>
                        </StyledTableCell>
                        </StyledTableRow>
                    )
                })}
                </TableBody>
            }
      </Table>
    </TableContainer>
    </>
  );
}