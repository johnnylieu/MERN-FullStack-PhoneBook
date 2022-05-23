import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@material-ui/core/Button';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
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
      <TextField id="filled-basic" label="Name" variant="filled" />
      <TextField id="filled-basic" label="Phone Number" variant="filled" />
      <TextField id="filled-basic" label="Birth Date" variant="filled" />
      <TextField id="filled-basic" label="Address" variant="filled" />
      <Button variant="contained">
          Save Contact
      </Button>
    </Box>
  );
}
