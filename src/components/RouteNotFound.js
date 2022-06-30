import styled from "styled-components";

const RouteNotFound = () => {
    return (
        <Wrapper>
            <TextDiv>
                <h1>404</h1>
                <p>The page you want is not defined.</p>
            </TextDiv>
            <CoverShade />
            <Background src="/assets/space-bg.jpeg" alt="space background"/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const TextDiv = styled.div`
    z-index: 3;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
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

const Background = styled.img`
    z-index: 1;
    position: fixed;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

export default RouteNotFound;