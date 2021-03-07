import React, {useState } from 'react';
import { HeroSectionContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroSection.styles';
import Video from '../../videos/gif.gif';
import { Button } from '../Button.styles';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover);
    }
    
    return (
        <HeroSectionContainer id="home">
            <HeroBg>
                <VideoBg autoplay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Redefining your
                </HeroH1>
                <HeroH1>
                     career ahead!
                </HeroH1>
                <HeroBtnWrapper>
                    <Button to='events' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Upcoming Events {hover ? <ArrowRight /> : <ArrowForward />}
                    </Button>
                </HeroBtnWrapper>
                <HeroBtnWrapper>
                    <Button to='more' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                        Sneak Peak {hover ? <ArrowRight /> : <ArrowForward />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroSectionContainer>
    )
}

export default HeroSection;