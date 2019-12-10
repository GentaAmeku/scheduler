import React from 'react';
import toPairs from 'lodash/toPairs';
import reduce from 'lodash/reduce';
import groupBy from 'lodash/groupBy';
import flatMap from 'lodash/flatMap';
import { Typography, LayoutBox, pipe, toJpDay } from '../../shared';
import { Card } from './styles';

const max = eventGroup =>
  reduce(
    eventGroup,
    (num, [, events]) => (num = num < events.length ? events.length : num),
    0,
  );
const toGroups = events => groupBy(events, 'start');
const filterByMaxLength = eventGroup => {
  const maxLength = max(eventGroup);
  return eventGroup.filter(([, events]) => events.length === maxLength);
};
const flatToDate = eventDays => flatMap(eventDays, ([date]) => date);
const mapToJpDay = eventDays => eventDays.map(toJpDay);
const join = eventDays => eventDays.join('、');
// const mapToName = eventGroup => {
//   return eventGroup.map(([date, events]) => [date, events.map(v => v.name)]);
// };

export const EventDate = ({ events }) => {
  const scheduledDay = pipe(
    toGroups,
    toPairs,
    filterByMaxLength,
    flatToDate,
    mapToJpDay,
    join,
  )(events);
  return (
    <Card>
      <LayoutBox px={2} py={3}>
        <Typography>開催予定日: {scheduledDay}</Typography>
      </LayoutBox>
    </Card>
  );
};

export default EventDate;
