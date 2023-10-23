import React, { useState } from 'react'
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

function AddItem(props) {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({
    product: '',
    amount: ''
  });

  const addItem = () => {
    props.addItem(item);
    setItem({product: '', amount: ''})
    handleClose();
  }

  const handleChange = (e) => {
    setItem({...item, [e.target.name]: e.target.value})
  }
  
  const handleOpen = () => {
    setOpen(true);
  }
  
  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>
        Add Item
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Item</DialogTitle>
        <DialogContent>
          <TextField value={item.product} margin="dense" onChange={handleChange} name="product" label="Product" fullWidth />
          <TextField value={item.amount} margin="dense" onChange={handleChange} name="amount" label="Amount" fullWidth />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={addItem}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddItem