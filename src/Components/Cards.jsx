import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export default function Cards({ title, img, price }) {
return (
    <Card>
      <CardContent>
        <CardMedia
        component="img"
        alt={`Image of ${title}`}
        height="300"
        image={img} 
      />
        <Typography variant="h5" component="div" align='left'>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" align='left'>
          Price: {price}₪ <sub>kg</sub>
        </Typography>
      </CardContent>
    </Card>
  );
}
