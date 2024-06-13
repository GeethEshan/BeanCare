import React from 'react';
import styled from 'styled-components';
import background from '../images/background.png';

const HomeSection = styled.section`
  height: 100vh;
  background: url(${background}) no-repeat center center/cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  padding-top: 100px; /* Adjust this value to position the content below the navbar */
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-top: 20px; /* Add some margin to create space between the logo and the title */
`;

const Home = () => {
  return (
    <HomeSection id="home">
      
    </HomeSection>
  );
};

export default Home;
