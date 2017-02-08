module.exports = {
    url: 'http://localhost:3000',

    elements: {
        body: 'body',
        city: '#city',
        
        summary: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)',

        day1: '[data-test="day-1"]',
        date1: '[data-test="date-1"]',
        day2: '[data-test="day-2"]',
        date2: '[data-test="date-2"]',
        day3: '[data-test="day-3"]',
        date3: '[data-test="date-3"]',
        day4: '[data-test="day-4"]',
        date4: '[data-test="date-4"]',
        day5: '[data-test="day-5"]',
        date5: '[data-test="date-5"]',
        
        daily_summary_icon: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(2) > svg:nth-child(1)',

        daily_icon: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(2) > svg:nth-child(1)',


        details: '.details',

        hour1: '[data-test="hour-1-1"]',
        hour2: '[data-test="hour-1-2"]',
        hour3: '[data-test="hour-1-3"]',
        hour4: '[data-test="hour-1-4"]',

        hour5: '[data-test="hour-1-5"]',
        
        desc1: '[data-test="description-1"]',
        
        temp_max1: '[data-test="maximum-1"]',
        temp_min1: '[data-test="minimum-1"]',
        wind_speed1: '[data-test="speed-1"]',
        rainfall1: '[data-test="rainfall-1"]',
        pressure1: '[data-test="pressure-1"]',

        hour_summary: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1) > span:nth-child(1)',

        wed_period1: '[data-test="hour-2-1"]',
        wed_period2: '[data-test="hour-2-2"]',
        wed_period3: '[data-test="hour-2-3"]',
        wed_period4: '[data-test="hour-2-4"]',
        wed_period5: '[data-test="hour-2-5"]',
        wed_period6: '[data-test="hour-2-6"]',
        wed_period7: '[data-test="hour-2-7"]',
        wed_period8: '[data-test="hour-2-8"]',
        wed_period9: '[data-test="hour-2-9"]',

        desc4: '[data-test="description-4"]',
        pressure4: '[data-test="pressure-4"]',

        rainfall5: '[data-test="rainfall-5"]',
        
        error_message: '#root > div:nth-child(1) > div:nth-child(2)'

    }
};




