import React, { useRef, useState } from 'react';

export default function DatePicker({
  handleChange,
}: {
  handleChange: Function;
}) {
  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
    handleChange(e.target.value);
  };

  return (
    <div>
      <input type="date" onChange={handleDateChange} ref={dateInputRef} />
      <p>Selected Date: {date}</p>
    </div>
  );
};

