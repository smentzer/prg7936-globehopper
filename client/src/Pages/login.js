import React from 'react';
import {
    Box,
    Button,
    TextField,
    Typography
} from '@mui/material';



class LoginPage extends React.Component {
    render() {
        return(

                <Box m={2}  sx={{ justifyContent: 'center' }}>
                    <Typography variant="h4" component="div">
                        Login
                    </Typography>
                    <hr />
                    <Box component={"section"} sx={{ mb: 2 }}>
                        <TextField
                            type="email"
                            label="Email Address"
                           
                            sx={{
                                mr: 2
                            }}
                        />
                        <TextField
                            type="password"
                            label="Password"
                            
                        />
                    </Box>
                    <Button
                    color="inherit"
                       
                    >
                        Login
                    </Button>
                    <Button color="inherit"
                       
                       >
                           Register
                       </Button>
                </Box>
            )}
       
       
  
}


export default LoginPage;