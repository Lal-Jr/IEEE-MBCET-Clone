import React from 'react';
import './AboutSection.css';
import { GrResources } from "react-icons/gr";
import { GiCutDiamond } from 'react-icons/gi';
import { FaRegImage } from 'react-icons/fa';
// import  { img } from '../../images/img';

function AboutSection()
{
    return (
        <>
            <div className="container">
                <h2 classname="title">
                    About Us
                </h2>
                <p classname="content">
                    The IEEE student branch of Mar Baselios College of Engineering & Technology was established on February 14, 2006 by Dr G Vijayaraghavan, former Chairperson of IEEE Kerala Section and Founder & CEO of Technopark, Trivandrum.
                    IEEE MBCET falls under IEEE Kerala Section which is a part of the IEEE India Council which falls under Region 10 (Asia Pacific & Australia) of the global IEEE geography. We started our journey with 52 members and in 2008 it reached 103.
                    Society chapters are bodies that work for the advancements of one particular field of technology.
                </p>
                <p classname="content-2">
                    Here are some of the amazing things that makes us special :
                </p>
                <div className="icon_img-wrapper">
                    < GiCutDiamond/>
                </div>
                <h4 classname="icon-title">
                    Global Community
                </h4>
                <p classname="icon-subtitle">
                    IEEE is a global community having more than 400,000 members across the world
                </p>
                <div className="icon_img-wrapper">
                    < FaRegImage />
                </div>
                <h4 classname="icon-title">
                    Unlimited Opportunities
                </h4>
                <p classname="icon-subtitle">
                    As an IEEE member, you will have the best opportunities to move ahead in your career
                </p>
                <div className="icon_img-wrapper">
                    < GrResources />
                </div>
                <h4 classname="icon-title">
                    Amazing Resources
                </h4>
                <p classname="icon-subtitle">
                    Millions of resources will be made available at your disposal, along with exclusively curated contents
                </p>
            </div>
            {/* <div className="container">
                <div className="img-wrapper">
                    <img src={img} alt='alt' className="img" />
                </div>
            </div> */}
        </>
    );
}

export default AboutSection;