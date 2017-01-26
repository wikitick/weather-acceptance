module.exports = {
    url: 'http://localhost:3000',

    elements: {
        body: 'body',
        city: '#city',
        
        summary: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(1)',

        day1: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1) > span:nth-child(1)',
        date1: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1) > span:nth-child(2)',
        day2: '#root > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > span:nth-child(1) > span:nth-child(1)',
        date2: '#root > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > span:nth-child(1) > span:nth-child(2)',
        day3: '#root > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > span:nth-child(1) > span:nth-child(1)',
        date3: '#root > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > span:nth-child(1) > span:nth-child(2)',
        day4: '#root > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > span:nth-child(1) > span:nth-child(1)',
        date4: '#root > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > span:nth-child(1) > span:nth-child(2)',
        day5: '#root > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > span:nth-child(1) > span:nth-child(1)',
        date5: '#root > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > span:nth-child(1) > span:nth-child(2)',
        
        daily_summary_icon: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(2) > svg:nth-child(1)',

        daily_icon: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(2) > svg:nth-child(1)',
        daily_temp_max: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3) > span:nth-child(1)',
        daily_temp_min: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3) > span:nth-child(2)',
        daily_wind_speed: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(4) > span:nth-child(1)',
        daily_rainfall: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(5) > span:nth-child(1)',
        daily_pressure: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(5) > span:nth-child(2)',

        details: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(2)',

        hour1: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1) > span:nth-child(1)',
        hour2: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > span:nth-child(1) > span:nth-child(1)',
        hour3: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > span:nth-child(1) > span:nth-child(1)',
        hour4: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(4) > span:nth-child(1) > span:nth-child(1)',
        
        desc1: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span:nth-child(2) > svg:nth-child(1)',
        
        temp_max1: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3) > span:nth-child(1)',
        temp_min1: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > span:nth-child(3) > span:nth-child(2)',
        wind_speed1: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span:nth-child(4) > span:nth-child(1)',
        rainfall1: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span:nth-child(5) > span:nth-child(1)',
        pressure1: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span:nth-child(5) > span:nth-child(2)',

        hour_summary: '#root > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1) > span:nth-child(1)',

        wed_period1: '#root > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > span:nth-child(1) > span:nth-child(1)',
        wed_period2: '#root > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(2) > span:nth-child(1) > span:nth-child(1)',
        wed_period3: '#root > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(3) > span:nth-child(1) > span:nth-child(1)',
        wed_period4: '#root > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(4) > span:nth-child(1) > span:nth-child(1)',
        wed_period5: '#root > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(5) > span:nth-child(1) > span:nth-child(1)',
        wed_period6: '#root > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(6) > span:nth-child(1) > span:nth-child(1)',
        wed_period7: '#root > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(7) > span:nth-child(1) > span:nth-child(1)',
        wed_period8: '#root > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div:nth-child(8) > span:nth-child(1) > span:nth-child(1)',
        

        desc4: '#root > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > span:nth-child(2) > svg:nth-child(1)',
        pressure4: '#root > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > span:nth-child(5) > span:nth-child(2)',

        rainfall5: '#root > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > span:nth-child(5) > span:nth-child(1)',
        
        error_message: '#root > div:nth-child(1) > div:nth-child(2)'

    }
};




