import React from 'react';
import { BlogContainer, Title, CardContainer, ImageContainer, CardTitle } from './BlogSection.styles.jsx';
import img from '../../images/Blog/blog1.jpeg';

function BlogSection() {
    return (
        <>
        <BlogContainer>
            <Title>Our Blog</Title>
            <CardContainer>
                <ImageContainer>
                    <img src={img} alt='' />
                </ImageContainer>
                <CardTitle to='/blog/blog1' target='_blank'>A Greener World is Budding, Virtually</CardTitle>
            </CardContainer>
        </BlogContainer>
        </>
    )
}

export default BlogSection;
