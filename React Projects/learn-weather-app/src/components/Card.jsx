import sun from "./sun.png";
import "./Card.css";

const Card = () => {
  return (
    <>
      <div className="weatherinfo">
        <div className="location">New York, USA</div>
        <div className="weather-pic">
          <img src={sun} alt="sun picture" />
        </div>
        <div className="weather-details">
          <p className="temperature">Temperature: <span>36°C</span></p>
          <p className="condition">Condition: <span>Sunny</span></p>
          <p className="wind">Wind: <span>35 km/h</span></p>
          <p className="humidity">Humidity: <span>66%</span></p>
          <p className="precipitation">Precipitation: <span>20%</span></p>
          <p className="datetime">Date and Time: <span>June 11, 2024, 2:00 PM</span></p>
        </div>
      </div>
    </>
  );
};

export default Card;
