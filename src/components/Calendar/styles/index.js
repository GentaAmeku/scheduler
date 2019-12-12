import styled from 'styled-components';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Button from '@material-ui/core/Button';
import CloseIcon from '@material-ui/icons/Close';
import theme from '../../../theme';

export const CalendarStyles = styled.div`
  overflow-x: auto;
  padding: 1px;
  .rbc {
    &-calendar {
      width: 1200px;
    }
    &-toolbar {
      padding: 8px 0;
    }
    &-now {
      > a {
        background-color: ${theme.palette.primary};
        color: ${theme.palette.white};
      }
    }
    &-date-cell {
      padding: 6px 0;
      > a {
        border-radius: 50%;
        display: block;
        font-weight: normal;
        margin: 0 auto;
        width: 25px;
      }
    }
    &-today {
      background-color: transparent;
    }
    &-date {
      &-cell {
        text-align: center;
      }
    }
    &-month-view {
      background: #ffffff;
      box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
        0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
      border-radius: 6px;
      height: 960px;
    }
    &-show-more {
      color: #000000;
      font-size: 13px;
      font-weight: bold;
      padding: 0 8px;
      text-decoration: none;
      transition: background-color 100ms linear;
      &:hover {
        background-color: #f1f3f4;
        border-radius: 4px;
      }
    }
  }
`;

export const Cell = styled.div`
  align-items: end;
  flex: 1 1;
  flex-direction: column;
  display: flex;
  position: relative;
`;

export const CellFooter = styled.div`
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  padding: 2px;
  position: absolute;
  width: 100%;
  z-index: 1;
`;

export const ToolBarWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Status = styled.div(
  ({ color }) => `
    background: ${color};
    border-radius: 50%;
    height: 10px;
    width: 10px;
  `,
);

export const EventWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 2px 6px;
`;

export const Join = styled(Button)`
  font-size: 13px;
`;

export const Delete = styled(CloseIcon)`
  font-size: 18px !important;
`;

export const EventNameCell = styled.div`
  margin: 0 0 0 6px;
  overflow: hidden;
  white-space: nowrap;
  > p {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
