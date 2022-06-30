import styled from 'styled-components';
import { useState, useRef } from 'react';

const Submission = () => {
    const [sendSuccess, setSendSuccess] = useState(false);
    const [fileData, setFileData] = useState();
    const [nameData, setNameData] = useState();

    const handleFileChange = (e) => {
        setFileData(e.target.files[0]);
    }
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle file data from state before sending
        const data = new FormData();
        data.append("assignment", fileData);

        fetch("http://localhost:4000/single", {
            method: "POST",
            body: data,
        })
            .then((result) => {
                setSendSuccess(true)
            }, (error) => {
                alert("An error has occurred. Please try again!")
            })
    }

    return (
        <Container>
            {sendSuccess && <Confirmation><p>Your assignment has been submitted. Thank you!</p></Confirmation>}
            <Form onSubmit={handleSubmit} ref={form} style={{display: sendSuccess === true && "none"}}>
                <Title>SUBMIT YOUR ASSIGNMENT</Title>
                <Description>Please upload either a PDF, Word or Pages file.</Description>
                <InputDiv>
                    <label required>Name: </label>
                    <Input onChange={(e) => setNameData(e.target.value)} type="name" placeholder=" Name" name="name" required />
                </InputDiv>
                <InputDiv>
                    <label>Email: </label>
                    <Input type="email" placeholder=" Email" name="email" required />
                </InputDiv>
                <InputDiv>
                    <label>Submission Title: </label>
                    <Input type="name" placeholder=" Submission Title" name="subject" required />
                </InputDiv>
                <InputDiv>
                    <input onChange={handleFileChange} type="file" name="assignment" required />
                </InputDiv>
                <InputDiv>
                    <Submit onSubmit={() => { return false }} type="submit" />
                </InputDiv>
            </Form>
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

const Confirmation = styled.div`
    z-index: 6;
    height: 100vh;
    width: 40%;
    text-align: center;
    display: flex;
    align-items: center;
    font-size: 32px;
    color: white;
`;

const Form = styled.form`
    z-index: 3;
    margin-top: 100px;
    padding: 75px 25px;
    max-width: 620px;
    font-size: 18px;
    color: white;
    text-shadow: 1px 1px black;

    @media (max-width: 500px) {
        width: 90%;
    }
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
        margin-bottom: 20px;
    }
`;

const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 24px;
    margin-top: 50px;

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