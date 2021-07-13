import "./App.css";
import weatherPredictions from './data/weatherData';
import Weather from "./components/Weather/Weather";


export default function WeatherPrediction() {
  return (
    <div className="App">
      <Weather predictions={weatherPredictions} />
    </div>
  )
}
