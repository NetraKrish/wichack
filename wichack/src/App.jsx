import React from 'react';
import Home from './pages/home';

import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { 
  BrowserRouter, Route, Routes
} from "react-router-dom";




const theme = createTheme({
  palette: {
    primary: {main: '#F76902', contrastText: '#000000' },
    secondary: {main: '#000000' },
  },
  
 
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} /> {/* Replace the element with the page you are testing */}
       
         
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
