import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

const SlidesEmbed = ({ link }) => {
  return (
    <Box
      height="100%"
      position="relative"
      overflow="hidden"
      width="100%"
      minHeight="400px"
      mt={3}
    >
      <iframe
        src={link}
        frameBorder="1"
        position="absolute"
        top={0}
        left={0}
        bottom={0}
        right={0}
        width="100%"
        height="100%"
        allowFullScreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        title="slides"
      />
    </Box>
  );
};

SlidesEmbed.propTypes = {
  link: PropTypes.string.isRequired,
};

export default SlidesEmbed;
