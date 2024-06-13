import styled from 'styled-components';

export const Section = styled.section`
  padding: 4rem 2rem;
  background: #f4f4f4;
`;

export const MainTitle = styled.h2`
  font-size: 2.5rem;
  color: blue;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333;
`;

export const SubTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #666;
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #555;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 1rem 0;
`;

export const Grid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const GridItem = styled.div`
  flex: 1;
  min-width: 300px;
  margin-bottom: 20px;
`;

export const Video = styled.video`
  width: 100%;
  height: auto;
  margin-bottom: 20px;
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

export const IconGrid = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const IconGridItem = styled.div`
  flex: 1;
  text-align: center;
  margin-bottom: 20px;
  min-width: 100px;
`;

export const IconTitle = styled.h4`
  font-size: 1.2rem;
  margin-top: 10px;
`;
