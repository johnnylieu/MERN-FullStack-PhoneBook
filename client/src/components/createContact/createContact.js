import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@material-ui/core/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import ShowContacts from '../showContacts/showContacts';

export default function CreateContact() {
    const [contact, setContact] = useState({
        contactName: '',
        phoneNumber: '',
        birthDate: '',
        address: ''
    });

    const createContact = () => {
        axios.post('http://localhost:5000/contacts', contact)
        .then(() => {
          ShowContacts.setShow(true);
        })
    };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <h4>Add a Contact</h4>
      <TextField id="filled-basic" type='text' required='required' label="Name" variant="filled" value={contact.contactName} onChange={(event) => {
          setContact({ ...contact, contactName: event.target.value})
      }} />
      <TextField id="filled-basic" label="Phone Number" type='tel' variant="filled" value={contact.phoneNumber} onChange={(event) => {
          setContact({ ...contact, phoneNumber: event.target.value})
      }} />
      <TextField id="filled-basic" type='date' variant="filled" value={contact.birthDate} onChange={(event) => {
          setContact({ ...contact, birthDate: event.target.value})
      }} />
      <TextField id="filled-basic" tpe ='text' label="Address" variant="filled" value={contact.address} onChange={(event) => {
          setContact({ ...contact, address: event.target.value})
      }} />
      <Button variant="contained" onClick={createContact}>
          Save Contact
      </Button>
    </Box>
  );
}