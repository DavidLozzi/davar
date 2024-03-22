import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

function SearchCard() {
  return (
    <Card sx={{ width: '100%', maxWidth: 345, margin: 'auto', marginTop: 4 }}>
      <CardActionArea onClick={() => { /* handle search action */ }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Search
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Find your uploaded references and notes.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SearchCard;
