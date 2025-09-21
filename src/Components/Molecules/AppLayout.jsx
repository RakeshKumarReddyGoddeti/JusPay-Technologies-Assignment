/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';
import SideBar from "./SideBar";
import Header from "./Header";

import '../../Styles/appLayout.css';

function AppLayout() {
    return (
        <div className="app_layout">
            <SideBar className="side_bar"/>
            <div className="content_area">
                <Header className="header"/>
                <div className="outlet_container">
                    <h3>eCommerce</h3>
                    <div className="main_content">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppLayout;