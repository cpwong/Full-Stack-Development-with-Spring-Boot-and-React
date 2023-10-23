import { useState } from 'react'
import './App.css'
import { Container, AppBar, Toolbar, Typography, Stack, List, ListItem, ListItemText } from '@mui/material';
import AddItem from './components/AddItem';


function App() {

  const [items, setItems] = useState([]);
  const addItem = (item) => {
    setItems([item, ...items]);
  }

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">
            Shoppping List
          </Typography>
        </Toolbar>
      </AppBar>
      <Stack alignItems="center">
        <AddItem addItem={addItem} />
        <List>
          {
            items.map((item, index) => 
              <ListItem key={index} divider>
                <ListItemText primary={item.product} secondary={item.amount} />    
              </ListItem>)
          }
        </List>
      </Stack>
        
    </Container>
  )
}

export default App
