import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, CardActionArea, CardActions } from '@mui/material';
import pic2 from '../Asserts/pic2.jpg';
import pic3 from '../Asserts/pic3.jpg';
import pic4 from '../Asserts/pic4.jpg';

const cardData = [
  {
    title: 'Butter Chicken',
    description: 'Butter chicken is a rich, creamy curry made with tender chicken cooked in a spiced tomato-based sauce. It’s often paired with naan, a soft, slightly chewy flatbread traditionally baked in a tandoor. ',
    image: pic2,
  },
  {
    title: 'Chicken biryani',
    description: 'flavorful Indian rice dish featuring tender chicken and fragrant basmati rice cooked with a blend of spices and herbs. The dish is typically made by layering marinated chicken.',
    image: pic3,
  },
  {
    title: 'Egg pasta',
    description: 'Egg pasta is a type of pasta made with eggs, typically resulting in a more tender and golden-colored pasta compared to pasta made without eggs.(which is more typical in southern Italian dried pasta).',
    image: pic4,
  },
];

const Heading = () => {
  return (
    <Box sx={{ backgroundColor: 'white', margin: '10px', padding: '50px' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: '30px' }}>
        This is a Heading
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
          justifyContent: 'center',
        }}
      >
        {cardData.map((card, index) => (
          <Card key={index} sx={{ maxWidth: 305 ,minWidth:280 }}>
            <CardActionArea>
              <CardMedia component="img" height="200" image={card.image} alt={card.title} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {card.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {card.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                sx={{
                  color: 'white',
                  backgroundColor: 'orange',
                  padding: '10px',
                  width: '150px',
                  '&:hover': {
                    backgroundColor: '#e69500',
                  },
                }}
              >
                Learn More
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Heading;



