import React, {useState} from 'react';
import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from 'react-accessible-accordion';
import '../stylesheets/WeatherData.css'
import '../stylesheets/ForecastWeather.css'


const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const ForcastWeather = ({ data }) => {

  // const [showWholeWeek, setShowWholeWeek] = useState(false);

  if (!data || !data.list) {
    return <div>Search for daily forcast</div>; //No forecast data available.
  }

  const dayInAWeek = new Date().getDay();
  // console.log('dayInAWeek:', dayInAWeek);//3-wed
  // const forecastDays = WEEK_DAYS.slice(dayInAWeek).concat(WEEK_DAYS.slice(0, dayInAWeek));
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek));
  console.log("err",forecastDays);

  const forecastDays3 = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length);
  console.log("err2", forecastDays3);


// const toggleView = () => {
//   setShowWholeWeek(showWholeWeek);
// }

  return (
    <div className='forcastWeather'>
      <h2 className='title'>This weeks Weather Forecast</h2>
     <div className='card-1'>
     <Accordion allowZeroExpanded className='card'>
        {data.list.splice(0,7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}.png` } alt="Weather Icon" className='icon' />
                  <p className="day">{forecastDays[idx]}</p>
                  <p className="description">Weather: {item.weather[0].description}</p>
                  <p className='humidity'>Humidity: {item.main.humidity}°C </p>
                  <p className='min-temp'>Min Temp: {Math.round(item.main.temp_min)}°C </p>
                  <p className='min-temp'>Max Temp {Math.round(item.main.temp_max)}°C </p>

                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
          </AccordionItem>
        ))}
      </Accordion>
     </div>



      {/* <button onClick={toggleView}>View More</button> */}

    </div>
  );
};

export default ForcastWeather;



