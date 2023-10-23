import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { AppBar, Toolbar, Typography } from '@mui/material';
import CarList from './components/CarList';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6'>Carshop</Typography>
        </Toolbar>
      </AppBar>
      <CarList />
    </div>
  );
}

export default App;
