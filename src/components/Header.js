import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <NavBar>
            <TitleNavLink to='/'>
                <TitleOne>MATTHEW LANGMUIR</TitleOne>
                <TitleTwo>TUTORING</TitleTwo>
            </TitleNavLink>
            <LinkDiv>
                <StyledNavLink exact to='/'
                    activeStyle={{
                        borderBottom: "1.5px solid #2E67F8",
                        color: "#2E67F8"
                    }}
                >
                    Home
                </StyledNavLink>
                <StyledNavLink exact to='/about'
                    activeStyle={{
                        borderBottom: "1.5px solid #2E67F8",
                        color: "#2E67F8"
                    }}
                >
                    About
                </StyledNavLink>
                <StyledNavLink exact to='/course-material'
                    activeStyle={{
                        borderBottom: "1.5px solid #2E67F8",
                        color: "#2E67F8"
                    }}
                >
                    Course Material
                </StyledNavLink>
                <StyledNavLink exact to='/submission'
                    activeStyle={{
                        borderBottom: "1.5px solid #2E67F8",
                        color: "#2E67F8"
                    }}
                >
                    Submission
                </StyledNavLink>
                <StyledNavLink exact to='/contact'
                    activeStyle={{
                        borderBottom: "1.5px solid #2E67F8",
                        color: "#2E67F8"
                    }}
                >
                    Contact
                </StyledNavLink>
            </LinkDiv>
        </NavBar>
    )
}

const NavBar = styled.nav`
    background-color: transparent;
    position: absolute;
    z-index: 999;
    width: 100%;
    display: flex;
    justify-content: space-between;
    height: 60px;
    font-family: 'Exo 2', sans-serif;
    font-weight: 700;

    @media (max-width: 1050px) {
        flex-direction: column;
    }
`;

const LinkDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
    margin-right: 20px;

    @media (max-width: 1100px) {
        width: 70%;
    }

    @media (max-width: 1050px) {
        width: 100%;
        padding: 20px;
    }
`;

const TitleNavLink = styled(NavLink) `
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    color: white;
`;

const StyledNavLink = styled(NavLink)`
    font-size: 20px;
    text-decoration: none;
    color: white;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 550px) {
        font-size: 14px;
    }
`;

const TitleOne = styled.span`
    font-size: 24px;
    font-weight: 700;
    margin-left: 20px;
    margin-top: 10px;
`;

const TitleTwo = styled.span`
    margin-top: -5px;
    font-size: 14px;
`;

export default Header;