import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PhoneIcon from "@mui/icons-material/Phone";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PersonIcon from "@mui/icons-material/Person";
import logo from "../assets/jglogo.png";
import { keyframes } from "@mui/system";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

import SearchIcon from "@mui/icons-material/Search";

// Definir la animación de vibración con velocidad reducida
const vibrationAnimation = keyframes`
  0% { transform: translate(0, 0); }
  25% { transform: translate(-3px, -3px); }
  50% { transform: translate(3px, 3px); }
  75% { transform: translate(-3px, -3px); }
  100% { transform: translate(0, 0); }
`;
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#c0b8b8",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#f01111",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: "#c0b8b8" }}>
        <Toolbar>
          {/* Botón "Llámanos" sin color de fondo azul y animación */}
          <Button
            size="large"
            color="primary"
            sx={{
              color: "white",
              marginRight: 2,
              "&:hover": { backgroundColor: "darkblue" },
            }}
            startIcon={
              <PhoneIcon
                sx={{ animation: `${vibrationAnimation} 2s infinite` }}
              />
            }
          >
            Llámanos
          </Button>

          {/* Espaciador para separar los botones */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Logo centrado */}
          <Typography
            variant="h6"
            component="div"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ width: "7rem", height: "auto" }}
            />
          </Typography>

          {/* Espaciador para separar los botones */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Botones "Localizar Tienda" y "Sign In" alineados a la derecha */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Button
              size="large"
              variant="contained"
              startIcon={<StorefrontIcon />}
              sx={{
                backgroundColor: "#4CAF50",
                color: "white",
                marginRight: 2,
              }}
            >
              Localizar Tienda
            </Button>
            <Button
              size="large"
              variant="contained"
              startIcon={<PersonIcon />}
              sx={{ backgroundColor: "#2196F3", color: "white" }}
            >
              Sign In
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Secciones debajo del AppBar */}
      <Box>
        {/* Secciones adicionales */}
        <Box
          sx={{
            marginTop: "64px",
            backgroundColor: "#f01111",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px",
            flexWrap: "wrap",
          }}
        >
          <Button
            sx={{
              color: "white",
              border: "none",
              marginRight: 8,
              variant: "outlined",
              "&:hover": { borderColor: "white" },
            }}
          >
            Inicio
          </Button>
          <Button
            sx={{
              color: "white",
              border: "none",
              marginRight: 8,
              variant: "outlined",
              "&:hover": { borderColor: "white" },
            }}
          >
            Productos
          </Button>
          <Button
            sx={{
              color: "white",
              border: "none",
              marginRight: 8,
              variant: "outlined",
              "&:hover": { borderColor: "white" },
            }}
          >
            Servicios
          </Button>
          <Button
            sx={{
              color: "white",
              border: "none",
              marginRight: 8,
              variant: "outlined",
              "&:hover": { borderColor: "white" },
            }}
          >
            Nosotros
          </Button>
          <Button
            sx={{
              color: "white",
              border: "none",
              variant: "outlined",
              "&:hover": { borderColor: "white" },
            }}
          >
            Contacto
          </Button>
        </Box>

        {/* Barra de búsqueda */}
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Buscar un producto"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <IconButton aria-label="show cart items" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartIcon
                  fontSize="large"
                  color="primary"
                ></ShoppingCartIcon>
              </Badge>
            </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;