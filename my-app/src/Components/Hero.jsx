import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import pic1 from '../Asserts/pic1.jpg';

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#e6e6e6',
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, sm: 6, md: 8 },
        "&:hover": {
          backgroundColor: "#f2f2f2",
        },
      }}
    >
      <Grid container spacing={5}>
        {/* Text Section */}
        <Grid item xs={12} md={6} lg={6}>
          <Box sx={{ ml: { xs: '0', md: '0', lg: '100px' } }}>
            <Typography
              sx={{
                fontSize: { xs: '20px', sm: '20px',md:'25px' },
                ml: { xs: '15px', sm: '5px',md:'0px' },
                fontWeight: 'bold',
                mb: '20px',
                // ml: '10px',
              }}
            >
              Bloom
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '14px', sm: '16px' },
                maxWidth: { xs: '100%', md: '450px' },
                mx: { xs: '15px', md: 0 },
                mb: 3,
              }}
            >
              Across the world, food brings people together, tells stories passed down through
              generations, and celebrates both everyday moments and special occasions. From the
              comforting aroma of a home-cooked meal to the bold flavors of global cuisines,
              every dish carries its own meaning.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                justifyContent: { xs: 'center', md: 'flex-start' },
              }}
            >
              <Button
                size="small"
                sx={{
                  color: 'white',
                  backgroundColor: 'orange',
                  px: 3,
                  py: 1.5,
                  width: { xs: 'auto', sm: '150px' },
                  fontSize: '14px',
                  '&:hover': {
                    backgroundColor: '#cc8400',
                  },
                  m: { xs: '20px', md: '20px', lg: '0' },
                  mt: { xs: '20px', md: '20px', lg: '30px' },
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Image Section */}
        <Grid item xs={12} md={6} lg={6}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center' },
            }}
          >
            <img
              src={pic1}
              alt="Bloom Website Visual"
              style={{
                width: '100%',
                maxWidth: '450px',
                height: 'auto',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
