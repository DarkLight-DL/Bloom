import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import pic1 from '../assets/pic1.webp';

import video1 from '../assets/video.gif';



const Hero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'rgba(139, 137, 137, 0.06)',
        px: { xs: 2, sm: 4, md: 8 },
        py: { xs: 4, sm: 6, md: 8 },
        "&:hover": {
          backgroundColor: 'rgba(139, 137, 137, 0.18)',

        },
      }}
    >
      <Box
        component="img"
        src={pic1}
        alt="Bloom Website Visual"
        sx={{
          position: 'absolute',
          top: '50%',
          bottom: '50%',
          left: '50%',
          height: '95%',
          width: '98%',
          transform: 'translate(-50% , -50%)',
          objectFit: 'cover',
          cursor: 'pointer',
          opacity: '0.40',
          zIndex: -1,
        }}
      />

      <Grid container spacing={5}>
        {/* Text Section */}
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <Box sx={{ ml: { xs: '0', md: '0', lg: '100px' } }}>
            <Typography
              sx={{
                fontSize: { xs: '20px', sm: '20px', md: '25px' },
                ml: { xs: '15px', sm: '5px', md: '0px' },
                fontWeight: 'bold',
                mb: '20px',
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
                  boxShadow: ' 5px 5px 10px black',

                  '&:hover': {
                    backgroundColor: '#cc8400',
                    transform: 'scale(1.1)',

                    boxShadow: ' 5px 5px 10px black',
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
        <Grid size={{ xs: 12, md: 6, lg: 6 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

          <Box
            sx={{
              display: 'flex',
              maxWidth: '450px',
              cursor: 'pointer',
              justifyContent: { xs: 'center' },
              '&:hover': {
                transform: 'scale(1.1)',
              },
            }}
          >
            {/* <img */}
            <Box component='img'
              src={video1}
              alt="Bloom Website Visual"
              style={{
                height: '95%',
                width: '95%',
                cursor: 'pointer',
                objectFit: 'cover',
                boxShadow: ' 5px 5px 10px black',

                '&:hover': {
                  transform: 'scale(1.1)',
                  boxShadow: ' 5px 5px 10px black',
                },
              }}
            />


          </Box>


        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
