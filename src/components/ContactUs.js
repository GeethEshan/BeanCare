import React from 'react';
import {
  Container,
  LeftSide,
  RightSide,
  Title,
  Form,
  ContactDetails,
  ContactLink,
} from './ContactUsStyles';

const ContactUs = () => {
  return (
    <Container>
      <LeftSide>
        <Title>Contact Us</Title>
        <h2>Get in Touch</h2>
        <Form>
          <label>Name:</label>
          <input type="text" />
          <label>Email Address:</label>
          <input type="email" />
          <label>Message/Query:</label>
          <textarea></textarea>
          <button type="submit">Submit</button>
        </Form>
      </LeftSide>
      <RightSide>
        
        <h2>Contact Details</h2>
        <ContactDetails style={{ marginTop: '70px' }}></ContactDetails>
        <ContactDetails>
          For further queries please reach us at{' '}
          <ContactLink href="mailto:researchbeancare@gmail.com">
            researchbeancare@gmail.com
          </ContactLink>
        </ContactDetails>
        <ContactDetails style={{ marginTop: '20px' }}>
          <br />
          Hope this project helped you in some manner. Thank you!<br />
          -Team BeanCare
        </ContactDetails>
      </RightSide>
    </Container>
  );
};

export default ContactUs;
