import React from 'react';
import moment from 'moment';
import toPairs from 'lodash/toPairs';
import reduce from 'lodash/reduce';
import groupBy from 'lodash/groupBy';
import isEmpty from 'lodash/isEmpty';
import { Typography, LayoutBox, pipe, toJpDay } from '../../shared';
import { Card } from './styles';

const max = eventGroup =>
  reduce(
    eventGroup,
    (num, [, events]) => (num = num < events.length ? events.length : num),
    0,
  );
const toGroups = events => groupBy(events, 'start');
const filterViewMonth = viewMonth => eventGroup =>
  eventGroup.filter(
    ({ start }) =>
      moment(start).format('YYYY-M') === moment(viewMonth).format('YYYY-M'),
  );
const filterMaxLength = eventGroup => {
  const maxLength = max(eventGroup);
  return eventGroup.filter(([, events]) => events.length === maxLength);
};
const mapToName = eventGroup =>
  eventGroup.map(([date, events]) => [date, events.map(v => v.name)]);

export const EventDate = ({ events, date }) => {
  const scheduledDays = pipe(
    filterViewMonth(date),
    toGroups,
    toPairs,
    filterMaxLength,
    mapToName,
  )(events);
  return (
    <Card>
      <LayoutBox px={2} py={3}>
        {isEmpty(scheduledDays) ? (
          <Typography>
            今月の開催予定がありません。予定が空いている日に「出席」から名前を登録しよう。
          </Typography>
        ) : (
          <>
            <Typography>開催予定日</Typography>
            {scheduledDays.map(([scheduledDate, member], i) => (
              <LayoutBox ml={1} mt={1} key={i} left>
                <Typography fontSize="18px">
                  {toJpDay(scheduledDate)}
                </Typography>
                {member.map((name, i) => (
                  <LayoutBox ml={2} key={name}>
                    <Typography component="span">{name}</Typography>
                    {i !== member.length && (
                      <Typography component="span">,</Typography>
                    )}
                  </LayoutBox>
                ))}
              </LayoutBox>
            ))}
          </>
        )}
      </LayoutBox>
    </Card>
  );
};

export default EventDate;
