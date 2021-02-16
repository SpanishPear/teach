import { Box } from '@material-ui/core';
import React from 'react';

const NotFoundPage = () => {
  return (
    <Box
      height="100vh"
      width="100vw"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {/* This image is not my own - used for educational purposes only! */}
      <img
        alt="404 page not found"
        src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png"
      />
    </Box>
  );
};

export default NotFoundPage;
