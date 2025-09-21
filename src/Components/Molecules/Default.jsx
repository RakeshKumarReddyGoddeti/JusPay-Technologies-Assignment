import Chart_Card from "../Molecules/Card_Chart";
import '../../Styles/default.css';

import { FaArrowTrendUp } from 'react-icons/fa6';
import { FaArrowTrendDown } from 'react-icons/fa6';

import Bar_Chart from '../Organisms/Bar_Chart';
import Line_Chart from '../Organisms/Line_Chart';
import World_Map from '../Organisms/World_Map';
import TopSellingProducts from "../Organisms/TopSellingProducts";
import Total_Sales_Card from '../Organisms/Total_Sales_Card';
import OrdersTable from '../Organisms/OrdersTable';


function Default() {
    return (
        <div className="default_content">
            <div className="card_chart_container">
                <Chart_Card className="card customers" title="Customers" number="3781" increment="+11.01%" icon={<FaArrowTrendUp /> } />
                <Chart_Card className="card orders" title="Orders" number="1219" increment="-0.03%" icon={<FaArrowTrendDown />} />
                <Chart_Card className="card revenue" title="Revenue" number="$695" increment="+15.03%" icon={<FaArrowTrendUp /> } />
                <Chart_Card className="card growth" title="Growth" number="30.1%" increment="+6.08%" icon={<FaArrowTrendUp /> } />
            </div>

            <div className="bar_chart">
                <h3>Projects vs Actuals</h3>
                <div className="stackedBarChart">
                    <Bar_Chart />
                </div>
            </div>


            <div className="line_chart_container">
                <div className="content">
                    <h3>Revenue</h3>
                    <p>Current Week <span><strong>$58,211</strong></span> </p>
                    <p>Previous Week <span><strong>$68,768</strong></span> </p>
                </div>
                <div className="lineChart">
                    <Line_Chart />
                </div>
            </div>

            <div className="world_map">
                <World_Map />
            </div>

            <div className="top_selling_products">
                <TopSellingProducts />
            </div>

            <div className="total_sales_card">
                <Total_Sales_Card />
            </div>

            <OrdersTable />
        </div>
    );
}

export default Default;