import React from 'react';
import { VMContainer, Title, SubTitle, CardContainer, ImageContainer, CardContent, CardTitle, CardBody, Divider, VMRow} from './VMSection.styles.jsx';
import Vimg from '../../images/Vimg.png';
import Mimg from '../../images/Mimg.png';

function VMSection() {
    return (
        <>
            <VMContainer>
                <Title>Vision & Mission</Title>
                <SubTitle>There is always a driving factor behind each community initative. 
                          IEEE MBCET is proud to have that driving factor, which helps everyone in their pursuit!
                </SubTitle>
                <VMRow>
                <CardContainer>
                    <ImageContainer>
                        <img src={Vimg} alt='' />
                    </ImageContainer>
                    <CardContent>
                        <CardTitle>VISION</CardTitle>
                        <CardBody>To be a community supporting each and every individual throughout their pursuit and drive them to success</CardBody>
                    </CardContent>
                </CardContainer>
                <Divider />
                <CardContainer>
                    <ImageContainer>
                        <img src={Mimg} alt='' />
                    </ImageContainer>
                    <CardContent>
                        <CardTitle>MISSION</CardTitle>
                        <CardBody>To transform the Youth as technically competent, ethically sound and socially committed professionals, for the welfare of humanity</CardBody>
                    </CardContent>
                </CardContainer>
                </VMRow>
            </VMContainer>
        </>
    )
}

export default VMSection;
