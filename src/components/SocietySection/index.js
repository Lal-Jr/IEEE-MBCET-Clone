import React from 'react';
import { SocietyContainer, Title, SubText, Card, MiniCard, CardContainer, ImageContainer } from './SocietySection.styles.jsx';
// import cs from '../../images/Societies/cs.png';
// import sp from '../../images/Societies/sp.png';
// import pes from '../../images/Societies/pes.png';
// import emb from '../../images/Societies/emb.png';
// import ras from '../../images/Societies/ras.png';
// import sight from '../../images/Societies/sight.png';
// import wie from '../../images/Societies/wie.png';
// import csoon from '../../images/Societies/csoon.png';

function SocietySection() {
    return (
        <>
        <SocietyContainer>
            <Title>Our Societies</Title>
            <SubText>IEEE MBCET is proud to host different societies and affinity groups based on the interest of the members.</SubText>
                <Card>
                    <MiniCard>
                        <CardContainer>
                            <ImageContainer>
                                {/* <img src={cs} alt=''/> */}
                            </ImageContainer>
                        </CardContainer>
                        <CardContainer>
                            <ImageContainer>
                                {/* <img src={sp} alt='' /> */}
                            </ImageContainer>
                        </CardContainer>
                    </MiniCard>
                    <MiniCard>
                        <CardContainer>
                            <ImageContainer>
                                {/* <img src={pes} alt='' /> */}
                            </ImageContainer>
                        </CardContainer>
                        <CardContainer>
                            <ImageContainer>
                                {/* <img src={emb} alt='' /> */}
                            </ImageContainer>
                        </CardContainer>
                    </MiniCard>
                    <MiniCard>
                        <CardContainer>
                            <ImageContainer>
                                {/* <img src={ras} alt='' /> */}
                            </ImageContainer>
                        </CardContainer>
                        <CardContainer>
                            <ImageContainer>
                                {/* <img src={sight} alt='' /> */}
                            </ImageContainer>
                        </CardContainer>
                    </MiniCard>
                    <MiniCard>
                        <CardContainer>
                            <ImageContainer>
                                {/* <img src={wie} alt='' /> */}
                            </ImageContainer>
                        </CardContainer>
                        <CardContainer>
                            <ImageContainer>
                                {/* <img src={csoon} alt='' /> */}
                            </ImageContainer>
                        </CardContainer>
                    </MiniCard>
                </Card>
        </SocietyContainer>            
        </>
    )
}

export default SocietySection;
