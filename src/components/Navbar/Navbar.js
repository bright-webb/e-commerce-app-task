import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  useMediaQuery,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Commerce App
          </Typography>
        </div>
        {isMobile ? (
          <Box>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
              <List>
                <ListItem button component={Link} to="/">
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/products">
                  <ListItemText primary="Products" />
                </ListItem>
                <ListItem button component={Link} to="/cart">
                  <ListItemText primary="Cart" />
                </ListItem>
                <Button edge="end" variant="contained" color="primary" size="small" component={Link} to="/register" color="inherit" aria-label="register">
                 Register
               </Button>
               <Button edge="end" variant="contained" color="secondary" size="small" component={Link} to="/login" color="inherit" aria-label="login">
                 Login
               </Button>
              </List>
            </Drawer>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <List sx={{ display: 'flex', gap: '1rem' }}>
              <ListItem button component={Link} to="/">
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button component={Link} to="/products">
                <ListItemText primary="Products" />
              </ListItem>
              <ListItem button component={Link} to="/contact">
                <ListItemText primary="Contact" />
              </ListItem>
              <ListItem button component={Link} to="/cart">
                <ListItemText primary="Cart" />
              </ListItem>
            </List>
            <Box sx={{ marginLeft: 'auto', display: 'flex', gap: '1rem' }}>
              <Button component={Link} to="/register" variant="contained" color="primary">
                Register
              </Button>
              <Button component={Link} to="/login" variant="contained" color="secondary">
                Login
              </Button>
            </Box>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export { Navbar };
