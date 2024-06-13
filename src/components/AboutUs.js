import React from 'react';
import styled from 'styled-components';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpeg';
import image5 from '../images/image5.jpeg';
import image6 from '../images/image6.jpeg';
import { AboutUsContainer, Title, SectionContainer, Section, Image, Role } from './aboutusstyle';

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <Title>About Us</Title>
      <SectionContainer>
        <Section>
          <Image src={image3} alt="Perera M.T.G.E" />
          <h3>Perera M.T.G.E</h3>
          <p>IT20647100</p>
          <Role>Role in Project: Disease Diagnosis for Bean Pods</Role>
        </Section>
        <Section>
          <Image src={image4} alt="Subasinghe H.K.A.A.S" />
          <h3>Subasinghe H.K.A.A.S</h3>
          <p>IT20299170</p>
          <Role>Role in Project: Disease Diagnosis for Bean Leaves</Role>
        </Section>
        <Section>
          <Image src={image5} alt="Bandara Higgoda T.T.S" />
          <h3>Bandara Higgoda T.T.S</h3>
          <p>IT20119362</p>
          <Role>Role in Project: Market Price Prediction</Role>
        </Section>
        <Section>
          <Image src={image6} alt="Devinda K.K.D" />
          <h3>Devinda K.K.D</h3>
          <p>IT20249502</p>
          <Role>Role in Project: Rainfall Prediction</Role>
        </Section>
      </SectionContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;
