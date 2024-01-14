import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function CardItemEditor({ title, img, price, onEdit, onDelete }){
  return (
    <Card>
      <CardContent>
        {/* Card Title */}
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>

        {/* Card Content */}
        <Typography variant="body2" color="text.secondary">
        Price: {price}₪ <sub>kg</sub>
        </Typography>

        {/* Editing Icons */}
        <IconButton color="primary" onClick={onEdit}>
          <EditIcon />
        </IconButton>
        <IconButton color="secondary" onClick={onDelete}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};
