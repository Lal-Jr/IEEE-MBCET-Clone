import React from 'react'
import { TeamContainer, Title, SubText, CircleContainer, ImageContainer, TeamLink, Overlay, TextWrapper, Name, Position } from './TeamSection.styles.jsx';
import Pic1 from '../../images/execom/Bursar.jpg';
import Pic2 from '../../images/execom/Principal.jpg';
import Pic3 from '../../images/execom/Vice_Principal.jpg';
import Pic4 from '../../images/execom/Jayashree_EMBSChair.jpg';
import Pic5 from '../../images/execom/Jinu_BranchCouncelor.jpg';
import Pic6 from '../../images/execom/Kesia_Chair.jpg';

function TeamSection() {
    return (
        <>
            <TeamContainer>
                <Title>Team</Title>
                <SubText>IEEE MBCET is made up of a lof enthusiastic individuals. Meet some of the frontier people of IEEE MBCET. Here is the complete
                        <TeamLink to='/team' target='_blank'> team</TeamLink>.
                </SubText>
                <CircleContainer>
                    <ImageContainer>
                        <img src={Pic1} alt='' />
                        <Overlay></Overlay>
                            <TextWrapper>
                                <Name>Fr. John Vilayil</Name>
                                <Position>Bursar</Position>
                            </TextWrapper>
                    </ImageContainer>
                    <ImageContainer>
                        <img src={Pic2} alt='' />
                        <Overlay></Overlay>
                            <TextWrapper>
                                <Name>Dr. Abraham Mathew</Name>
                                <Position>Principal</Position>
                            </TextWrapper>
                    </ImageContainer>
                    <ImageContainer>
                        <img src={Pic3} alt='' />
                        <Overlay></Overlay>
                            <TextWrapper>
                                <Name>Prof. S Viswanatha Rao</Name>
                                <Position>Vice-Principal</Position>
                            </TextWrapper>
                    </ImageContainer>
                    <ImageContainer>
                        <img src={Pic4} alt='' />
                        <Overlay></Overlay>
                            <TextWrapper>
                                <Name>Dr. M J Jayashree</Name>
                                <Position>EMBS Kerala Section Head</Position>
                            </TextWrapper>
                    </ImageContainer>
                    <ImageContainer>
                        <img src={Pic5} alt='' />
                        <Overlay></Overlay>
                            <TextWrapper>
                                <Name>Jinu Baby</Name>
                                <Position>Branch Counsellor</Position>
                            </TextWrapper>
                    </ImageContainer>
                    <ImageContainer>
                        <img src={Pic6} alt='' />
                        <Overlay></Overlay>
                            <TextWrapper>
                                <Name>Kesia Mary Joies</Name>
                                <Position>Chairman</Position>
                            </TextWrapper>
                    </ImageContainer>
                </CircleContainer>
            </TeamContainer>
        </>
    )
}

export default TeamSection;
