/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux';

import '../../Styles/header.css';

import Button from '../Atoms/Button';

import { MdOutlineSpeakerNotes } from 'react-icons/md';
import { AiTwotoneStar } from 'react-icons/ai';

function Header({className}) {

    const { superParent, parent, child } = useSelector((state) => state.breadcrumb);

    return (
        <header className={className}>
            <div className="breadcrumb_icons">
                <Button btnClass="breadcrumb_sub_icon" type="submit" aria-label="breadcrumb_sub_icon1"><MdOutlineSpeakerNotes/></Button>
                <Button btnClass="breadcrumb_sub_icon" type="submit" aria-label="breadcrumb_sub_icon2"><AiTwotoneStar className="star_icon"/></Button>
            </div>
            <div className="breadcrumb">
                <p className="parent_breadcrumb">  {superParent.length == 0 ? 'Dashboard' : superParent} </p>
                <h3 style={{color: 'var(--black-40, rgba(28, 28, 28, 0.4))'}}>/</h3>
                { parent.length == 0 ? '' : (
                    <>
                      <p className="parent_breadcrumb">
                        {parent.length == 0 ? 'Dashboard' : parent}
                      </p>
                      <h3 style={{color: 'var(--black-40, rgba(28, 28, 28, 0.4))'}}>/</h3>
                    </>
                ) }
                <h4> {child.length == 0 ? 'Default' : child} </h4>
            </div>
        </header>
    );
}

export default Header;