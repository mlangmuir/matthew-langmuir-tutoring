import styled from 'styled-components';

const Contact = () => {
    return (
        <>
            <CoverShade />
            <Background src="/assets/vancouver-bg.jpeg" alt="vancouver-background"/>
        </>
    )
}

const CoverShade = styled.div`
    z-index: 2;
    position: fixed;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-color: black;
    opacity: 50%;
`;

const Background = styled.img`
    z-index: 1;
    position: fixed;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

export default Contact;