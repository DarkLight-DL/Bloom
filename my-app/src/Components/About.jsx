import React from 'react';
import { Box, Typography, Grid, Stack } from '@mui/material';

import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import GoogleIcon from '@mui/icons-material/Google';
import TodayIcon from '@mui/icons-material/Today';

const About = () => {
  return (
    <Box>
      <Grid
        container
        sx={{
          p: '50px',
          justifyContent: 'space-around',
          backgroundColor: 'black',
          color: 'white',
          columnGap: 10,
          rowGap: 10,
        }}
      >
        {/* Latest Post Section */}
        <Grid item lg={3} md={3} sm={4} xs={12}>
          <Typography sx={{ fontSize:'15px',fontWeight: 'bold', mb: '20px' }}>
            Latest Post
          </Typography>
          <Box component="ul" sx={{ listStyleType: 'none' }}>
            {['Month one', 'Month two', 'Month three'].map((month, idx) => (
              <Box
                component="li"
                key={idx}
                sx={{
                  mb: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    cursor: 'pointer',
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      color: 'rgb(235, 149, 19)',
                      cursor: 'pointer',
                    },
                  }}
                >
                  <TodayIcon sx={{ fontSize: 30, mr: 1 }} />
                  <Box>
                    <Typography sx={{ fontWeight: 'bold' ,fontSize:'12px'}}>
                      {month} web site info
                    </Typography>
                    <Typography sx={{ fontSize: '12px' }}>
                      Working without any issue
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Grid>

        {/* About Section */}
        {/* <Grid item lg={4} md={3} sm={4} xs={12}>
          <Typography sx={{fontSize:'15px', fontWeight: 'bold', mb: '20px' }}>About</Typography>
          <Typography
            sx={{
              fontSize: { xs: '10px', sm: '14px', md: "13px", lg: '16px' },
              '&:hover': {
                color: 'rgb(235, 149, 19)',
                cursor: 'pointer',
              },
            }}
          >
            Food brings people together, telling stories and celebrating both
            everyday moments and special occasions. Each dish carries meaning,
            reflecting culture, tradition, and identity. Sharing a meal creates bonds,
            memories, and celebrates life’s milestones.
          </Typography>
        </Grid> */}


                <Grid item lg={3} md={3} sm={4} xs={12}>
          <Typography sx={{ fontSize:'15px',fontWeight: 'bold', mb: '20px' }}>
            About
          </Typography>
            <Typography
            sx={{
              fontSize: { xs: '10px', sm: '14px', md: "13px", lg: '16px' },
              '&:hover': {
                color: 'rgb(235, 149, 19)',
                cursor: 'pointer',
              },
            }}
            >


                          Food brings people together, telling stories and celebrating both
            everyday moments and special occasions. Each dish carries meaning,
            reflecting culture, tradition, and identity. Sharing a meal creates bonds,
            memories, and celebrates life’s milestones.


            </Typography>

        </Grid>







        {/* Stay Connected Section */}
        <Grid item lg={3} md={3} sm={4} xs={12}>
          <Typography sx={{ fontSize:'15px',fontWeight: 'bold', mb: '20px' }}>
            Stay Connected
          </Typography>
          <Stack spacing={2}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  color: 'blue',
                  cursor: 'pointer',
                },
              }}
            >
              <FacebookIcon sx={{ mr: 1, color: 'blue' }} />
              Facebook
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  color: 'gray',
                  cursor: 'pointer',
                },
              }}
            >
              <XIcon sx={{ mr: 1 }} />
              X
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  color: 'orange',
                  cursor: 'pointer',
                },
              }}
            >
              <RssFeedIcon sx={{ mr: 1, color: 'orange' }} />
              RSS
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                  color: 'red',
                  cursor: 'pointer',
                },
              }}
            >
              <GoogleIcon sx={{ mr: 1, color: 'rgb(255, 217, 0)' }} />
              Google
            </Box>
          </Stack>
        </Grid>
        
      </Grid>
    </Box>
  );
};

export default About;
