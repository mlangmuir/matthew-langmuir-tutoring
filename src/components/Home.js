import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Background src="./assets/bg-2.jpg" alt="classroom background" />
            <TextDiv>
                <Title>Welcome to our classroom!</Title>
                <ButtonDiv>
                    <StyledLink to="/course-material">Access Course Material</StyledLink>
                    <StyledLink to="/submission">Submit An Assignment</StyledLink>
                </ButtonDiv>
            </TextDiv>
        </>
    )
}

const TextDiv = styled.div`
    padding: 20px;
    width: 100%;
    height: 90%;
    color: white;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;

    @media (max-width: 855px) {
        align-items: center;
    }
`;

const Background = styled.img`
    position: fixed;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const Title = styled.h1`
    font-family: 'Fredericka the Great', cursive;
    font-size: 64px;

    @media (max-width: 855px) {
        text-align: center;
    }
`;

const ButtonDiv = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 855px) {
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 630px) {
        flex-direction: column;
        margin-top: 50px;
    }
`;

const StyledLink = styled(Link)`
    font-family: 'Fredericka the Great', cursive;
    font-size: 24px;
    padding: 10px 20px;
    background-color: transparent;
    color: white;
    border-radius: 8px;
    text-decoration: none;
    font-style: italic;

    :hover {
        cursor: pointer;
        transform: scale(1.05);
    }
`;

export default Home;