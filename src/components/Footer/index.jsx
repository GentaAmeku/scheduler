import React from 'react';
import { Typography } from '../../shared';
import { Container } from './styles';

const CopyRight = () => (
  <Typography color="secondary" textAlign="center" fontSize="14px">
    Copyright © Genta Ameku, 2019 All Rights Reserved.
  </Typography>
);

export const Footer = () => {
  return (
    <Container>
      <CopyRight />
    </Container>
  );
};

export default Footer;
