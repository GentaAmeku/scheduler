import React, { useState, useCallback } from 'react';
import {
  Calendar as ReactBigCalendar,
  momentLocalizer,
} from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/ja';
import some from 'lodash/some';
import trim from 'lodash/trim';
import {
  CalendarStyles,
  Join,
  Cell,
  CellFooter,
  Status,
  EventWrap,
  EventNameCell,
} from './styles';
import { Typography, LayoutBox } from '../../shared';
import { JoinDialog, Toolbar } from '../';

moment.locale('ja');
moment.updateLocale('ja', {
  months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
});

const localizer = momentLocalizer(moment);

const initialEvents = [
  {
    start: new Date(),
    end: new Date(),
    name: 'aadsjfiuhjgiruhusadasdas',
  },
  {
    start: new Date(),
    end: new Date(),
    name: '1',
  },
  {
    start: new Date(),
    end: new Date(),
    name: '2',
  },
  {
    start: new Date(),
    end: new Date(),
    name: '3',
  },
  {
    start: new Date(),
    end: new Date(),
    name: '4',
  },
];

const IGNORE_WEEK_DAYS = ['月', '火', '水', '木'];
const ONLINE = '#33cc33';

const EventWrapper = ({ event }) => {
  return (
    <EventWrap>
      <LayoutBox>
        <Status color={ONLINE} />
      </LayoutBox>
      <EventNameCell>
        <Typography fontSize="14px">{event.name}</Typography>
      </EventNameCell>
    </EventWrap>
  );
};

const renderDateCell = openDialog => ({ value, children }) => {
  const weekDayJp = moment(value).format('ddd');
  const classes = children.props.className;
  const isNoRange = classes.includes('rbc-off-range-bg');
  const isIgnoreDay = IGNORE_WEEK_DAYS.includes(weekDayJp);
  const handleJoin = useCallback(() => openDialog(value), [value]);
  return (
    <Cell className={classes}>
      <CellFooter>
        <Join disabled={isNoRange || isIgnoreDay} onClick={handleJoin}>
          出席
        </Join>
      </CellFooter>
    </Cell>
  );
};

const renderToolbar = events => props => <Toolbar {...{ events, ...props }} />;
const BigCalendar = React.memo(function BigCalendar({ openDialog, events }) {
  return (
    <CalendarStyles y={900}>
      <ReactBigCalendar
        localizer={localizer}
        events={events}
        views={['month']}
        components={{
          toolbar: renderToolbar(events),
          eventWrapper: EventWrapper,
          dateCellWrapper: renderDateCell(openDialog),
        }}
        popup
        messages={{
          showMore: count => `他 ${count} 件`,
        }}
      />
    </CalendarStyles>
  );
});

export const Calendar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [joinDate, setJoinDate] = useState('');
  const [events, setEvents] = useState(initialEvents);
  const openDialog = React.useCallback(value => {
    setJoinDate(value);
    setIsOpen(true);
  }, []);
  const hideDialog = () => setIsOpen(false);
  const handleSubmit = values => {
    const name = trim(values.name);
    if (!some(events, { name })) {
      setEvents([...events, { name, start: joinDate, end: joinDate }]);
    }
    hideDialog();
  };
  return (
    <>
      <BigCalendar {...{ events, openDialog }} />
      <JoinDialog
        {...{ joinDate, isOpen, hideDialog }}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default Calendar;
