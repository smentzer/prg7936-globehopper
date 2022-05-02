import * as React from 'react';
import AppBar from '@mui/material/AppBar';

import {
  Box,
  Button,
  Toolbar,
  Typography
} from '@mui/material';


export default function MyAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6" component={"div"} sx={{ flexGrow: 1 }}>
            GLOBEHOPPER
          </Typography>
          { <Button color="inherit" >login</Button> }
          { <Button color="inherit" >admin</Button> }
        </Toolbar>
      </AppBar>
    </Box>
  );
}
