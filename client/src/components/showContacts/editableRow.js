import React from 'react';

function editableRow() {
  return (
    <>
    <tr>
        <td type='text' required='required' label='Name'></td>
        <td type='tel' label='Phone Number'></td>
        <td type='date' label='Birth Date'></td>
        <td type='text' label='Address'></td>
    </tr>
    </>
  )
}

export default editableRow;