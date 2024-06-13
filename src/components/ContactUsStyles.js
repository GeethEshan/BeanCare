import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

export const LeftSide = styled.div`
  flex: 1;
  padding-right: 20px;
`;

export const RightSide = styled.div`
  flex: 1;
  padding-left: 20px;
`;

export const Title = styled.h1`
  color: blue;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 5px;
  }

  input,
  textarea {
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  button {
    padding: 8px 16px;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;

export const ContactDetails = styled.div`
  font-size: 16px;
`;

export const ContactLink = styled.a`
  color: blue;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
