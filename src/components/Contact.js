import styled from 'styled-components';

const Contact = () => {
    return (
        <Container>
            <Form>
                <Title>CONTACT ME</Title>
                <Description>Got questions or comments? Drop me a line and I'll get back to you via email as soon as possible!</Description>
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
                    <Submit type="submit" />
                </InputDiv>
            </Form>
            <CoverShade />
            <Background src="/assets/vancouver-bg.jpeg" alt="vancouver-background"/>
        </Container>
    )
}

const Container = styled.div`
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Form = styled.form`
    z-index: 3;
    margin-top: 150px;
    padding: 25px 25px;
    max-width: 620px;
    font-size: 18px;
    color: white;
    text-shadow: 1px 1px black;
`;

const Title = styled.h1`
    font-family: 'Fredericka the Great', cursive;
    font-weight: bold;
    font-size: 42px;
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
        margin-bottom: 20px;
    }
`;

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 24px;
    margin-top: 25px;

    @media (max-width: 650px) {
        font-size: 20px;
    }
`;

const Input = styled.input`
    width: 100%;
    height: 40px;
    display: flex;
    font-size: 22px;
    border: none;
    border-radius: 5px;
    resize: none;

    @media (max-width: 650px) {
        font-size: 20px;
        height: 30px;
    }
`;

const TextArea = styled.textarea`
    height: 100px;
    font-size: 22px;
    border: none;
    border-radius: 5px;

    @media (max-width: 650px) {
        font-size: 20px;
        height: 75px;
    }
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
    opacity: 70%;
`;

const Background = styled.img`
    z-index: 1;
    position: fixed;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

export default Contact;