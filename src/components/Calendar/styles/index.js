import styled from 'styled-components';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Button from '@material-ui/core/Button';

export const CalendarStyles = styled.div`
  .rbc {
    &-toolbar {
      padding: 8px 0;
    }
    &-now {
      > a {
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
      box-shadow: 2px 2px 5px 0 rgba(0, 0, 0, 0.2);
      border-radius: 6px;
      height: ${({ y }) => `${y}`}px;
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
  padding: 6px;
  position: absolute;
  width: 100%;
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
  padding: 2px 6px;
`;

export const Join = styled(Button)`
  font-size: 13px;
`;
