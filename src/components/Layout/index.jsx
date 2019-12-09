import React from 'react';
import { TypographyStyle, GoogleFont } from 'react-typography';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { GlobalStyle } from '../../shared';
import { LayoutBox, Container, Grid, GridItem, SEO } from '../../shared';
import typography from '../../theme/typography';

const Head = ({ title, description }) => (
  <>
    <GlobalStyle />
    <TypographyStyle typography={typography} />
    <GoogleFont typography={typography} />
    <SEO title={title} description={description} />
  </>
);

export const Layout = ({ children, ...rest }) => {
  return (
    <>
      <Head {...rest} />
      <Header />
      <Container>
        <LayoutBox>
          <Grid col="1fr">
            <GridItem>{children}</GridItem>
          </Grid>
        </LayoutBox>
      </Container>
      <LayoutBox>
        <Footer />
      </LayoutBox>
    </>
  );
};

export default React.memo(Layout);
