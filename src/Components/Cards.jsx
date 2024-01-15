import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

export default function Cards({product}) {
return (
    <Card>
      <CardContent>
        <CardMedia
        component="img"
        alt={`Image of ${product.item}`}
        height="300"
        image={`https://source.unsplash.com/300x200/?${product.item}`} 
      />
        <Typography variant="h5" component="div" align='left'>
          {product.item}
        </Typography>
        <Typography variant="body2" color="text.secondary" align='left'>
          Price: {product.price}₪ <sub>{product.unit}</sub>
        </Typography>
      </CardContent>
    </Card>
  );
}
