import styled from 'styled-components';

const About = () => {
    return (
        <Wrapper>
            <TextDiv>
                <TitleDiv>
                    <Title>ABOUT THE INSTRUCTOR</Title>
                    <Portrait src="/assets/new-portfolio-photo.jpg" alt="Matthew Langmuir portrait" />
                    <Name>MATTHEW LANGMUIR</Name>
                </TitleDiv>
                <Text>Originally from Taipei, Matthew did most of his studies in Vancouver, graduating from the University of British Columbia in 2018 with a Bachelor of Arts in Political Science. In the years that followed, Matthew worked passionately in youth work as both a social worker and English language assistant.</Text>
                <Text>In addition to his passion for teaching and coding, Matthew is also an avid traveller, having ventured to 27 countries across five continents. He also enjoys playing and watching hockey and soccer in his spare time.</Text>
                <Text>Matthew is currently pursuing a diploma in web development at Concordia University and hopes to become a software developer in the near future while continuing to offer tutorials to adolescent youth.</Text>
            </TextDiv>
            <CoverShade />
            <Background src="/assets/bg-1.jpg" alt="classroom background"/>
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
    margin-top: 50px;
    position: absolute;
    width: 600px;
    font-size: 20px;
    padding-top: 125px;
    padding-bottom: 50px;
    line-height: 30px;
    color: white;

    @media (max-width: 650px) {
        width: 300px;
    }
`;

const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

const Title = styled.h2`
    font-family: 'Fredericka the Great', cursive;
    font-size: 44px;
    text-align: center;

    @media (max-width: 650px) {
        font-size: 28px;
    }
`;

const Portrait = styled.img`
    margin-top: 25px;
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 600px;

    @media (max-width: 650px) {
        width: 200px;
        height: 200px;
    }
`;

const Name = styled.p`
    font-weight: 700;
    font-size: 28px;
    margin: 30px 0;
`;

const Text = styled.p`
    font-size: 24px;
    line-height: 32px;
    text-align: justify;
    font-family: 'Exo 2', sans-serif;

    @media (max-width: 650px) {
        font-size: 20px;
    }
`;

export default About;