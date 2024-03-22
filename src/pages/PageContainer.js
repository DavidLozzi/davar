import React from 'react';
import Box from '@mui/material/Box';

const PageContainer = ({ children }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
      sx={{ width: '100%', marginTop: "2vh" }}
    >
      {children}
    </Box>
  );
};

export default PageContainer;
