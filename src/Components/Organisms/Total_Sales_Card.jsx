import "../../Styles/totalSalesCard.css";

const salesData = [
  { label: "Direct", value: 300.56, color: "#95A4FC" },
  { label: "Affiliate", value: 135.18, color: "#B1E3FF" },
  { label: "Sponsored", value: 154.02, color: "black" },
  { label: "E-mail", value: 48.96, color: "#BAEDBD" },
];

const Total_Sales_Card = () => {
  const total = salesData.reduce((sum, item) => sum + item.value, 0);
  const percentage = ((salesData[0].value / total) * 100).toFixed(1);

  return (
    <div className="card_chart">
      <h3 className="card-title">Total Sales</h3>

      <div className="chart-wrapper">
        <svg className="donut" viewBox="0 0 42 42">
          {salesData.map((item, index) => {
            const prevValues = salesData
              .slice(0, index)
              .reduce((sum, d) => sum + d.value, 0);
            const offset = (prevValues / total) * 100;
            const dash = (item.value / total) * 100;

            return (
              <circle
                key={item.label}
                className="donut-segment"
                cx="21"
                cy="21"
                r="15.915"
                fill="transparent"
                stroke={item.color}
                strokeWidth="6"
                strokeDasharray={`${dash} ${100 - dash}`}
                strokeDashoffset={25 - offset}
              />
            );
          })}
        </svg>

        <div className="chart-center">{percentage}%</div>
      </div>

      <ul className="sales-list">
        {salesData.map((item) => (
          <li key={item.label} className="sales-item">
            <span
              className="dot"
              style={{ backgroundColor: item.color }}
            ></span>
            <span className="label">{item.label}</span>
            <span className="value">${item.value.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Total_Sales_Card;
