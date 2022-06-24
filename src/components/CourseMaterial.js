import styled from 'styled-components';
import { courses } from '../data';
import { Link } from 'react-router-dom';

export const courseArray = Object.values(courses);

const CourseMaterial = () => {
    return (
        <Container>
            <Wrapper>
                <Title>COURSES</Title>
                <CourseDiv>
                    {courseArray.map((item, index) => {
                        return (
                            <StyledLink to={`course-material/${item.id}`} key={index}>
                                <Image src={item.imageSrc} />
                                <TextDiv>
                                    <Name>{item.name}</Name>
                                    <Dates>{item.dates}</Dates>
                                </TextDiv>
                            </StyledLink>
                        )
                    })}
                </CourseDiv>
            </Wrapper>
            <Background src="./assets/bg-3.jpg" alt="library background" />
            <CoverShade />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    width: 100vw;
`;

const Title = styled.h1`
    color: white;
    padding-top: 125px;
    margin-bottom: 50px;
    font-family: 'Fredericka the Great', cursive;
    font-size: 44px;

    @media (max-width: 500px) {
        font-size: 28px;
    }
`;

const Wrapper = styled.div`
    z-index: 3;
    margin-top: 50px;
    text-align: center;
`;

const CourseDiv = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 1275px) {
        flex-direction: column;
    }
`;

const StyledLink = styled(Link)`
    text-align: center;
    text-decoration: none;
    padding: 0 20px;

    :hover {
        transform: scale(1.05);
    }

    @media (max-width: 1275px) {
        margin-bottom: 75px;
    }
`;

const Image = styled.img`
    z-index: 4;
    width: 600px;
    height: 300px;
    object-fit: cover;
    border-radius: 20px;
    margin-bottom: 20px;
    box-shadow: 0px 0px 60px 0px white;

    @media (max-width: 650px) {
        width: 300px;
        height: 150px;
    }
`;

const TextDiv = styled.div`
    width: 600px;
    z-index: 6;
    color: white;
    line-height: 20px;

    @media (max-width: 650px) {
        width: 300px;
    }
`;

const Name = styled.h2`
    font-family: 'Fredericka the Great', cursive;
    font-size: 28px;
    line-height: 40px;

    @media (max-width: 500px) {
        font-size: 20px;
    }
`;

const Dates = styled.h3`
    font-size: 20px;
    font-style: italic;
    font-weight: 400;

    @media (max-width: 500px) {
        font-size: 16px;
    }
`;

const Background = styled.img`
    z-index: 1;
    position: fixed;
    width: 100vw;
    height: 100vh;
`;

const CoverShade = styled.div`
    z-index: 2;
    position: fixed;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-color: black;
    opacity: 60%;
`;

export default CourseMaterial;