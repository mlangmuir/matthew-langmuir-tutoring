import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { courses } from '../data';

const WeekDetails = () => {

    const courseId = useParams();

    const weekData = courses[courseId.courseId].week[courseId.weekId - 1];

    console.log(weekData)

    return (
        <Container>
            <TextDiv>
                <Title>{`WEEK ${courses[courseId.courseId].week[courseId.weekId - 1].id}`}</Title>
                <Dates>{ weekData.dates }</Dates>
                <SectionTitle>In class this week:</SectionTitle>
                {weekData.class.map((item,index) => {
                    return (
                        <ul>
                            <Description key={index}>{item}</Description>
                        </ul>
                    )
                })}
                <SectionTitle>Homework:</SectionTitle>
                {weekData.homework.map((item,index) => {
                    return (
                        <ul>
                            <Description key={index}>{item}</Description>
                        </ul>
                    )
                })}
                <SectionTitle>Attachments:</SectionTitle>
                {weekData.attachments.map((item,index) => {
                    return <Attachments key={index}>{item}</Attachments>
                })}
            </TextDiv>
            <CoverShade />
            <Background src={courses[courseId.courseId].imageSrc} alt="homework-page-background" />
        </Container>
    )
}


const Container = styled.div`
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TextDiv = styled.div`
    width: 900px;
    border-radius: 8px;
    padding: 20px;
    z-index: 3;
    margin-top: 150px;
    margin-bottom: 75px;
    color: white;
    text-align: justify;
`;

const Title = styled.h1`
    font-family: 'Fredericka the Great', cursive;
    font-size: 42px;
    text-align: center;
`;

const Dates = styled.h2`
    font-size: 24px;
    text-align: center;
    color: grey;
    font-style: italic;
    font-weight: 400;
    margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
    font-weight: 700;
    font-size: 28px;
    margin-top: 75px;
    margin-bottom: 25px;
`;

const Description = styled.li`
    font-size: 24px;
    margin-left: -10px;
`;

const Attachments = styled.p`
    font-size: 24px;
`;

const CoverShade = styled.div`
    z-index: 2;
    position: fixed;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-color: black;
    opacity: 85%;
`;

const Background = styled.img`
    z-index: 1;
    position: fixed;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

export default WeekDetails;