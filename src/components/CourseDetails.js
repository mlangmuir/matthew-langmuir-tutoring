import styled from 'styled-components';
import { useParams, Link } from "react-router-dom";
import { courses } from '../data';

const CourseDetails = () => {

    const { courseId } = useParams();

    return (
        <Container>
            <TextDiv>
                <Title>{ courses[courseId].name }</Title>
                <Dates>{ courses[courseId].dates }</Dates>
                <SectionTitle>Course Description:</SectionTitle>
                <Description>{ courses[courseId].description }</Description>
                <SectionTitle>Evaluation:</SectionTitle>
                {courses[courseId]?.evaluation.map((item, index) => {
                    return (
                        <Evaluation key={index}>{ item }</Evaluation>
                    )
                })}
            </TextDiv>
            <WeekDiv>
            {courses[courseId].week?.map((item, index) => {
                return (
                    <StyledLink to={`${courseId}/${item.id}`} key={index}>
                        <WeekNumber>Week { item.id }</WeekNumber>
                        <WeekDates>{ item.dates }</WeekDates>
                    </StyledLink>
                )
            })}
            </WeekDiv>
            <CoverShade />
            <Background src={ courses[courseId].imageSrc } alt="percy-jackson-background"/>
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
    color: white;
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

const Description = styled.p`
    font-size: 24px;
`;

const Evaluation = styled.li`
    line-height: 35px;
    font-size: 24px;
`;

const WeekDiv = styled.div`
    width: 900px;
    z-index: 3;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 50px;
    margin-bottom: 75px;
`;

const StyledLink = styled(Link)`
    margin: 20px 20px;
    height: 185px;
    width: 185px;
    color: white;
    box-shadow: 0px 0px 30px 0px white;
    border-radius: 8px;
    border: none;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;

    :hover {
        transform: scale(1.1);
    }
`;

const WeekNumber = styled.p`
    font-family: 'Fredericka the Great', cursive;
    font-size: 28px;
    text-align: center;
`;

const WeekDates = styled.p`
    font-size: 18px;
    text-align: center;
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

export default CourseDetails;