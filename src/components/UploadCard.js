import React from 'react';
import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

function UploadCard() {
  return (
    <Card sx={{ width: '100%', maxWidth: 345, margin: 'auto', marginTop: 4 }}>
      <CardActionArea onClick={() => { /* handle upload action */ }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Upload
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Upload your notes and references.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default UploadCard;
