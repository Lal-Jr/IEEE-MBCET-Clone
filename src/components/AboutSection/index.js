import React from 'react';
import './AboutSection.css';
import { GrResources } from "react-icons/gr";
import { GiCutDiamond } from 'react-icons/gi';
import { FaRegImage } from 'react-icons/fa';

function AboutSection()
{
    return (
        <>
            <div className="container">
                <h2 classname="title">
                    About Us
                </h2>
                <p classname="content">
                    lorem ipsum
                </p>
                <p classname="content-2">
                    lorem ipsum
                </p>
                <div className="icon_img-wrapper">
                    < GiCutDiamond/>
                </div>
                <p classname="icon-1">
                    lorem ipsum
                </p>
                <div className="icon_img-wrapper">
                    < FaRegImage />
                </div>
                <p classname="icon-2">
                    lorem ipsum
                </p>
                <div className="icon_img-wrapper">
                    < GrResources />
                </div>
                <p classname="icon-3">
                    lorem ipsum
                </p>
            </div>
        </>
    );
}

export default AboutSection;