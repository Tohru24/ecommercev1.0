import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function FloatingActionButtons() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab style={{ backgroundColor: 'green' }} aria-label="whatsapp">
        <WhatsAppIcon style={{ color: 'white' }} />
      </Fab>
    </Box>
  );
}
