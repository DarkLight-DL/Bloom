import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  CardActionArea,
  CardActions,
  Grid,
} from '@mui/material';

// Image imports
import pic2 from '../assets/pic2.jpg';
import pic3 from '../assets/pic3.jpg';
import pic4 from '../assets/pic4.jpg';
import pic5 from '../assets/pic5.jpg';

import pic6 from '../assets/gif1.gif';
import pic7 from '../assets/gif2.gif';
import pic8 from '../assets/gif3.gif';
import pic9 from '../assets/gif4.gif';

// Data arrays
const cardData = [
  {
    title: 'Butter Chicken',
    description:
      'Butter chicken is a creamy Indian curry made with tender chicken simmered in a spiced tomato and butter-based sauce. It is often enjoyed with naan or rice for a rich, comforting meal.',
    image: pic2,
  },
  {
    title: 'Chicken Biryani',
    description:
      'Chicken biryani is a layered rice dish combining marinated chicken, aromatic spices, and basmati rice. It’s slow-cooked to allow flavors to blend, resulting in a fragrant and satisfying one-pot meal.',
    image: pic3,
  },
  {
    title: 'Egg Pasta',
    description:
      'Egg pasta is a tender, golden-colored noodle made with eggs and flour. It’s common in northern Italian cuisine and works well with sauces like Alfredo, carbonara, or simple garlic and olive oil.',
    image: pic4,
  },
  {
    title: 'Pancake',
    description:
      'Pancakes are soft, flat cakes made from a batter of eggs, flour, and milk. Cooked on a griddle, they are often served with syrup, fruit, or butter as a classic breakfast dish, enjoyed by all ages.',
    image: pic5,
  },
];

const gifData = [pic6, pic7, pic8, pic9];

//  card components
const FoodCard = ({ title, description, image }) => (
  <Card
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'transform 0.3s ease-in-out',
      boxShadow: '5px 5px 10px rgb(10,10,10)',
      '&:hover': {
        boxShadow: '0px 0px 10px rgb(10,10,10)',
        transform: 'scale(1.03)',
      },
    }}
  >
    <CardActionArea>
      <CardMedia component="img" image={image} alt={title} height={'210px'} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button
        size="small"
        aria-label={`Learn more about ${title}`}
        sx={{
          color: 'white',
          backgroundColor: 'orange',
          padding: '10px',
          width: '100%',
          '&:hover': {
            boxShadow: '5px 5px 10px black',
            backgroundColor: '#e69500',
          },
        }}
      >
        Learn More
      </Button>
    </CardActions>
  </Card>
);

const GifCard = ({ image, index }) => (
  <Card
    sx={{
      height: '100%',
      width: '100%',
      objectFit: 'contain',
      boxShadow: '5px 5px 10px rgb(10,10,10)',
      '&:hover': {
        boxShadow: '0px 0px 10px rgb(10,10,10)',
        transform: 'scale(1.03)',
      },
    }}
  >
    <CardActionArea>
      <CardMedia
        component="img"
        image={image}
        alt={`Food gif ${index + 1}`}
        sx={{ height: '210px' }}
      />
    </CardActionArea>
  </Card>
);

// Main component
const Heading = () => {
  return (
    <Box sx={{ boxSizing: 'border-box', backgroundColor: 'white', pb: '50px', px: 2 }}>
      <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 4, m:5,textAlign: 'left' }}>
        Foods
      </Typography>

      {/* GIF Cards */}
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{
          mb: 4,
          p: 2,
          bgcolor: 'rgba(10, 10, 10, 0.05)',
          borderRadius: '10px',
        }}
      >
        {gifData.map((image, index) => (
          <Grid key={index} size={{xs:12, sm:6, md:4, lg:3}}>
            <GifCard image={image} index={index} />
          </Grid>
        ))}
      </Grid>

      {/* Food Info Cards */}
      <Grid container spacing={4} justifyContent="center">
        {cardData.map((card, index) => (
          <Grid key={index}  size={{xs:12, sm:6, md:4, lg:3}}>
            <FoodCard {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Heading;
