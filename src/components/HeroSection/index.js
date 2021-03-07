import React, { useState } from 'react';
import './HeroSection.css';
import { Button } from '../Button/Button.styles';

function HeroSection ({ lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart })
{
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }
    return (
        <>
            <div className={lightBg ? 'home__hero-section' : 'home__hero - section darkBg'}>
                <div className="container">
                    <div className="row home__hero-row"
                        style={{display:'flex', flexdirection: imgStart === 'start' ? 'row-reverse' : 'row'}}
                    >
                        <div className="col">
                            <div className="home__hero-text-wrapper">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default HeroSection;