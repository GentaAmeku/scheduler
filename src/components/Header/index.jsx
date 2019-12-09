import React from 'react';
import { LayoutBox, Container, Typography } from '../../shared';
import { AppBar } from './styles';

export const Header = () => {
  return (
    <AppBar>
      <Container>
        <LayoutBox left minHeight="80px">
          <Typography component="h1" fontSize="21px">
            # ボードゲーム日程決め
          </Typography>
        </LayoutBox>
      </Container>
    </AppBar>
  );
};

export default Header;
