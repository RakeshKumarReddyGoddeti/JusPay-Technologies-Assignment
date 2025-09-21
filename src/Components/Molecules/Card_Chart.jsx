/* eslint-disable react/prop-types */
import '../../Styles/cardChart.css';

function Card_Chart({title, number, increment, className, icon}) {
    return (
        <div className={className}>
            <h4>{title}</h4>
            <div className="statistics">
                <h2>{number}</h2>
                <h5>{increment} {icon}</h5>
            </div>
        </div>
    );
}

export default Card_Chart;