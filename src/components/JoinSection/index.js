import React from 'react';
import { JoinContainer, Title, SubTitle, CardContainer, ImageContainer, CardContent, CardTitle, CardBody, NumberContainer, NumberWrapper, Number, Text, Card } from './JoinSection.styles.jsx';
import CountUp from 'react-countup';
import { FaRegImage } from 'react-icons/fa';
import { SiGoogletranslate } from 'react-icons/si';
import { MdInsertInvitation } from 'react-icons/md';

function JoinSection () {
    return (
        <>
            <JoinContainer>
                <Title>Why Join Us?</Title>
                <SubTitle>We have some solid reasons which will help you to decide whether to join us or not. Just to brief it out,
                          IEEE MBCET is an amazing and unique experience, that cannot be expressed through words!
                          Here are some of the exceptional stuffs
                </SubTitle>
                <Card>
                <CardContainer>
                    <ImageContainer>
                        <FaRegImage />
                    </ImageContainer>
                    <CardContent>
                        <CardTitle>Get Mentored</CardTitle>
                        <CardBody>IEEE MBCET helps you to connect with passionate people across the world. Learn, collaborate and grow</CardBody>
                    </CardContent>
                </CardContainer>
                <CardContainer>
                    <ImageContainer>
                        <SiGoogletranslate />
                    </ImageContainer>
                    <CardContent>
                        <CardTitle>Collaboration beyond Barriers</CardTitle>
                        <CardBody>This is your best opportunity to collaborate with like minded, yet unique individuals</CardBody>
                    </CardContent>
                </CardContainer>
                <CardContainer>
                    <ImageContainer>
                        <MdInsertInvitation />
                    </ImageContainer>
                    <CardContent>
                        <CardTitle>On Demand Events</CardTitle>
                        <CardBody>Ever wanted to experience an event or session, share it with us and we will get it done</CardBody>
                    </CardContent>
                </CardContainer>
                </Card>
                <NumberContainer>
                    <NumberWrapper>
                        <Number>
                            <CountUp end={125} />
                        </Number>
                        <Text>Members</Text>
                    </NumberWrapper>
                    <NumberWrapper>
                        <Number>
                            <CountUp end={30} />
                        </Number>
                        <Text>Events</Text>
                    </NumberWrapper>
                    <NumberWrapper>
                        <Number>
                            <CountUp end={7} />
                        </Number>
                        <Text>Societies</Text>
                    </NumberWrapper>
                    <NumberWrapper>
                        <Number>
                            <CountUp end={1} />
                        </Number>
                        <Text>Mission</Text>
                    </NumberWrapper>
                </NumberContainer>
            </JoinContainer>
        </>
    )
}

export default JoinSection;