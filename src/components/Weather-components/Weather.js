import React, { useState } from "react";
import DisplayWeather from "./DisplayWeather";
import News3 from "../News-components/News3";
import "./weather.css";

function Weather() {
  const [weather, setWeather] = useState([]);
  const [form, setForm] = useState({
    city: "",
    country: "",
  });

  const APIKEY = "788512c54c7bf6f8611c847b2a0fb2c2";
  async function weatherData(e) {
    e.preventDefault();
    if (form.city == "") {
      alert("Add values");
    } else {
      const data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city}&APPID=${APIKEY}`
      )
        .then((res) => res.json())
        .then((data) => data);

      setWeather({ data: data });
    }
  }

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name == "city") {
      setForm({ ...form, city: value });
    }
    if (name == "country") {
      setForm({ ...form, country: value });
    }
  };
  return (
    <div className="weather">
      <form>
        <input
          type="text"
          placeholder="City"
          name="city"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="text"
          placeholder="Country"
          name="country"
          onChange={(e) => handleChange(e)}
        />
        <button className="getweather" onClick={(e) => weatherData(e)}>
          Submit
        </button>
      </form>

      {weather.data != undefined ? (
        <div>
          <DisplayWeather data={weather.data} />
          <News3 country={form.country}/>
        </div>
      ) : null}
    </div>
  );
}

export default Weather;