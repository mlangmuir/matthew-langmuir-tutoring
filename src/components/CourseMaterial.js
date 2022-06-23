import styled from 'styled-components';
import { courses } from '../data';
import { Link } from 'react-router-dom';

export const courseArray = Object.values(courses);

const CourseMaterial = () => {
    return (
        <Container>
            <Wrapper>
                <Title>COURSES</Title>
                {courseArray.map((item, index) => {
                    return (
                        <CourseDiv>
                            <StyledLink to={`courses/${item.id}`} key={`title + ${index}`}>
                                <Image src={item.imageSrc} />
                                <TextDiv>
                                    <Name>{item.name}</Name>
                                    <Dates>{item.dates}</Dates>
                                </TextDiv>
                            </StyledLink>
                        </CourseDiv>
                    )
                })}
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
`;

const Wrapper = styled.div`
    z-index: 3;
    text-align: center;
`;

const CourseDiv = styled.div`
    margin-bottom: 75px;

    :hover {
        transform: scale(1.05);
    }
`;

const StyledLink = styled(Link)`
    width: 600px;
    text-align: center;
    text-decoration: none;
`;

const Image = styled.img`
    z-index: 4;
    width: 600px;
    object-fit: cover;
    border-radius: 20px;
`;

const TextDiv = styled.div`
    width: 600px;
    z-index: 6;
    color: white;
    line-height: 20px;
`;

const Name = styled.h2`
    font-size: 28px;
    line-height: 40px;
`;

const Dates = styled.h3`
    font-size: 20px;
    font-style: italic;
    font-weight: 400;
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