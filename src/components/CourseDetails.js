import styled from 'styled-components';
import { useParams } from "react-router-dom";
import { courses } from '../data';

const CourseDetails = () => {
    const { courseId } = useParams();
    return (
        <Container>
            <Img src={ courses[courseId].imageSrc } />
            <TextDiv>
                <Title>{ courses[courseId].name }</Title>
                <Dates>{ courses[courseId].dates }</Dates>
                <Description>{ courses[courseId].description }</Description>
            </TextDiv>
        </Container>
    )
}

const Container = styled.div`
    z-index: 0;
    display: flex;
    padding-bottom: 50px;
    justify-content: center;
`;

const Img = styled.img`
    width: 500px;
    height: 300px;
    object-fit: cover;
    border-radius: 50px;
    margin-right: 80px;
    margin-top: 50px;
`;

const TextDiv = styled.div`
    float: right;
    margin-top: 50px;
`;

const Title = styled.h1`
    font-size: 42px;
    margin-bottom: -25px;
`;

const Dates = styled.h2`
    font-size: 24px;
    color: grey;
    font-style: italic;
    font-weight: 400;
    margin-bottom: 20px;
`;

const Description = styled.p`
    margin-top: 50px;
`;

export default CourseDetails;