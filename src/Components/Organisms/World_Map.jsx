import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import "../../Styles/worldMap.css";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const LOCATIONS = [
  { name: "New York", coordinates: [-74.006, 40.7128], revenue: 72000 },
  { name: "San Francisco", coordinates: [-122.4194, 37.7749], revenue: 39000 },
  { name: "Sydney", coordinates: [151.2093, -33.8688], revenue: 25000 },
  { name: "Singapore", coordinates: [103.8198, 1.3521], revenue: 61000 },
];

const maxRevenue = Math.max(...LOCATIONS.map((loc) => loc.revenue));

const World_Map = () => {
  return (
    <div className="revenue-container">
      
      <div className="map-wrapper">
        <ComposableMap projectionConfig={{ scale: 150 }}>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#EEE"
                  stroke="#D6D6D6"
                />
              ))
            }
          </Geographies>
          {LOCATIONS.map(({ coordinates }, idx) => (
            <Marker key={idx} coordinates={coordinates}>
              <circle r={5} fill="#FF5533" stroke="#fff" strokeWidth={1} />
            </Marker>
          ))}
        </ComposableMap>
      </div>


      <div className="revenue-list">
        <h3 className="revenue-title">Revenue by Location</h3>
        {LOCATIONS.map((loc, idx) => (
          <div className="revenue-item" key={idx}>
            <div className="revenue-label">
              <span>{loc.name}</span>
              <span>{(loc.revenue / 1000).toFixed(0)}K</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-bar-fill"
                style={{
                  width: `${(loc.revenue / maxRevenue) * 100}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default World_Map;
