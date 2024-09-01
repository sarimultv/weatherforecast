import React, { useEffect, useState } from "react";
import ThreeForecast from "./ThreeForecast";

const Temps = ({ currentLat, currentLon }) => {
  const [currTemp, setcurrTemp] = useState();
  const [currDate, setcurrDate] = useState();
  const [currIcon, setcurrIcon] = useState();

  const [currCity, setcurrCity] = useState();

  const [nextFirst, setnextFirst] = useState();
  const [nextFirstDate, setnextFirstDate] = useState();
  const [nextFirstIcon, setnextFirstIcon] = useState();

  const [nextSecond, setnextSecond] = useState();
  const [nextSecondDate, setnextSecondDate] = useState();
  const [nextSecondIcon, setnextSecondIcon] = useState();

  const [nextThird, setnextThird] = useState();
  const [nextThirdDate, setnextThirdDate] = useState();
  const [nextThirdIcon, setnextThirdIcon] = useState();

  useEffect(() => {
    if (currentLat && currentLon) {
      const weatherforecast = async () => {
        const BASE_URL = `http://api.openweathermap.org/data/2.5/forecast?lat=${currentLat}&lon=${currentLon}&units=metric&appid=27183eae0c78c16e8c9e8cf94b354197`;
        const response = await fetch(BASE_URL);

        const resJson = await response.json();

        const listValue = resJson.list[0];

        setcurrTemp(listValue.main.temp);
        setcurrDate(listValue.dt_txt);
        setcurrIcon(listValue.weather[0].icon);

        setcurrCity(resJson.city.name);

        const firstValue = resJson.list[7];
        setnextFirst(firstValue.main.temp);
        setnextFirstDate(firstValue.dt_txt);
        setnextFirstIcon(firstValue.weather[0].icon);

        const secondValue = resJson.list[15];
        setnextSecond(secondValue.main.temp);
        setnextSecondDate(secondValue.dt_txt);
        setnextSecondIcon(secondValue.weather[0].icon);

        const thirdValue = resJson.list[23];
        setnextThird(thirdValue.main.temp);
        setnextThirdDate(thirdValue.dt_txt);
        setnextThirdIcon(thirdValue.weather[0].icon);
      };
      weatherforecast();
    }
    return <p>latitude and Longitude not Available</p>;
  });
  const imgurl = "http://openweathermap.org/img/w/" + currIcon + ".png";

  const imgFirsturl =
    "http://openweathermap.org/img/w/" + nextFirstIcon + ".png";
  const imgSecondurl =
    "http://openweathermap.org/img/w/" + nextSecondIcon + ".png";
  const imgThirdurl =
    "http://openweathermap.org/img/w/" + nextThirdIcon + ".png";
  return (
    <>
      {!currTemp ? (
        <p>No data found</p>
      ) : (
        <div>
          <p> {currDate} </p>
          <h3>{currCity}</h3>
          <h3>
            <span>
              {" "}
              <img src={imgurl} alt="icon" />{" "}
            </span>{" "}
            {currTemp}°C
          </h3>
        </div>
      )}
      <ThreeForecast
        nextTemp={nextFirst}
        dtFirst={nextFirstDate}
        imFirst={imgFirsturl}
        secTemp={nextSecond}
        dtSec={nextSecondDate}
        imSec={imgSecondurl}
        thirdTemp={nextThird}
        dtThd={nextThirdDate}
        imThrd={imgThirdurl}
      />
    </>
  );
};

export default Temps;
