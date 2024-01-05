import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import logo from "../assets/jglogo.png";
import { keyframes } from '@mui/system';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge, IconButton } from '@mui/material';

// Definir la animación de vibración con velocidad reducida
const vibrationAnimation = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(-3px, -3px); }
  50% { transform: translate(3px, 3px); }
  75% { transform: translate(-3px, -3px); }
  100% { transform: translate(0, 0); }
`;

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: '#c0b8b8' }}>
        <Toolbar>
          {/* Botón "Llámanos" en color azul con texto blanco y animación */}
          <Button
            size="large"
            color="primary"
            sx={{ backgroundColor: 'blue', color: 'white', marginRight: 2, '&:hover': { backgroundColor: 'darkblue' } }}
            startIcon={<PhoneIcon sx={{ animation: `${vibrationAnimation} 2s infinite` }} />}
          >
            Llámanos
          </Button>

          {/* Botón "Chatea con un asesor" en color verde con texto blanco y animación */}
          <Button
            size="large"
            sx={{ backgroundColor: 'green', color: 'white', marginRight: 2, '&:hover': { backgroundColor: 'darkgreen' } }}
            startIcon={<WhatsAppIcon sx={{ animation: `${vibrationAnimation} 2s infinite` }} />}
          >
            Chatea con un asesor
          </Button>

          {/* Espaciador para separar los botones */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Logo centrado */}
          <Typography variant="h6" component="div" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img 
              src={logo} 
              alt="Logo" 
              style={{ width: '7rem', height: 'auto' }}
            />
          </Typography>

          {/* Espaciador para separar los botones */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Botones "Localizar Tienda" y "Sign In" alineados a la derecha */}
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Button
              size="large"
              variant="contained"
              startIcon={<StorefrontIcon />}
              sx={{ backgroundColor: '#4CAF50', color: 'white', marginRight: 2 }}
            >
              Localizar Tienda
            </Button>
            <Button
              size="large"
              variant="contained"
              startIcon={<PersonIcon />}
              sx={{ backgroundColor: '#2196F3', color: 'white' }}
            >
              Sign In
            </Button>
            <IconButton aria-label='show cart items' color='inherit'>
              <Badge badgeContent={2} color='secondary'>
              <ShoppingCartIcon fontSize='large' color='primary'></ShoppingCartIcon>
              </Badge>

            </IconButton>
          
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    
  );
}
