import { useState } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';
import './App.css';

function App() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [focusedInput, setFocusedInput] = useState(null);

  return (
    <div className="App">
      <DateRangePicker
        displayFormat="l" //Results in M/D/YYYY
        startDate={startDate}
        startDateId="your_unique_start_date_id"
        endDate={endDate}
        endDateId="your_unique_end_date_id"
        onDatesChange={onDatesChange}
        focusedInput={focusedInput}
        onFocusChange={setFocusedInput}
        isOutsideRange={() => false}
      />
    </div>
  );

  function onDatesChange({startDate: newStartDate, endDate: newEndDate}) {
    setStartDate(newStartDate);
    setEndDate(newEndDate);
  }
}

export default App;
