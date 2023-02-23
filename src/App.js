import "./App.css";
import WeatherSearch from "./WeatherSearch";

function App() {
  return (
    <div className="App">
      <h1>Weather App React</h1>
      <WeatherSearch />
      <footer className="Footer">
        Open-Source Code{" "}
        <strong>
          <a
            href="https://github.com/saskiajasmin/react-weather-app"
            target="_blank"
            rel="noreferrer"
            alt="GitHub">
            @GitHub
          </a>
        </strong>
      </footer>
    </div>
  );
}

export default App;
