import React, { useState, useCallback } from 'react';
import {
  Calendar as ReactBigCalendar,
  momentLocalizer,
} from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/ja';
import some from 'lodash/some';
import trim from 'lodash/trim';
import filter from 'lodash/filter';
import IconButton from '@material-ui/core/IconButton';
import {
  CalendarStyles,
  Join,
  Cell,
  CellFooter,
  Status,
  EventWrap,
  EventNameCell,
  Delete,
} from './styles';
import {
  Typography,
  LayoutBox,
  useSession,
  useDialog,
  useEvents,
} from '../../shared';
import { JoinDialog, DeleteDialog, Toolbar } from '../';

moment.locale('ja');
moment.updateLocale('ja', {
  months: '1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),
});

const localizer = momentLocalizer(moment);

const IGNORE_WEEK_DAYS = ['月', '火', '水', '木'];
const ONLINE = '#33cc33';

const filterViewDay = viewMonth => eventGroup =>
  eventGroup.filter(
    ({ start }) =>
      moment(start).format('YYYY-MM-DD') ===
      moment(viewMonth).format('YYYY-MM-DD'),
  );

const renderEventWrapper = openDeleteDialog => ({ event }) => {
  const { userId } = useSession();
  const handleDeleteButton = useCallback(() => openDeleteDialog(event), [
    event,
  ]);
  return (
    <EventWrap>
      <LayoutBox left>
        <LayoutBox>
          <Status color={ONLINE} />
        </LayoutBox>
        <EventNameCell>
          <Typography fontSize="14px">{event.name}</Typography>
        </EventNameCell>
      </LayoutBox>
      {userId === event.userId && (
        <IconButton onClick={handleDeleteButton} size="small">
          <Delete />
        </IconButton>
      )}
    </EventWrap>
  );
};

const renderDateCell = openJoinDialog => ({ value, children }) => {
  const weekDayJp = moment(value).format('ddd');
  const classes = children.props.className;
  const isNoRange = classes.includes('rbc-off-range-bg');
  const isIgnoreDay = IGNORE_WEEK_DAYS.includes(weekDayJp);
  const handleJoin = useCallback(() => openJoinDialog(value), [value]);
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
const BigCalendar = React.memo(function BigCalendar({
  openJoinDialog,
  openDeleteDialog,
  events,
}) {
  return (
    <CalendarStyles>
      <ReactBigCalendar
        localizer={localizer}
        events={events}
        views={['month']}
        components={{
          toolbar: renderToolbar(events),
          eventWrapper: renderEventWrapper(openDeleteDialog),
          dateCellWrapper: renderDateCell(openJoinDialog),
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
  const [selectedEvent, setSelectedEvent] = useState({ start: '', name: '' });
  // const [events, setEvents] = useState(initialEvents);
  const { events, set } = useEvents();
  const { userId } = useSession();
  const [isJoinDialogOpen, openJoinDialog, hideJoinDialog] = useDialog(start =>
    setSelectedEvent({ start }),
  );
  const [
    isDeleteDialogOpen,
    openDeleteDialog,
    hideDeleteDialog,
  ] = useDialog(event => setSelectedEvent(event));
  const handleSubmit = values => {
    const dayEvent = filterViewDay(selectedEvent.start)(events);
    const name = trim(values.name);
    if (!some(dayEvent, { name })) {
      const values = [
        ...events,
        {
          userId,
          name,
          start: selectedEvent.start,
          end: selectedEvent.start,
        },
      ];
      set({ values });
    }
    hideJoinDialog();
  };
  const handleDelete = () => {
    const values = filter(events, event =>
      event.start === selectedEvent.start && event.name === selectedEvent.name
        ? false
        : true,
    );
    set({ values });
    hideDeleteDialog();
  };
  return (
    <>
      <BigCalendar {...{ events, openJoinDialog, openDeleteDialog }} />
      <JoinDialog
        targetDate={selectedEvent.start}
        isOpen={isJoinDialogOpen}
        hideDialog={hideJoinDialog}
        onSubmit={handleSubmit}
      />
      <DeleteDialog
        targetDate={selectedEvent.start}
        isOpen={isDeleteDialogOpen}
        hideDialog={hideDeleteDialog}
        onSubmit={handleDelete}
      />
    </>
  );
};

export default Calendar;
