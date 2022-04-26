import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import login from './Pages/login';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: "#3719bf",
      light: "#441fed",
      dark: "#2c1596"
    },
  }
});


function App() {
  const [testData, setTestData] = useState(null);

  useEffect(() => {
    fetch("/v1/test")
      .then((res) => res.json())
      .then((data) => setTestData(data.message));
  }, []);

  return (
    <ThemeProvider theme={theme}>
    <login/>
    </ThemeProvider>
  );
}

export default App;
