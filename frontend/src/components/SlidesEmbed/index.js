import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import './index.css';

const SlidesEmbed = ({ link }) => {
  return (
    <Box
      // minHeight="400px"
      mt={3}
      // style={{ overflow: 'hidden', position: 'relative' }}
      className="container"
    >
      <iframe
        className="responsive-iframe"
        src={link}
        frameBorder="1"
        width="560"
        height="315"
        loading="lazy"
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
