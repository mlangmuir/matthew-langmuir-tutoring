import styled from 'styled-components';

const About = () => {
    return (
        <Wrapper>
            <TextDiv>
                <TitleDiv>
                    <Title>ABOUT THE INSTRUCTOR</Title>
                    <Portrait src="/assets/new-portfolio-photo.jpg" alt="Matthew Langmuir portrait" />
                    <Text style={{fontWeight: '700'}}>MATTHEW LANGMUIR</Text>
                </TitleDiv>
                <Text>Originally from Taipei, Matthew did most of his studies in Vancouver, graduating from the University of British Columbia in 2018 with a Bachelor of Arts in Political Science. In the years that followed, Mr. Matthew worked passionately in youth work as both a social worker and English language assistant.</Text>
                <Text>In addition to his passion for teaching and coding, Matthew is also an avid traveller, having ventured to 27 countries across five continents. He also enjoys playing and watching hockey and soccer in his spare time.</Text>
                <Text>Matthew is currently pursuing a diploma in web development at Concordia University and hopes to become a software developer in the near future while continuing his work in teaching!</Text>
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
    position: absolute;
    width: 600px;
    font-size: 20px;
    padding-top: 125px;
    padding-bottom: 50px;
    line-height: 30px;
    color: white;
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
`;

const Portrait = styled.img`
    margin-top: 25px;
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 600px;
`;

const Text = styled.p`
    font-size: 24px;
    text-align: justify;
    font-family: 'Exo 2', sans-serif;
`;

export default About;