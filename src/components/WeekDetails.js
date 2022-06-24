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
                {weekData.classTwo &&
                    <ClassDate>{weekData.classDates[0]}</ClassDate>
                }
                <SectionTitle>In class:</SectionTitle>
                {weekData.class.map((item,index) => {
                    return (
                        <ul key={index}>
                            <Description key={index}>{item}</Description>
                        </ul>
                    )
                })}
                {weekData.homework[0] !== "" &&
                    <SectionTitle>Homework:</SectionTitle>
                }
                {weekData.homework.map((item, index) => {
                    return (
                        <div key={index}>
                            {item !== "" &&
                                <ul>
                                    <Description key={index}>{item}</Description>
                                </ul>
                            }
                        </div>
                    )
                })}
                {weekData.attachments[0] !== "" &&
                    <SectionTitle>Attachments:</SectionTitle>
                }
                {weekData.attachments.map((item, index) => {
                    return (
                        <div key={index}>
                            {item !== "" &&
                                <Attachments key={index}>{item}</Attachments>
                            }
                        </div>
                    )
                })}
                {weekData.classTwo &&
                    <ClassTwoDiv>
                        <ClassDate>{weekData.classDates[1]}</ClassDate>
                        <SectionTitle>In class:</SectionTitle>
                        {weekData?.classTwo.map((item, index) => {
                            return (
                                <ul key={index}>
                                    <Description key={index}>{item}</Description>
                                </ul>
                            )
                        })}
                        {weekData?.homeworkTwo[0] !== "" &&
                            <SectionTitle>Homework:</SectionTitle>
                        }
                        {weekData?.homeworkTwo.map((item, index) => {
                            return (
                                <div key={index}>
                                    {item !== "" &&
                                        <ul>
                                            <Description key={index}>{item}</Description>
                                        </ul>
                                    }
                                </div>
                            )
                        })}
                        {weekData?.attachmentsTwo[0] !== "" &&
                            <SectionTitle>Attachments:</SectionTitle>
                        }
                        {weekData?.attachmentsTwo.map((item, index) => {
                            return (
                                <div key={index}>
                                    {item !== "" &&
                                        <Attachments key={index}>{item}</Attachments>
                                    }
                                </div>
                            )
                        })}
                    </ClassTwoDiv>
                }
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
    margin-top: 175px;
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

const ClassDate = styled.h2`
    font-family: 'Fredericka the Great', cursive;
    font-weight: 700;
    margin-top: 50px;
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

const ClassTwoDiv = styled.div`
    margin-top: 150px;
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