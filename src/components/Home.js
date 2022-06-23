import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Wrapper>
            <Background src="./assets/bg-2.jpg" alt="classroom background" />
            <TextDiv>
                <Title>Welcome to our classroom!</Title>
                <ButtonDiv>
                    <StyledLink exact to="/course-material">Access Course Material</StyledLink>
                    <StyledLink exact to="/submission">Submit An Assignment</StyledLink>
                </ButtonDiv>
            </TextDiv>
        </Wrapper>
    )
}

const Wrapper = styled.div`

`;

const TextDiv = styled.div`
    width: 100%;
    height: 90%;
    color: white;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

const Background = styled.img`
    position: absolute;
    width: 100vw;
`;

const Title = styled.h1`
    font-family: 'Fredericka the Great', cursive;
    font-size: 64px;
    margin-right: 20px;
`;

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledLink = styled(Link)`
    font-family: 'Fredericka the Great', cursive;
    font-size: 24px;
    margin-right: 20px;
    padding: 10px 20px;
    background-color: transparent;
    color: white;
    border-radius: 8px;
    text-decoration: none;
    font-style: italic;

    :hover {
        cursor: pointer;
        transform: scale(0.975);
    }
`;

export default Home;