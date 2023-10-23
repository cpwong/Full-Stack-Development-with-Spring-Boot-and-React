import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material';
import { useState } from 'react';

function AddCar(props) {
  const [open, setOpen] = useState(false);
  const [car, setCar] = useState({
    brand: '',
    model: '',
    color: '',
    year: '',
    fuel: '',
    price: '',
  });

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    props.addCar(car);
    handleClose();
  };

  return (
    <div>
      <Button variant='contained' onClick={handleClickOpen}>
        New Car
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Car</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField
              label='Brand'
              name='brand'
              autoFocus
              variant='standard'
              value={car.brand}
              onChange={handleChange}
            />
            <TextField
              label='Model'
              name='model'
              variant='standard'
              value={car.model}
              onChange={handleChange}
            />
            <TextField
              label='Color'
              name='color'
              variant='standard'
              value={car.color}
              onChange={handleChange}
            />
            <TextField
              label='Year'
              name='year'
              variant='standard'
              value={car.year}
              onChange={handleChange}
            />
            <TextField
              label='Price'
              name='price'
              variant='standard'
              value={car.price}
              onChange={handleChange}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AddCar;
