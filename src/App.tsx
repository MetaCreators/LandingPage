import { FunctionComponent } from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  width: 100%;
  background-color: #000;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Inter", sans-serif;
  color: #fff;
  position: relative; /* Ensure stacking context for navbar */
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
  position: absolute; /* Position navbar over the image */
  top: 0; /* Align it to the top of the container */
  left: 0;
  right: 0;
  z-index: 10; /* Ensure it appears above other elements */
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
  background-image: url("/images/artist3.png");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 600px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);

  h1 {
    font-size: 64px;
    margin: 0;
  }

  h2 {
    font-size: 32px;
    margin: 20px 0;
    color: #ff3bff;
  }

  .text-content {
    max-width: 50%;
    padding: 20px;
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
  width: 100%;
  padding: 40px;
  background-color: #0b0510;
  text-align: center;
  color: #fff;

  h2 {
    font-size: 28px;
    font-weight: 400;
    margin-bottom: 20px;
    span {
      font-weight: 700;
      color: #ff3bff;
    }
  }

  p {
    font-size: 16px;
    max-width: 800px;
    margin: 0 auto 20px;
    line-height: 1.5;
    color: #fff;
    span {
      font-weight: 700;
      color: #ff3bff;
    }
  }

  button {
    background-color: transparent;
    color: #fff;
    border: 1px solid #ff3bff;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      background-color: #ff3bff;
      color: #fff;
    }
  }
`;

const CallToAction2 = styled.div`
  width: 100vw;
  background-image: url("/images/metaverse.jpg");
  background-size: cover;
  background-position: center;
  margin: 0;
  padding: 40px 20px;
  text-align: center;
  color: #fff;
  height: 100vh; /* Full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h2 {
    font-size: 48px;
    font-weight: 400;
    margin-bottom: 20px;
    span {
      font-weight: 700;
      color: #ff3bff;
    }
  }

  p {
    font-size: 18px;
    max-width: 900px;
    margin: 20px auto 0; /* Auto top and bottom margin, 0 for bottom */
    line-height: 1.7;
    color: #fff;
    span {
      font-weight: 700;
      color: #ff3bff;
    }
  }

  button {
    background-color: transparent;
    color: #fff;
    border: 1px solid #ff3bff;
    font-size: 18px;
    font-weight: bold;
    padding: 12px 24px;
    border-radius: 12px;
    cursor: pointer;
    margin: 20px auto; /* Center the button horizontally */
    transition: all 0.3s;

    &:hover {
      background-color: #ff3bff;
      color: #fff;
    }
  }
`;

const Footer = styled.footer`
  background-color: #000;
  padding: 40px 20px;
  text-align: center;
  color: #fff;
  width: 100vh;

  img {
    width: 100px; /* Adjust as necessary */
    height: 100px; /* Adjust as necessary */
    margin-bottom: 20px;
    border-radius: 2%; /* If circular image is desired */
  }

  h3 {
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #aaa;
    line-height: 1.5;

    span {
      font-weight: bold;
      color: #ff3bff;
    }
  }
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
        <div className="text-content">
          <h1>Discover. Define. Dominate.</h1>
          <h2>Your Journey to Greatness Starts Here</h2>
        </div>
      </Hero>

      {/* Features Section */}
      <Section>
        <h2>Explore Your Talents</h2>
        <Features>
          <img src="/images/street.png" alt="Cityscape" />
          <img src="/images/candid.png" alt="Robot" />
          <img src="/images/scull.png" alt="Meta" />
        </Features>
      </Section>

      {/* Call to Action Section */}
      <CallToAction>
        <h2>
          Effortlessly generate <span>high performance</span> thumbnails, script
          and descriptions in just a <span>few clicks</span>
        </h2>
        <button>Try now</button>
      </CallToAction>

      {/* Second Call to Action Section */}

      <CallToAction2>
        <div>
          {/* <div style={{}}></div> */}

          <div>
            <h2>
              Step Into the <span>Future</span> of Social Interaction!
            </h2>
            {/* <p>
          Transform into your avatar, explore virtual rooms, and connect with
          others through chat or video calls in a <span>whole new reality</span>!
        </p> */}

            {/* <div style={{height:'', visibility:'hidden'}}></div>  */}

            <div style={{ height: "100px" }}></div>

            <button>Try Virtual House Now</button>
          </div>
        </div>
        <p style={{ marginBottom: "16px" }}>
          Transform into your avatar, explore virtual rooms, and connect with
          others through chat or video calls in a <span>whole new reality</span>
          !
        </p>
      </CallToAction2>

      {/* Footer */}
      <Footer>
        <img src="/images/logo.png" alt="Logo" />
        <h3>Content creation will never be the same again</h3>
        <p>
          Join <span>Lithouse</span> and lead the way into a{" "}
          <span>bold, new reality</span>.
        </p>
      </Footer>
    </Container>
  );
};

export default LandingPage;
