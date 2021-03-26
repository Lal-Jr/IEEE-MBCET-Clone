import React from 'react';
import { JoinContainer, Title, SubTitle, ImageContainer, CardContainer, CardContent, CardTitle, CardBody, NumberContainer, NumberWrapper, Number, Text, Card, MiniCard } from './JoinSection.styles.jsx';
import CountUp from 'react-countup';
import img from '../../images/ieeelogo.png';

function JoinSection () {
    return (
        <>
            <JoinContainer>
                <Title>Why Join Us?</Title>
                <ImageContainer>
                    <img src={img} alt='IEEE' />
                </ImageContainer>
                <SubTitle>We have some solid reasons which will help you to decide whether to join us or not. Just to brief it out, IEEE MBCET is an amazing and unique experience, that cannot be expressed through words! Here are some of the exceptional benefits.
                </SubTitle>
                <Card>
                    <MiniCard>
                    <CardContainer>
                        <CardContent>
                            <CardTitle>Unlimited Resources</CardTitle>
                            <CardBody>IEEE provides a wide range of journals, eBooks and articles creating awareness on various technological advancements and other fields.</CardBody>
                        </CardContent>
                    </CardContainer>
                        <CardContainer>
                            <CardContent>
                                <CardTitle>Get Mentored</CardTitle>
                                <CardBody>IEEE MBCET helps you to connect with passionate people across the world. Learn, collaborate and grow</CardBody>
                            </CardContent>
                        </CardContainer>
                    </MiniCard>
                    <MiniCard>
                        <CardContainer>
                            <CardContent>
                                <CardTitle>Volunteering</CardTitle>
                                <CardBody>Get the joy of volunteering, build your confidence and grow your professional network by conducting and assisting various IEEE events.</CardBody>
                            </CardContent>
                        </CardContainer>
                        <CardContainer>
                            <CardContent>
                                <CardTitle>Collaboration beyond Barriers</CardTitle>
                                <CardBody>This is your best opportunity to collaborate with like minded, yet unique individuals</CardBody>
                            </CardContent>
                        </CardContainer>
                    </MiniCard>
                    <MiniCard>
                        <CardContainer>
                            <CardContent>
                                <CardTitle>Career Opportunities</CardTitle>
                                <CardBody>Various employment and job placement opportunities are provided by IEEE for students and professionals in engineering and technical sectors.</CardBody>
                            </CardContent>
                        </CardContainer>
                    <CardContainer>
                        <CardContent>
                            <CardTitle>On Demand Events</CardTitle>
                            <CardBody>Ever wanted to experience an event or session, share it with us and we will get it done</CardBody>
                        </CardContent>
                    </CardContainer>
                    </MiniCard>
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