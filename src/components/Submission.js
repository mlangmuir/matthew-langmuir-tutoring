import styled from 'styled-components';
import { useState, useRef } from 'react';
import emailjs from "emailjs-com";

const Submission = () => {
    const [sendSuccess, setSendSuccess] = useState(false);
    const [fileData, setFileData] = useState({name: "default"});
    const [name, setName] = useState("default");
    const [email, setEmail] = useState("default");
    const [title, setTitle] = useState("default");

    const form = useRef();

    const handleFileChange = (e) => {
        setFileData(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // params: ('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        emailjs.sendForm('gmail', 'template_astj5yn', form.current, 'wVbfUlRQ5_wlcZvJ0')
            .then((result) => {
                console.log(result)
                setSendSuccess(true);
            }, (error) => {
                console.log(error)
                alert("An error has occurred. Please try again!");
            });

        // Handle file data from state before sending
        const data = new FormData();
        data.append("assignment", fileData);

        fetch("http://localhost:4000/single", {
            method: "POST",
            body: data
        })
            .then((result) => {
                setSendSuccess(true)
            }, (error) => {
                alert("An error has occurred. If you are on a phone or tablet, please upload your assignment from a computer.")
            })
    }

    return (
        <Container>
            {sendSuccess && <Confirmation><p>Your assignment has been submitted. You will be receiving an email shortly confirming that your work has been received!</p></Confirmation>}
            <Form onSubmit={handleSubmit} style={{display: sendSuccess === true && "none"}}>
                <Title>SUBMIT YOUR ASSIGNMENT</Title>
                <Description>Please upload either a PDF, Word or Pages file.</Description>
                <InputDiv>
                    <label required>Name: </label>
                    <Input onChange={(e) => setName(e.target.value)} type="name" placeholder=" Name" required />
                </InputDiv>
                <InputDiv>
                    <label>Email: </label>
                    <Input onChange={(e) => setEmail(e.target.value)} type="email" placeholder=" Email" required />
                </InputDiv>
                <InputDiv>
                    <label>Submission Title: </label>
                    <Input onChange={(e) => setTitle(e.target.value)} type="name" placeholder=" Submission Title" required />
                </InputDiv>
                <InputDiv>
                    <input onChange={handleFileChange} type="file" name="assignment" required />
                </InputDiv>
                <InputDiv>
                    <Submit onSubmit={() => { return false }} type="submit" />
                </InputDiv>
            </Form>
            {/* EmailJS API only allows messages up to 50kb. This is an invisible form that includes just the name, email and title allowing the site owner to be notified by email when a file is uploaded. */}
            <form ref={form} style={{display: 'none'}}>
                {console.log(fileData.name)}
                <input name="name" type="name" value={name} />
                <input name="email" type="email" value={email} />
                <input name="title" type="name" value={title} />
                <input name="filename" type="name" value={fileData.name} />
            </form>
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