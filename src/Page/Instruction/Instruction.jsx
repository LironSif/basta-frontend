
import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const Instruction = ({ userType }) => {
  // Define video URLs for seller and buyer
  const sellerVideoURL = 'https://example.com/seller-video.mp4';
  const buyerVideoURL = 'https://example.com/buyer-video.mp4';

  // Determine which video URL to use based on the user type
  const videoURL = userType === 'seller' ? sellerVideoURL : buyerVideoURL;

  return (
    <Box
      sx={{
        backgroundColor: userType === 'seller' ? '#b3e0ff' : '#ffc2b3',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        p: { xs: 2, md: 4 },
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          textAlign: 'center',
          borderRadius: 4,
          backgroundColor: 'white',
          padding: 3,
          boxShadow: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Video Display
        </Typography>
        <Typography variant="body1" paragraph>
          {userType === 'seller'
            ? 'Welcome, Seller! Here is the video for sellers:'
            : 'Welcome, Buyer! Here is the video for buyers:'}
        </Typography>

        <div style={{ width: '100%', maxWidth: '800px', margin: 'auto' }}>
          <video controls width="100%" height="auto" style={{ display: 'block', margin: 'auto' }}>
            <source src={videoURL} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </Container>
    </Box>
  );
};

export default Instruction;
