import React from 'react';
import { Typography, Container, Box } from '@mui/material';
import { useNavigate } from 'react-router';

const Instruction = ({ userType }) => {
  // YouTube embed URL for seller and a direct video link for buyer
  const sellerVideoURL = 'https://www.youtube.com/embed/Mw6ny7bOaUs';
  const buyerVideoURL = 'https://example.com/buyer-video.mp4'; // Replace with actual buyer video URL
  const navigate = useNavigate();

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
          {userType === 'seller' ? (
            <iframe
              width="100%"
              height="450"
              src={sellerVideoURL}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Seller Video"
            ></iframe>
          ) : (
            <video controls width="100%" height="auto" style={{ display: 'block', margin: 'auto' }}>
              <source src={buyerVideoURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      </Container>
      <Box onClick={() => navigate(userType === "seller" ? '/preview' : '/shopsList')} style={{ cursor: 'pointer', marginTop: '20px' }}>
        Start
      </Box>
    </Box>
  );
};

export default Instruction;
