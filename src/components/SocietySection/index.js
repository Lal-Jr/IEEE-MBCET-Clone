import React from 'react';
import { SocietyContainer, Title, SubText, Card, MiniCard, CardContainer, ImageContainer } from './SocietySection.styles.jsx';
import cs from '../../images/Societies/cs.png';
import sp from '../../images/Societies/sp.png';
import pes from '../../images/Societies/pes.png';
import emb from '../../images/Societies/emb.png';
import ras from '../../images/Societies/ras.png';
import sight from '../../images/Societies/sight.png';
import wie from '../../images/Societies/wie.png';
import csoon from '../../images/Societies/csoon.png';

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
                                <a href='https://www.computer.org/' target='_blank' rel="noreferrer">
                                    <img src={cs} alt=''/>
                                </a>
                            </ImageContainer>
                        </CardContainer>
                        <CardContainer>
                            <ImageContainer>
                                <a href='https://signalprocessingsociety.org/' target='_blank' rel="noreferrer">
                                    <img src={sp} alt='' />
                                </a>
                            </ImageContainer>
                        </CardContainer>
                    </MiniCard>
                    <MiniCard>
                        <CardContainer>
                            <ImageContainer>
                                <a href='https://www.ieee-pes.org/' target='_blank' rel="noreferrer">
                                    <img src={pes} alt='' />
                                </a>
                            </ImageContainer>
                        </CardContainer>
                        <CardContainer>
                            <ImageContainer>
                                <a href='https://www.embs.org/' target='_blank' rel="noreferrer">
                                    <img src={emb} alt='' />
                                </a>
                            </ImageContainer>
                        </CardContainer>
                    </MiniCard>
                    <MiniCard>
                        <CardContainer>
                            <ImageContainer>
                                <a href='https://www.ieee-ras.org/' target='_blank' rel="noreferrer">
                                    <img src={ras} alt='' />
                                </a>
                            </ImageContainer>
                        </CardContainer>
                        <CardContainer>
                            <ImageContainer>
                                <a href='https://sight.ieee.org/' target='_blank' rel="noreferrer">
                                    <img src={sight} alt='' />
                                </a>
                            </ImageContainer>
                        </CardContainer>
                    </MiniCard>
                    <MiniCard>
                        <CardContainer>
                            <ImageContainer>
                                <a href='https://wie.ieee.org/' target='_blank' rel="noreferrer">
                                    <img src={wie} alt='' />
                                </a>
                            </ImageContainer>
                        </CardContainer>
                        <CardContainer>
                            <ImageContainer>
                                <img src={csoon} alt='' />
                            </ImageContainer>
                        </CardContainer>
                    </MiniCard>
                </Card>
        </SocietyContainer>            
        </>
    )
}

export default SocietySection;
