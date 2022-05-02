import React, { useState, useEffect } from "react";
import './App.css';
import LoginPage from './Pages/login';
import MyAppBar from './Components/Appbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: "#33DBFF",
      light: "#95ecff",
      dark: "#004a5a"
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
      <MyAppBar/>
    <LoginPage />
    </ThemeProvider>
  );
}

export default App;
