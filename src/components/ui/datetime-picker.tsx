// components/ui/datetime-picker.tsx
'use client';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateTimePickerProps {
  value: Date | undefined;
  onChange: (date: Date | null) => void;
  className?: string;
}

const DateTimePicker: React.FC<DateTimePickerProps> = ({ value, onChange, className }) => {
  return (
    <DatePicker
      selected={value}
      onChange={onChange}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      dateFormat="yyyy-MM-dd HH:mm"
      className={`border p-2 rounded ${className}`}
      placeholderText="Select date and time"
    />
  );
};

export default DateTimePicker;
