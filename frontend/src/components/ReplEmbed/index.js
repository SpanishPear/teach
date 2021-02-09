import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

const ReplEmbed = ({ link, title }) => {
  return (
    <Box
      height="100%"
      position="relative"
      overflow="hidden"
      width="100%"
      minHeight="600px"
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
        sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"
        allowFullScreen="true"
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        title={title}
      />
    </Box>
  );
};

ReplEmbed.propTypes = {
  link: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default ReplEmbed;
