import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Stack, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText, TextField, InputAdornment } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';

const navLinks = ['Home', 'About', 'Services', 'Portfolio', 'Contact us'];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h5" sx={{ my: 0, fontFamily: 'cursive', fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' } }}>
        Bloom
      </Typography>
      <List>
        {navLinks.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center', '&:hover': { backgroundColor: 'gray' } }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              fontFamily: 'cursive',
              fontSize: { xs: '20px', sm: '30px', md: '50px' },
              ml: { xs: '0px', sm: '20px', md: '50px' },
              p: '5px',
            }}
          >
            Bloom
          </Typography>

          {/* Centered Search Box */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' }, justifyContent: 'center' }}>
            <TextField
              variant="outlined"
              size="small"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search"
              sx={{
                backgroundColor: 'white',
                borderRadius: '4px',
                width: '90%',
                '&:hover': { backgroundColor: 'lightgray' },
                fontSize: { xs: '12px', sm: '14px', md: '16px' },
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box flexGrow={1} ml='5px'></Box>

          {/* Desktop Nav */}
          <Stack
            direction="row"
            spacing={1}
            sx={{ display: { xs: 'none', md: 'flex' }, }}
          >
            {navLinks.map((link) => (
              <Button
                key={link}
                color="inherit"
                sx={{
                  fontWeight: 'bold',
                  fontSize: { md: '10px', lg: '15px' },
                  '&:hover': { backgroundColor: 'gray' },
                }}
              >
                {link}
              </Button>
            ))}
          </Stack>

          {/* Mobile Menu Icon */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
