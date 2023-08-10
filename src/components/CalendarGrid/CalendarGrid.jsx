import moment from 'moment';

import {
  CellWrapper,
  CurrentDay,
  DayWrapper,
  GridWrapper,
  RowInCell,
} from './Calendar.styled';

const CalendarGrid = ({ startDay }) => {
  //   const totalDays = 35;
  const day = startDay.clone().subtract(1, 'day');
  const daysArray = [...Array(42)].map(() => day.add(1, 'day').clone());

  const isCurrentDay = day => moment().isSame(day, 'day');

  return (
    <GridWrapper>
      {daysArray.map(dayItem => (
        <CellWrapper key={dayItem.format('DDMMYYYY')}>
          <RowInCell>
            <DayWrapper>
              {isCurrentDay(dayItem) ? (
                <CurrentDay>{dayItem.format('D')}</CurrentDay>
              ) : (
                dayItem.format('D')
              )}
            </DayWrapper>
          </RowInCell>
        </CellWrapper>
      ))}
    </GridWrapper>
  );
};

export default CalendarGrid;
