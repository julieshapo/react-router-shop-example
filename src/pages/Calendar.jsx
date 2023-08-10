import CalendarGrid from 'components/CalendarGrid/CalendarGrid';
import CalendarWeekDays from 'components/CalendarWeekDays/CalendarWeekDays';
import CalendarToolBar from 'components/CalendarToolBar/CalendarToolBar';
import moment from 'moment';

import React, { useState } from 'react';

const Calendar = () => {
  moment.updateLocale('en', { week: { dow: 1 } });

  const [currentMonth, setCurrentMonth] = useState(moment());

  const startDay = currentMonth.clone().startOf('month').startOf('week');
  const endDay = moment().endOf('month').endOf('week');

  const calendar = [];
  const day = startDay.clone();

  while (!day.isAfter(endDay)) {
    calendar.push(day.clone());
    day.add(1, 'day');
  }

  console.log(calendar);
  // window.moment = moment;

  const prevMonthHandler = () => {
    setCurrentMonth(prev => prev.clone().subtract(1, 'month'));
  };

  const nextMonthHandler = () => {
    setCurrentMonth(prev => prev.clone().add(1, 'month'));
  };

  return (
    <div>
      <CalendarToolBar
        prevMonthHandler={prevMonthHandler}
        nextMonthHandler={nextMonthHandler}
        currentMonth={currentMonth}
      />
      <CalendarWeekDays />
      <CalendarGrid startDay={startDay} />
    </div>
  );
};

export default Calendar;
