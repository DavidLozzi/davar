import React from 'react';
import Typography from '@mui/material/Typography';
import PageContainer from '../pages/PageContainer';
import UploadCard from '../components/UploadCard';
import SearchCard from '../components/SearchCard';

function Home() {
  return (
    <PageContainer>
      <Typography variant="h1" component="h1" sx={{ width: '100%', textAlign: 'center', mb: 4 }}>
        Scripture Reference App
      </Typography>
      <UploadCard />
      <SearchCard />
    </PageContainer>
  );
}

export default Home;
