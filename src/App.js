import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';
import { loadWeeklyData } from './utils/timeSlots';
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const CheckboxList = () => {
  const [currentDate, setCurrentDate] = useState(moment());
  const [selectedTimezone, setSelectedTimezone] = useState('UTC');
  const [weeklyData, setWeeklyData] = useState([]);

  const handleTimezoneChange = (timezone) => {
    setSelectedTimezone(timezone);
  };

  const handleDateChange = (amount) => {
    setCurrentDate(currentDate.clone().add(amount, 'weeks'));
  };

  useEffect(() => {
    loadWeeklyData(currentDate, selectedTimezone, setWeeklyData);
  }, [currentDate, selectedTimezone]);

  useEffect(() => {
    console.log('Selected timezone has changed:', selectedTimezone);
  }, [selectedTimezone]);

  const convertTimeToSelectedTimezone = (time) => {
    const utcDateTime = moment.utc(`2000-01-01 ${time}`, 'YYYY-MM-DD HH:mm');
    return utcDateTime.tz(selectedTimezone).format('hh:mm A');
  };

  return (
    <div className='mx-auto max-w-[1450px] p-4'>
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center'>
          <button className='text-start w-fit' onClick={() => handleDateChange(-1)}>
            <span className='flex items-center text-blue-500 capitalize'><FaCaretLeft className='text-black' />Previous Week</span>
          </button>
          <span className='text-center lg:w-64 text-base opacity-50 font-semibold'>{currentDate.format('MMM, DD YYYY')}</span>
        </div>
        <button className='text-end' onClick={() => handleDateChange(1)}>
          <span className='flex items-center text-blue-500 capitalize'>Next Week<FaCaretRight className='text-black' /></span>
        </button>
      </div>

      <div className='py-4'>
        Timezone:
        <select onChange={(e) => handleTimezoneChange(e.target.value)} className='opacity-50 font-semibold w-full my-2 py-1 shadow-sm border-[1px] border-grey-300 outline-none'>
          <option value="UTC">{"[UTC-5]  Universal Time Coordinated"}</option>
          <option value="EST">{"[EST-5] Eastern Standard Time"}</option>
        </select>
      </div>
      {["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"].map((ele, index) => (
        <div>
          <div className="grid grid-cols-8 gap-4 py-4">
            <h4><span className={`text-red-800 font-semibold text-xl active:bg-[#ff969671] focus:bg-[#ff969671]`}>{ele}</span><br /><span className='text-base'>{currentDate.format('MM-DD')}</span></h4>
            {index > 1 ? <div className='grid grid-cols-8 gap-4 col-span-6'>
              {weeklyData.length > 0 &&
                weeklyData[0].timeSlots.map((timeSlot) => (
                  <div key={timeSlot.startTime} className="grid gap-4">
                    <span className='flex items-center'>
                      <input
                        type="checkbox"
                        defaultChecked={timeSlot.isChecked}
                        onChange={() => {
                        }}
                        className='border-2 border-blue-500 rounded-md p-2 mr-2'
                      />
                      {convertTimeToSelectedTimezone(timeSlot.startTime)}
                    </span>
                  </div>
                ))}
            </div> : <h3 className='text-xl opacity-50'>Past</h3>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CheckboxList;
