import { FunctionComponent } from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  width: 100%;
  background-color: #3e3092;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Inter", sans-serif;
  color: #fff;
`;

const Navbar = styled.nav`
  width: 100%;
  background-color: rgba(253, 253, 253, 0.45);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
  box-sizing: border-box;
  border-radius: 111px;
  max-width: 1200px;
  margin: 20px auto;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;

  a {
    text-decoration: none;
    font-weight: 800;
    font-size: 18px;
    color: #000;
    &:hover {
      color: #ff3bff;
    }
  }
`;

const Section = styled.section`
  width: 100%;
  text-align: center;
  padding: 40px 20px;
`;

const Hero = styled.div`
  background-image: url("./assets/artist3.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);

  h1 {
    font-size: 64px;
    margin: 0;
  }

  h2 {
    font-size: 32px;
    margin: 20px 0;
  }
`;

const Features = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px;

  img {
    width: 300px;
    height: 300px;
    border-radius: 20px;
    object-fit: cover;
  }
`;

const CallToAction = styled.div`
  padding: 40px;
  background-color: #000;
  text-align: center;
  border: 2px solid #ff3bff;
  border-radius: 20px;

  button {
    background-color: #ff3bff;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    padding: 10px 20px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #fff;
      color: #ff3bff;
    }
  }
`;

const Footer = styled.footer`
  background-color: #1a1a1a;
  padding: 20px;
  text-align: center;
  color: #fff;
  font-size: 14px;
`;

// Component
const LandingPage: FunctionComponent = () => {
  return (
    <Container>
      {/* Navbar */}
      <Navbar>
        <NavLinks>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
        </NavLinks>
        <NavLinks>
          <a href="#team">Team</a>
          <a href="#contact">Contact Us</a>
        </NavLinks>
      </Navbar>

      {/* Hero Section */}
      <Hero>
        <h1>Discover. Define. Dominate.</h1>
        <h2>Your Journey to Greatness Starts Here</h2>
      </Hero>

      {/* Features Section */}
      <Section>
        <h2>Explore Your Talents</h2>
        <Features>
          <img src="./assets/cityscape.png" alt="Cityscape" />
          <img src="./assets/robot.png" alt="Robot" />
          <img src="./assets/meta.png" alt="Meta" />
        </Features>
      </Section>

      {/* Call to Action Section */}
      <CallToAction>
        <h2>Step Into the Future of Social Interaction!</h2>
        <p>
          Transform into your avatar, explore virtual rooms, and connect with
          others through chat or video calls in a whole new reality!
        </p>
        <button>Try Virtual House Now</button>
      </CallToAction>

      {/* Footer */}
      <Footer>
        Content creation will never be the same again. Join Lithouse and lead
        the way into a bold, new reality.
      </Footer>
    </Container>
  );
};

export default LandingPage;
