import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../assets/jglogo.png";

export default function Navbar() {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{ background: '#c0b8b8' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="#c0b8b8"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" component="div" sx={{ margin: '0 auto' }}>
                <img 
                  src={logo} 
                  alt="Logo" 
                  style={{ width: '7rem', height: 'auto', display: 'block' }}
                />
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="h6" component="p" color="textPrimary" sx={{ mr: 2 }}>
                Hello Guest
              </Typography>
              <Button variant="filled" color="inherit" sx={{ fontWeight: 'bold' }}>Sign In</Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }