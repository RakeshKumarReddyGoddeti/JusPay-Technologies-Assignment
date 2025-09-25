/* eslint-disable react/prop-types */
import '../../Styles/sideBar.css';
import Photo from '../../Images/photo.jpeg'
import { useDispatch } from 'react-redux';
import { setBreadcrumb } from '../../Redux/breadcrumbSlice';

import Button from '../Atoms/Button';

import { BiPieChartAlt2 } from 'react-icons/bi';
import { BsHandbag } from 'react-icons/bs';
import { BsFolder2 } from 'react-icons/bs';
import { BsBook } from 'react-icons/bs';
import { AiOutlineProfile } from 'react-icons/ai';
import { RiProfileLine } from 'react-icons/ri';
import { IoPeopleOutline } from 'react-icons/io5';
import { LiaBlogger } from 'react-icons/lia';
import { HiOutlineChatBubbleLeftRight } from 'react-icons/hi2';

function SideBar({className}) {

    const dispatch = useDispatch();

    const handleClick = (e) => {
        e.preventDefault();
        const childBreadcrumb = e.target.textContent;
        const superParentBreadcrumb = e.currentTarget.closest('.triangle-list').previousElementSibling.textContent;
        const parentBreadcrumb = ( e.target.textContent === e.currentTarget.closest('.triangle-list').querySelectorAll('.side_menu').textContent ) ? e.currentTarget.closest('.triangle-list').querySelector('.side_menu').textContent : '';
        const breadcrumbData = { childBreadcrumb, superParentBreadcrumb, parentBreadcrumb };
        dispatch(setBreadcrumb(breadcrumbData));
        
    };
    return (
        <div className={className}>
            <div className="name_badge">
                <img src={Photo} alt="Profile" className="profile_photo"/>
                <p className="name">Rakesh Reddy</p>
            </div>


            <div className="favourites">
                <div className="group">
                    <Button btnClass="favourite_button" aria-label="favourite" >Favourites</Button>
                    <Button btnClass="recently_button" aria-label="recently" >Recently</Button>
                </div>

                <ul className="list">
                    <li className="item">Overview</li>
                    <li className="item">Projects</li>
                </ul>
            </div>


            <div className="dashboard">
                <Button btnClass="dashboard_button" aria-label="dashboard" >Dashboard</Button>

                <ul className="triangle-list">
                    <li className="dashboard_item">
                        <BiPieChartAlt2 className="dashboard_icon"/>
                        <p className="side_menu" onClick={handleClick}>Default</p>
                    </li>
                    <li className="dashboard_item">
                        <BsHandbag className="dashboard_icon"/>
                        <p className="side_menu" onClick={handleClick}>eCommerce</p>
                    </li>
                    <li className="dashboard_item">
                        <BsFolder2 className="dashboard_icon"/>
                        <p className="side_menu" onClick={handleClick}>Projects</p>
                    </li>
                    <li className="dashboard_item">
                        <BsBook className="dashboard_icon"/>
                        <p className="side_menu" onClick={handleClick}>Online Courses</p>
                    </li>
                </ul>
            </div>


            <div className="pages">
                <Button btnClass="pages_button" aria-label="pages" >Pages</Button>

                <ul className="triangle-list">
                    <li className="pages_item">
                        <AiOutlineProfile className="dashboard_icon"/>
                        <p className="userProfile side_menu" onClick={handleClick}>User Profile</p>
                    </li>
                    <ul>
                        <li className="pages_sub_list">
                            <p onClick={handleClick}  className="sub_item">Overview</p>
                        </li>
                        <li className="pages_sub_list">
                            <p  onClick={handleClick} className="sub_item">Projects</p>
                        </li>
                        <li className="pages_sub_list">
                            <p onClick={handleClick} className="sub_item">Campaigns</p>
                        </li>
                        <li className="pages_sub_list">
                            <p onClick={handleClick} className="sub_item">Documents</p>
                        </li>
                        <li className="pages_sub_list">
                            <p onClick={handleClick} className="sub_item">Followers</p>
                        </li>                            
                    </ul>

                    <li className="dashboard_item">
                        <RiProfileLine className="dashboard_icon"/>
                        <p className="side_menu" onClick={handleClick}>Account</p>
                    </li>
                    <li className="dashboard_item">
                        <IoPeopleOutline className="dashboard_icon"/>
                        <p className="side_menu" onClick={handleClick}>Corporate</p>
                    </li>
                    <li className="dashboard_item">
                        <LiaBlogger className="dashboard_icon"/>
                        <p className="side_menu" onClick={handleClick}>Blog</p>
                    </li>
                    <li className="dashboard_item">
                        <HiOutlineChatBubbleLeftRight className="dashboard_icon"/>
                        <p className="side_menu" onClick={handleClick}>Social</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;