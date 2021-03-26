import React from 'react';
import { ContactContainer, Title, ContentWrapper, ContactCol, FormContainer, ContactText, Form, WrapperGrid, Label, Input, Textarea, TextWrapper, Button, Divider } from './ContactSection.styles.jsx';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';

function ContactSection() {
    const toggleAlert = () => {
        alert("Message Sent Sucessfully!");
    }

    return (
        <>
        <ContactContainer>
            <Title>Contact Us</Title>
            <ContentWrapper>
                <ContactCol>sfgsdfg</ContactCol>
                    <ContactCol>
                        <FormContainer>
                            <TextWrapper>
                                <AiOutlineMail />
                                <ContactText>ieeesb@mbcet.ac.in</ContactText>
                                <Divider />
                                <AiOutlinePhone /> 
                                <ContactText>+91 8086010528</ContactText>
                            </TextWrapper>
                            <Form>
                                <WrapperGrid>
                                    <Input type="text" placeholder='name' />
                                </WrapperGrid>
                                <WrapperGrid>
                                    <Label>Email Address</Label>
                                    <Input type="email" name="email" />
                                </WrapperGrid>
                                <WrapperGrid>
                                    <Label>Phone Number</Label>
                                    <Input type="text" name="phone" />
                                </WrapperGrid>
                            </Form>
                            <WrapperGrid full>
                                <Label>Subject</Label>
                                <Input name="text" rows="5"></Input>
                            </WrapperGrid>
                            <WrapperGrid full>
                                <Label>Message</Label>
                                <Textarea name="message" rows="5"></Textarea>
                            </WrapperGrid>
                            <WrapperGrid full>
                                <Button onClick={toggleAlert}>
                                    Submit
                                </Button>       
                            </WrapperGrid>
                        </FormContainer>
                    </ContactCol>
            </ContentWrapper>
        </ContactContainer>            
        </>
    )
}

export default ContactSection;
