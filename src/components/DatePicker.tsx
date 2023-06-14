import React, { useRef, useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({
  handleChange,
}: {
  handleChange: Function;
}) {
  const [date, setDate] = useState<Date | null>(null);

  const handleDateChange = (d: Date) => {
    setDate(d);
    handleChange(d);
  };

  return (
    <ReactDatePicker
      selected={date}
      onChange={handleDateChange}
      className="p-2 border border-gray-300 rounded"
      dateFormat="dd/MM/yyyy"
    />
  );
}
