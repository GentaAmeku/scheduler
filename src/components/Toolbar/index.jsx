import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import SettingsIcon from '@material-ui/icons/Settings';
import { LayoutBox, Grid, GridItem, Typography } from '../../shared';
import { Button } from './styles';

export const Toolbar = ({ label, onNavigate }) => {
  const handleToday = () => onNavigate('TODAY');
  const handlePrev = () => onNavigate('PREV');
  const handleNext = () => onNavigate('NEXT');
  return (
    <LayoutBox mb={2}>
      <Grid col="160px 1fr 160px">
        <GridItem>
          <Button variant="contained" onClick={handleToday}>
            今日
          </Button>
          <IconButton onClick={handlePrev}>
            <ChevronLeftIcon />
          </IconButton>
          <IconButton onClick={handleNext}>
            <ChevronRightIcon />
          </IconButton>
        </GridItem>
        <LayoutBox center>
          <Typography>{label}</Typography>
        </LayoutBox>
        {/* TODO: 除外する曜日設定 */}
        {/* <LayoutBox right>
          <IconButton>
            <SettingsIcon />
          </IconButton>
        </LayoutBox> */}
      </Grid>
    </LayoutBox>
  );
};

export default Toolbar;
