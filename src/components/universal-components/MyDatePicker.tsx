import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { Dispatch, SetStateAction } from 'react';

// Define the types for the props
interface MyDatePickerProps {
  selectedDate: Date | null;
  setSelectedDate: Dispatch<SetStateAction<Date | null>>;
  excludedDates: Date[];
}

const MyDatePicker: React.FC<MyDatePickerProps> = ({ selectedDate, setSelectedDate, excludedDates }) => {
  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date: Date | null) => setSelectedDate(date)}
        dateFormat='yyyy-MM-dd'
        inline
        minDate={excludedDates.length > 0 ? excludedDates[0] : new Date()}
        excludeDates={excludedDates}
      />
    </div>
  );
};

export default MyDatePicker;
