import styled from 'styled-components';

const Submission = () => {

    return (
        <Container>
            <Wrapper>
                <Form>
                    <Title>SUBMIT YOUR ASSIGNMENT</Title>
                    <Description>Please attach either a PDF, Word or Pages file.</Description>
                    <InputDiv>
                        <label required>Name: </label>
                        <Input type="name" placeholder=" Name" required />
                    </InputDiv>
                    <InputDiv>
                        <label>Email: </label>
                        <Input type="email" placeholder=" Email" required />
                    </InputDiv>
                    <InputDiv>
                        <label>Comments:</label>
                        <TextArea placeholder=" Enter your comments here!"></TextArea>
                    </InputDiv>
                    <InputDiv>
                        <Submit id="submit" type="submit" />
                    </InputDiv>
                </Form>
            </Wrapper>
            <CoverShade />
            <Background src="/assets/homework-bg.jpeg" alt="homework-page-background"/>
        </Container>
    )
}

const Container = styled.div`
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Wrapper = styled.div`
    z-index: 3;
    display: flex;
    align-items: center;
    height: 100vh;
`;

const Form = styled.form`
    padding: 0 20px;
    max-width: 620px;
    font-size: 18px;
    color: white;
    text-shadow: 1px 1px black;
`;

const Title = styled.h1`
    font-family: 'Fredericka the Great', cursive;
    font-weight: bold;
    font-size: 39px;
    color: white;
    text-align: center;

    @media (max-width: 500px) {
        font-size: 28px;
    }
`;

const Description = styled.p`
    font-size: 22px;
    color: white;
    text-align: justify;
    margin-top: 20px;
    margin-bottom: 50px;

    @media (max-width: 500px) {
        font-size: 20px;
    }
`;

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 24px;
    margin-top: 25px;
`;

const Input = styled.input`
    width: 100%;
    height: 40px;
    display: flex;
    font-size: 22px;
    border: none;
    border-radius: 5px;
`;

const TextArea = styled.textarea`
    height: 100px;
    font-size: 22px;
    border: none;
    border-radius: 5px;
    resize: none;
`;

const Submit = styled.input`
    height: 45px;
    background-color: #999900;
    color: white;
    font-size: 22px;
    border: none;
    border-radius: 8px;

    :hover {
        cursor: pointer;
        opacity: 75%;
    }
`;

const CoverShade = styled.div`
    z-index: 2;
    position: fixed;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    background-color: black;
    opacity: 80%;
`;

const Background = styled.img`
    z-index: 1;
    position: fixed;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

export default Submission;